# S&A Santander y Asociados

Sitio web institucional de **S&A Santander y Asociados**, desarrollado con React y Vite. La página presenta la empresa, sus servicios, proyectos, experiencia y noticias, e incluye un formulario de contacto conectado a un backend y un panel administrativo para gestionar los mensajes recibidos.

## Contenido de la página

- **Inicio:** presentación principal y accesos rápidos a las secciones del sitio.
- **Nosotros:** información institucional de S&A Santander y Asociados.
- **Servicios:** servicios de ingeniería ofrecidos por la empresa.
- **Proyectos:** proyectos realizados y sus detalles.
- **Experiencia:** trayectoria y capacidades de la organización.
- **Noticias:** listado y detalle de publicaciones.
- **Contacto:** datos de contacto y formulario para enviar solicitudes.
- **Login:** acceso al área administrativa.
- **Admin:** listado de mensajes, contador de estados, actualización, marcado como leído y eliminación.

## Tecnologías

- React 19
- Vite
- React Router
- Express
- MySQL
- JSON Web Tokens (JWT)
- bcryptjs
- EmailJS opcional
- SweetAlert2
- Lucide React

## Requisitos

Instala en el computador:

- Node.js 18 o superior
- npm
- MySQL Server 8 o compatible
- HeidiSQL, opcional, para administrar visualmente MySQL

HeidiSQL **no almacena la base de datos**. Es una herramienta para conectarse a MySQL y consultar sus tablas.

## Instalación en otro computador

Después de clonar el repositorio, abre una terminal en la carpeta del proyecto:

```powershell
npm install
cd backend
npm install
cd ..
```

## Configurar MySQL

1. Asegúrate de que el servicio de MySQL esté iniciado.
2. Abre HeidiSQL y crea una sesión con estos datos habituales:

```text
Servidor: 127.0.0.1 o localhost
Puerto: 3306
Usuario: root
Contraseña: la contraseña configurada en MySQL
```

3. Puedes ejecutar manualmente [backend/data/schema.sql](backend/data/schema.sql) en HeidiSQL.
4. También puedes dejar que el backend cree automáticamente la base `sya` y sus tablas al iniciarse. El usuario de MySQL debe tener permiso para crear bases de datos y tablas.

Se crean estas tablas:

- `admin_users`: usuarios administrativos y contraseñas cifradas con bcrypt.
- `mensajes`: mensajes enviados desde el formulario de contacto.

## Configurar el backend

Crea el archivo `backend/.env`. Este archivo es local y no debe subirse al repositorio porque contiene credenciales.

```env
PORT=4000
JWT_SECRET=escribe_una_clave_larga_y_segura
ADMIN_USER=admin
ADMIN_PASSWORD=123

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=sya

# Opcional: origen permitido del frontend
FRONTEND_URL=http://localhost:5173
```

Al iniciar por primera vez, el backend crea la base `sya`, las tablas y el usuario administrativo definido en `ADMIN_USER` y `ADMIN_PASSWORD`.

Si el usuario ya existe en MySQL, cambiar `ADMIN_PASSWORD` no cambia automáticamente su contraseña. Para cambiarla, elimina ese usuario desde HeidiSQL y reinicia el backend, o actualiza el sistema de usuarios según las necesidades del proyecto.

## Configurar el frontend

La URL del backend está centralizada en [src/config/api.js](src/config/api.js). Por defecto usa:

```text
http://localhost:4000
```

Para usar otra dirección, crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:4000
```

## EmailJS

El formulario siempre guarda el mensaje en MySQL. EmailJS es un envío adicional de correo y es opcional.

Para activarlo, configura los valores reales en [src/config/email.js](src/config/email.js):

```js
export const EMAILJS_SERVICE_ID = "tu_service_id";
export const EMAILJS_TEMPLATE_ID = "tu_template_id";
export const EMAILJS_PUBLIC_KEY = "tu_public_key";
```

Mientras permanezcan los valores `TU_...`, el mensaje seguirá guardándose en MySQL, pero no se intentará enviar correo mediante EmailJS.

## Ejecutar el proyecto

Necesitas dos terminales.

### Terminal 1: backend

```powershell
cd backend
npm start
```

El backend quedará disponible en:

```text
http://localhost:4000
```

Puedes comprobar la conexión con MySQL visitando:

```text
http://localhost:4000/api/health
```

La respuesta esperada indica `status: "ok"` y `database: "connected"`.

### Terminal 2: frontend

Desde la raíz del proyecto:

```powershell
npm run dev
```

Abre la dirección que muestre Vite, normalmente:

```text
http://localhost:5173
```

## Acceso administrativo

La pantalla de login usa usuario y contraseña, no correo electrónico. Los valores iniciales son los definidos en `backend/.env`:

```text
Usuario: admin
Contraseña: 123
```

Después de iniciar sesión, entra a `/admin`. El token JWT se guarda únicamente en el `localStorage` del navegador y caduca después de 8 horas.

## Flujo de mensajes

1. Una persona completa el formulario de `/contacto`.
2. El frontend envía el mensaje a `POST /api/mensajes`.
3. El backend guarda el registro en la tabla `mensajes` de MySQL.
4. Si EmailJS está configurado, también se envía el correo.
5. El administrador inicia sesión en `/login`.
6. El panel `/admin` consulta los mensajes protegidos mediante JWT.

## Comandos útiles

Desde la raíz:

```powershell
npm run dev
npm run build
npm run lint
npm run preview
```

Desde `backend/`:

```powershell
npm start
npm run dev
```

## Solución de problemas

### El backend no inicia y dice que no puede conectar con MySQL

Verifica que MySQL esté iniciado, que los datos de `backend/.env` sean correctos y que el puerto `3306` esté disponible.

### El frontend muestra error de conexión

Confirma que el backend esté ejecutándose en el puerto indicado por `VITE_API_URL` o, por defecto, en `http://localhost:4000`.

### El login devuelve error

Comprueba que exista la tabla `admin_users` y que el usuario de `backend/.env` coincida con el usuario creado en MySQL. Revisa también que `JWT_SECRET` tenga un valor.

### El mensaje se guarda pero no llega por correo

Eso significa que EmailJS no está configurado o que sus credenciales/template no son válidos. El mensaje seguirá disponible en la tabla `mensajes` de MySQL.

### Vite muestra un error relacionado con `public`

Los archivos dentro de `public/` se referencian desde la raíz. Por ejemplo:

```text
public/Logo/logo.png -> /Logo/logo.png
```

## Estructura principal

```text
src/
  components/       Componentes reutilizables de la página
  config/           Configuración de API y EmailJS
  data/             Datos estáticos de la página
  pages/            Vistas y rutas
  styles/           Estilos globales y por sección
backend/
  data/schema.sql   Estructura de la base MySQL
  server.js         API, autenticación y endpoints de mensajes
public/             Imágenes y recursos públicos
```

## Seguridad

- No subas `backend/.env` al repositorio.
- Usa una contraseña administrativa distinta de `123` en producción.
- Usa una clave `JWT_SECRET` larga y privada.
- En producción, restringe `FRONTEND_URL` al dominio real.
- Configura un usuario MySQL específico para la aplicación en lugar de usar `root`.
