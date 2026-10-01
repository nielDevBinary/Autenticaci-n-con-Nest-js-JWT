<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Autenticacion con Nest js + JWT
Backend desarrollado con NestJS, diseñado para gestionar usuarios, autenticación, tareas y funcionalidades administrativas.
- NestJS
- TypeScript
- JWT
- PostgreSQL
- Swagger
- Express
- @nestjs/throttler
```text
src/
├── admin/          # Funcionalidades administrativas
├── auth/           # Autenticación y recuperación de contraseña
├── common/         # Guards y decorators compartidos
├── tasks/          # Gestión de tareas
├── users/          # Gestión de usuarios
├── app.module.ts
└── main.ts

```
La API utiliza JWT para la autenticación y cookies para el refresh token.
Incluye:
- Registro de usuarios
- Verificación de email
- Login / Logout
- Refresh tokens
- Recuperación y cambio de contraseña
- Autorización basada en roles
- JWT Guard global
- Roles Guard global
- Rate limiting
- Protección específica para endpoints sensibles
Límite global: 20 solicitudes por minuto.
La API está documentada con Swagger/OpenAPI.
Principales endpoints de autenticación:
```text
POST /api/auth/register
GET  /api/auth/verify-email
POST /api/auth/login
POST /api/auth/refresh
POST /api/auth/logout
GET  /api/auth/me
POST /api/auth/forgot-password
POST /api/auth/reset-password

```
Crear un archivo .env con las variables de entorno necesarias:
```env
DATABASE_URL=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
RESEND_API_KEY=
APP_URL=
PORT=
```
Instalar dependencias:
```bash
npm install

```
Ejecutar en desarrollo:
```bash
npm run start:dev

```
