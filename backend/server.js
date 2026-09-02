const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 4000);
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "123";
const DB_NAME = process.env.DB_NAME || "sya";

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET no está definido en backend/.env");
}

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  charset: "utf8mb4",
};

const pool = mysql.createPool(dbConfig);

app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json({ limit: "1mb" }));

async function inicializarBaseDeDatos() {
  const adminPool = mysql.createPool({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
  });

  await adminPool.query(
    `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`
     CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`
  );
  await adminPool.end();

  await pool.query(`
    CREATE TABLE IF NOT EXISTS admin_users (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      username VARCHAR(80) NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      role VARCHAR(30) NOT NULL DEFAULT 'admin',
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE KEY admin_users_username_unique (username)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS mensajes (
      id BIGINT UNSIGNED NOT NULL,
      nombre VARCHAR(120) NOT NULL,
      email VARCHAR(255) NOT NULL,
      telefono VARCHAR(40) NOT NULL DEFAULT '',
      asunto VARCHAR(180) NOT NULL DEFAULT '',
      mensaje TEXT NOT NULL,
      fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      leido BOOLEAN NOT NULL DEFAULT FALSE,
      PRIMARY KEY (id),
      KEY mensajes_fecha_index (fecha)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);

  const [users] = await pool.query(
    "SELECT id FROM admin_users WHERE username = ? LIMIT 1",
    [ADMIN_USER]
  );

  if (users.length === 0) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);
    await pool.query(
      "INSERT INTO admin_users (username, password_hash) VALUES (?, ?)",
      [ADMIN_USER, passwordHash]
    );
  }
}

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    req.admin = jwt.verify(token, JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
}

app.get("/", (req, res) => {
  res.json({
    message: "API S&A Santander y Asociados funcionando correctamente",
  });
});

app.get("/api/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", database: "connected" });
  } catch (error) {
    res.status(503).json({ status: "error", database: "unavailable" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ message: "Usuario y contraseña son obligatorios" });
  }

  try {
    const [users] = await pool.query(
      "SELECT id, username, password_hash, role FROM admin_users WHERE username = ? LIMIT 1",
      [username.trim()]
    );
    const user = users[0];

    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }

    const token = jwt.sign(
      { sub: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "8h" }
    );

    res.json({
      message: "Inicio de sesión correcto",
      token,
      user: { username: user.username, role: user.role },
    });
  } catch (error) {
    console.error("Error en login:", error.message);
    res.status(500).json({ message: "No se pudo procesar el inicio de sesión" });
  }
});

app.post("/api/mensajes", async (req, res) => {
  const { nombre, email, telefono, asunto, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({
      message: "Nombre, correo y mensaje son obligatorios",
    });
  }

  try {
    const nuevoMensaje = {
      id: Date.now(),
      nombre: String(nombre).trim(),
      email: String(email).trim(),
      telefono: String(telefono || "").trim(),
      asunto: String(asunto || "").trim(),
      mensaje: String(mensaje).trim(),
    };

    await pool.query(
      `INSERT INTO mensajes
       (id, nombre, email, telefono, asunto, mensaje)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        nuevoMensaje.id,
        nuevoMensaje.nombre,
        nuevoMensaje.email,
        nuevoMensaje.telefono,
        nuevoMensaje.asunto,
        nuevoMensaje.mensaje,
      ]
    );

    res.status(201).json({
      message: "Mensaje guardado correctamente",
      mensaje: { ...nuevoMensaje, leido: false },
    });
  } catch (error) {
    console.error("Error guardando mensaje:", error.message);
    res.status(500).json({ message: "No se pudo guardar el mensaje" });
  }
});

app.get("/api/mensajes", verificarToken, async (req, res) => {
  try {
    const [mensajes] = await pool.query(
      "SELECT id, nombre, email, telefono, asunto, mensaje, fecha, leido FROM mensajes ORDER BY fecha DESC"
    );
    res.json(mensajes);
  } catch (error) {
    res.status(500).json({ message: "No se pudieron cargar los mensajes" });
  }
});

app.patch("/api/mensajes/:id", verificarToken, async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE mensajes SET leido = TRUE WHERE id = ?",
      [Number(req.params.id)]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Mensaje no encontrado" });
    }

    res.json({ message: "Mensaje marcado como leído" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo actualizar el mensaje" });
  }
});

app.delete("/api/mensajes/:id", verificarToken, async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM mensajes WHERE id = ?",
      [Number(req.params.id)]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Mensaje no encontrado" });
    }

    res.json({ message: "Mensaje eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "No se pudo eliminar el mensaje" });
  }
});

inicializarBaseDeDatos()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor S&A ejecutándose en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("No se pudo iniciar la base de datos:", error.message);
    process.exit(1);
  });
