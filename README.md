# proyecto6_API_REST
# 📦 API de Gestión de Apps y Recursos

API desarrollada en **Node.js** con **Express** y **MongoDB**, que permite agrupar diversas apps por los recursos que aportan a la organización. Implementa operaciones **CRUD** para las dos colecciones y mantiene una relación entre ellas.

Colección Recursos: documentos, visuales, audio
Colección Apps: diversas apps categorizadas por presentaciones, videos, música y código

---

## 🚀 Características
- 🌍 **Tecnologías**: Node.js, Express, MongoDB, Mongoose.
- 🔄 **CRUD completo** para `apps` y `recursos`.
- 🔗 **Relación** entre `apps` y `recursos`.
- 🛡 **Middlewares** para validación y manejo de errores.

---

## 📂 **Estructura del Proyecto**
/src
├── api
│ ├── controllers # Lógica de los controladores
│ ├── models # Definición de modelos de Mongoose
│ ├── routes # Definición de rutas de la API
├── config # Configuración de la base de datos
├── .env # Variables de entorno
├── index.js # Archivo principal del servidor


---

## 📦 **Instalación**
1. Clona este repositorio:
   ```sh
   git clone https://github.com/sarafontdevila/proyecto6_API_REST.git
   cd nombre-del-repo
2. Inicia: npm run start

   
## 📂 **Endpoints**
📌 Apps
Método	Endpoint	Descripción
GET	/api/apps	Obtener todas las apps
GET	/api/apps/:id	Obtener una app por ID
POST	/api/apps	Crear una nueva app
PUT	/api/apps/:id	Actualizar una app
DELETE	/api/apps/:id	Eliminar una app
📌 Recursos
Método	Endpoint	Descripción
GET	/api/recursos	Obtener todos los recursos
GET	/api/recursos/:id	Obtener un recurso por ID
POST	/api/recursos	Crear un nuevo recurso
PUT	/api/recursos/:id	Actualizar un recurso
DELETE	/api/recursos/:id	Eliminar un recurso

## 📂 **Licencia**
Free use
Desarrollado por Sara Fontdevila
