# Web con React - api con nodeJS - Base de Datos con mongoDB

## Tecnologia utilizada
### FRONT-END
- React
- TypeScript
- Patrón flux (react-redux): para manejo de estado global
- Axios: para las llamadas http y el manejo de la comunicación asincrónica con la Api
- Thunk: Para el manejo de promesas y comunicacion asincronica.
- Material-UI: Implementacion de componenetes visuales, para lograr una visualizacion tambien responsive.

### BACK-END
- TypeScript
- Express: Para generar un servicio de tipo API.
- Mongoose: Para generar la comunicacion con la BD de mongo.

### BASE DE DATOS
- mongo: Simplemente tener el servicio corriendo, la base de datos la modela la api y Mediante una accion de UI se inserta la data.

## Demo 1

https://user-images.githubusercontent.com/12037109/216647564-a65feeb8-0630-4429-bb02-483a74038dfa.mp4

## Demo 2 viendo redux

https://user-images.githubusercontent.com/12037109/216647683-8b96f6e4-d79d-4dbb-ae6f-10c745d3d456.mp4



## Pre-requisitos para la maquina donde se correra la app

### node, npm y yarn
Debemos tener instalado node en nuestra maquina.
El link de descarga es el siguiente [Descarga de Node](https://nodejs.org/es/download/).

Actualizar con la ultima version de npm corriendo `npm i -g npm@latest`.

Para instalar Yarn se puede hacer por medio de npm, dejo un link para saber mas [Yarn guia](https://classic.yarnpkg.com/en/docs/install#mac-stable).

### git
Debemos tener instalado git en nuestra maquina para poder clonar el repositorio.
El link de descarga es el siguiente [Descarga de Git](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Instalaci%C3%B3n-de-Git).

### MongoDB
Debemos tener instalado el mongoDB.
El link de descarga es el siguiente [Descarga de MongoDB](https://www.mongodb.com/try/download/community).
Tambien esta publicacion puede ayudar a instalar y ejecutar el servicio de MongoDB en nuestra sistema operativo (Windows/linux/Mac) [Ayuda de instalacion](https://platzi.com/blog/como-instalar-mongodb-en-window-linux-y-mac/?utm_source=google&utm_medium=cpc&utm_campaign=18798607679&utm_adgroup=&utm_content=&gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RkX9m2H6igSEByrulktMKQy8JI_8n6qOPflwlQ4aYNvtSoAJLTHEIoaAg1vEALw_wcB&gclsrc=aw.ds).

## Clonar, instalar y ejecutar la app

En mac se debe clonar el repositorio por SSH y se debe tener la ssh-key incorporada en tu maquina y cargada en tu perfil de github previamente.
Para saber mas de esto [Generando tu clave pública SSH](https://git-scm.com/book/es/v2/Git-en-el-Servidor-Generando-tu-clave-p%C3%BAblica-SSH).
En windows se puede hacer el clone por HTTPS.

### Ejecutar el servicio mongoDB
Si se necesita saber mas de esto: [instalar y ejecutar mongoDB](https://platzi.com/blog/como-instalar-mongodb-en-window-linux-y-mac/?utm_source=google&utm_medium=cpc&utm_campaign=18798607679&utm_adgroup=&utm_content=&gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RkX9m2H6igSEByrulktMKQy8JI_8n6qOPflwlQ4aYNvtSoAJLTHEIoaAg1vEALw_wcB&gclsrc=aw.ds).

### Intalar la API (se debe ejecutar esta primero que la web)
`npm i`

### Ejecutar la API (ejecutar esto antes que la WEB)
`npm run dev`

Se debe ver en consola 

```jsx 
Server on port 3001
Mongodb connection stablished 27017
```


### Intalar la WEB (se debe ejecutar despues de tener el servicio api corriendo)
`yarn install`

### Ejecutar la WEB
`yarn start`

Se debe abrir el explorador y existe en primera instancia una unica accion, agregar los participantes, esto creara los registros en la BD,Para luego poder interactuar con estos.

## Pantallas de la app corriendo
 <p>
  <img height="auto" width="500" src="https://user-images.githubusercontent.com/12037109/216645448-40640ae5-01c0-413a-892d-ac21e90a073a.jpeg" alt="bit.dev" title="Home" loading="lazy" />
  <img height="auto" width="500" src="https://user-images.githubusercontent.com/12037109/216645576-6bf3d5ce-6976-4a6f-a8aa-dcc25878f498.jpeg" alt="bit.dev" title="Home" loading="lazy" />
</p>

