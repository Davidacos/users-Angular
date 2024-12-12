# Documentación del Proyecto Full Stack

Este proyecto es un microservicio desarrollado con **Node.js** y **Express**, junto con un frontend construido en **Angular**. Utiliza **PostgreSQL** como base de datos y **pg** como cliente de conexión a la base de datos. A continuación, se explican los pasos para ejecutar tanto el backend como el frontend de manera local, además de los detalles necesarios para probar y entender el funcionamiento del sistema.

## Requisitos Previos

1. Tener instalados:
   - **Node.js** (v18 o superior)
   - **npm** o **yarn**
   - **Angular CLI** (v18)
   - **PostgreSQL** (v12 o superior)
2. Contar con herramientas como **Postman** para pruebas o un navegador para interactuar con el frontend.
3. Tener configurado **Git** para clonar los repositorios.

---

## Clonar el Repositorio

Clona los repositorios desde GitHub:

```bash
# Clonar el backend
git clone https://github.com/Davidacos/Prueba-Tecnica.git

# Clonar el frontend
git clone https://github.com/Davidacos/users-Angular.git
```

---

## Configuración y Ejecución del Backend

1. Navega a la carpeta del backend:

   ```bash
   cd prueba-tecnica
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la base de datos:
   - Asegúrate de que PostgreSQL esté en funcionamiento.
   - En la carpeta `database`, hay un archivo `db.sql` que contiene la estructura de la tabla `usuarios`. Ejecuta este archivo en tu instancia de PostgreSQL. Puedes usar herramientas como **pgAdmin** o desde la terminal:
  Esto depende de como tenga configurado el usuario y la contraseña ya que es en un entorno local, para realizar la configuracion en el archivo .env se encuentra la configuracion de la base de datos, alli se debe configurar segun el entorno local    

 .env:
  DB_USER=postgres
  DB_HOST=localhost
  DB_PASSWORD=admin
  DB_DATABASE=microservicio
  DB_PORT=5432    

     ```bash
     psql -U <USUARIO> -d <NOMBRE_BASE_DE_DATOS> -f database/db.sql
     ```

4. Configura el archivo `.env` en el backend con los detalles de tu base de datos (basado en `example.env` si está disponible).

5. Ejecuta el servidor:

   ```bash
   npm start
   ```

6. El backend estará disponible en `http://localhost:3000`.

---

## Configuración y Ejecución del Frontend

1. Navega a la carpeta del frontend:

   ```bash
   cd users-angular
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura el archivo `environment.ts` dentro de la carpeta `src/environments` con la URL del backend, por ejemplo:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:3000/'
   };
   ```

4. Ejecuta la aplicación:

   ```bash
   ng serve
   ```

5. El frontend estará disponible en `http://localhost:4200`.

---

## Pruebas del Microservicio

### 1. **Desde Postman**

- **URL Base:** `http://localhost:3000/api/`
- Endpoints:
  - **GET /data:** Retorna la lista de usuarios.
      {
        "id": "3"
        "nombre": "Juan",
        "correo": "juan@example.com",
        "edad": "24"
      }
      ```

### 2. **Desde el Frontend**

- Navega a `http://localhost:4200`.
- Visualiza la tabla de usuarios que consume el microservicio.
- Realiza operaciones según las funcionalidades disponibles (listar, agregar, etc.).

---



## Notas Adicionales

- Asegúrate de que los puertos `3000` (backend) y `4200` (frontend) estén libres.
- Si tienes problemas de conexión con la base de datos, revisa las configuraciones del archivo `.env` y la disponibilidad de tu servidor PostgreSQL.

---

¡Gracias por utilizar este proyecto! Si tienes preguntas, no dudes en consultarme.

