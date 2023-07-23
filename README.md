## Tabla de contenido:

* [Tecnologías Utilizadas](#Tecnologías Utilizadas)

* [Empezando](#Empezando)
    * [Iniciar el proyecto en modo desarrollo](#Iniciar el proyecto en modo desarrollo)
    * [Construir proyecto y ejecutarlo en JavaScript](#Construir proyecto y ejecutarlo en JavaScript)

* [API Endpoints](#API Endpoints)
    * [Usuarios](#Usuarios)
    * [Productos](#Productos)

* [Modelo de Datos de Usuarios](#Modelo de Datos de Usuarios)

* [Modelo de Datos de Productos](#Modelo de Datos de Productos)

* [Dependencies](#Dependencies)

* [Dependencias de desarrollo](#Dependencias de desarrollo)

* [Middleware incluidos](#Middleware incluidos)

* [Variables de Entorno](#Variables de Entorno)

* [Configuración de Compilación TypeScript](#Configuración de Compilación TypeScript)



## Tecnologías Utilizadas

- **TypeScript**: Un superconjunto tipado de JavaScript que permite agregar tipos estáticos al código para una mejor verificación de errores y autocompletado.

- **Node.js**: Plataforma de desarrollo de aplicaciones del lado del servidor basada en JavaScript.

- **Express**: Framework de Node.js para construir aplicaciones web y APIs de manera rápida y sencilla.

- **Sequelize**: ORM (Object-Relational Mapping) para trabajar con bases de datos SQL en Node.js.

- **PostgreSQL**: Sistema de gestión de bases de datos relacional utilizado por Sequelize para almacenar y recuperar datos.

- **bcryptjs**: Librería para el hashing seguro de contraseñas.

- **dotenv**: Librería para cargar variables de entorno desde un archivo `.env`.

- **JSON-Web-Token**: Librería para la generación y validación de tokens JWT (JSON Web Tokens) utilizados para autenticación y autorización.

## Empezando

### Iniciar el proyecto en modo desarrollo

- Clonar el repositorio.
```
git clone https://github.com/asdrubali/Gestor-Inv.git
```
- Ir al directorio del proyecto.
```
cd Gestor-Inv.
```
- Instalar dependencias.
```
npm install
```
- Construir el proyecto.
```
npm run build
```
- Ejecutar el proyecto JS.
```
npm run start
```

### Construir proyecto y ejecutarlo en JavaScript

- Clonar el repositorio.
```
git clone https://github.com/asdrubali/Gestor-Inv.git
```
- Ir al directorio del proyecto.
```
cd Gestor-Inv.
```
- Instalar dependencias.
```
npm install
```
- Ejecutar proyecto en modo desarrollo.
```
npm run dev
```


## Crear Base de datos ( PostgreSQL )
### Modelo relacional
![db_Tablas_Users_Roles](https://user-images.githubusercontent.com/123769609/255394950-4a699dd2-e23f-47c9-8101-06168a49114e.PNG)

![dv_Tablas_Products_Categories](https://user-images.githubusercontent.com/123769609/255394948-aac8b6a1-025a-4fb1-a6f9-577fb0477f60.PNG)


###Script para crear la base de datos

Los scripts para la creacion de las tablas Products, Users, Roles y Categories, asi como sus secuencias, funciones y triggers necesarios para que el sistema se ejecte correctamente se encuentran en el archivo `scriptDB.txt`


## API Endpoints

URL principal de la API (Local) : `http://localhost:3000/api`

### Usuarios

| Método     | Ruta             | Descripción                                           |
|:-----------|:-----------------|:------------------------------------------------------|
| `GET`      | `/auth/reval`  | Valida el token existente y devuelve un nuevo token ( el token debe ser enviado en los headers con la variable `token`) .|
| `POST`     | `/auth/login`   | Obtiene el usuario especificando las credenciales 'email y password' ( deben der enviados en el body).      |
| `POST`     | `/auth/register`| Crea un nuevo usuario en la base de datos (los datos deben ser enviados en el body) |

### Productos


| Método     | Ruta             | Descripción                                           |
|:-----------|:-----------------|:------------------------------------------------------|
| `GET`      | `/products`     | Obtiene todos los productos.                         |
| `GET`      | `/products/{id}` | Obtiene un producto específico por su ID.            |
| `POST`     | `/products`      | Crea un nuevo producto en la base de datos ( los datos deben ser enviados en el body ).          |
| `PUT`      | `/products/{id}` | Actualiza la información de un producto existente ( los datos deben ser enviados en el body ).  |
| `DELETE`   | `/products/{id}` | Elimina un producto por su ID.                       |



## Modelo de Datos de Usuarios

```json
{
  "id": "string (opcional)",
  "name": "string (opcional)",
  "email": "string (opcional)",
  "password": "string (opcional)",
  "id_role": "number (opcional)",
  "is_active": "boolean (opcional)"
}
```



## Modelo de Datos de Productos

```json
{
  "id": "number (opcional)",
  "name": "string",
  "price": "number",
  "fecha_ingreso": "string (formato fecha)",
  "fecha_vencimiento": "string (formato fecha)",
  "id_category": "number",
  "stock": "number",
  "status": "string (opcional)",
  "img": "string (opcional)",
  "is_active": "boolean (opcional)"
}
```




## Dependencies

| Paquete                | Descripción                                                     |
| ---------------------- | --------------------------------------------------------------- |
| express                | Framework web para Node.js.                                     |
| sequelize             | ORM muy útil para trabajar con bases de datos relacionales.     |
| cors                   | Middleware para habilitar Cross-Origin Resource Sharing (CORS). |
| express-validator      | Middleware para validación de datos en Express.                 |
| jsonwebtoken           | Implementación de JSON Web Tokens (JWT) para autenticación.     |
| bcryptjs               | Librería para el hashing de contraseñas.                        |
| dotenv                 | Carga variables de entorno desde el archivo .env.               |
| module-alias           | Permite crear alias de módulos para una mejor organización.     |
| pg                     | Controlador PostgreSQL, necesario para el ORM.                  |
| pg-hstore              | Extensión para manejar campos JSON en PostgreSQL.               |






## Dependencias de desarrollo :

| Paquete                | Descripción                                                     |
| ---------------------- | --------------------------------------------------------------- |
| ts-node-dev            | Facilita la ejecución de archivos TypeScript.                   |
| tsconfig-paths         | Permite el uso de rutas personalizadas en el tsconfig.json.     |
| typescript             | Compilador/type checker de JavaScript que aumenta la productividad. |
| @types/bcryptjs        | Tipos de TypeScript para bcryptjs.                              |
| @types/cors            | Tipos de TypeScript para cors.                                  |
| @types/express         | Tipos de TypeScript para express.                               |
| @types/jsonwebtoken    | Tipos de TypeScript para jsonwebtoken.                          |
| @types/module-alias    | Tipos de TypeScript para module-alias.                          |





## Middleware incluidos :

1. **cors**

   Descripción: Middleware `cors` que habilita el Cross-Origin Resource Sharing (CORS) para permitir peticiones desde diferentes dominios.

2. **express.static ( express )**

   Descripción: Middleware `express.static` que sirve archivos estáticos desde el directorio "public".

3. **express.json ( express )**

   Descripción: Middleware `express.json` que analiza el cuerpo de las solicitudes entrantes con formato JSON.

4. **validarCampos ( express validator )**

   Descripción: Middleware `validarCampos` proporcionado por `express validator` para validar y sanitizar los datos enviados en las peticiones.

5. **validarJWT (  JWT )**

   Descripción: Middleware `validarJWT` utilizado para verificar la autenticidad de los tokens de JSON Web Token (JWT) en las peticiones protegidas por autenticación.






## Variables de Entorno

Renombra el `.example.env` a `.env` y coloque las variables de entorno que desees configurar. La librería `dotenv` se encargará de establecerlas. Actualmente, este proyecto utiliza dos variables:

- **PORT**: Puerto en el que se iniciará el servidor, Algunos servicios lo configurará automáticamente esta variable de entorno.

- **SECRET_TOKEN**: Palabra secreta para la generación de tokens JWT.

- **USER_DB**: Nombre de usuario para acceder a la base de datos PostgreSQL.

- **NAME_DB**: Nombre de la base de datos PostgreSQL.

- **HOST_DB**: Dirección del host de la base de datos.



## Configuración de Compilación TypeScript


TypeScript utiliza el archivo `tsconfig.json` para ajustar las opciones de compilación del proyecto. A continuación se muestra el contenido del archivo `tsconfig.json` con la configuración específica para este proyecto:

```json
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "allowJs": true,
    "sourceMap": true,
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "baseUrl": "./src",
    "paths": {
      "@controllers/*": ["./controllers"],
      "@routes/*": ["./routes"],
      "@helpers/*": ["./helpers"],
      "@interfaces/*": ["./interfaces"],
      "@middlewares/*": ["./middlewares"],
      "@models/*": ["./models"]
    },
    "typeRoots": ["./node_modules/@types", "./src/@types"],
    "strictNullChecks": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```





