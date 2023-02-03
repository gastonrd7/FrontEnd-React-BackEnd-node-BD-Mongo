# Web con React

## Tecnologia utilizada
- React
- TypeScript
- Patrón flux (react-redux): para manejo de estado global
- Axios: para las llamadas http y el manejo de la comunicación asincrónica con la Api
- Thunk: Para el manejo de promesas y comunicacion asincronica.
- Material-UI: Implementacion de componenetes visuales, para lograr una visualizacion tambien responsive.


## Clonar, instalar y ejecutar la app

En mac se debe clonar el repositorio por SSH y se debe tener la ssh-key incorporada en tu maquina y cargada en tu perfil de github previamente.
Para saber mas de esto [Generando tu clave pública SSH](https://git-scm.com/book/es/v2/Git-en-el-Servidor-Generando-tu-clave-p%C3%BAblica-SSH).
En windows se puede hacer el clone por HTTPS.


### Intalar la WEB (se debe ejecutar despues de tener el servicio api corriendo)
`yarn install`

### Ejecutar la WEB
`yarn start`

Se debe abrir el explorador y existe en primera instancia una unica accion, agregar los participantes, esto creara los registros en la BD,Para luego poder interactuar con estos.
<p>
<img height="auto" width="500" src="https://user-images.githubusercontent.com/12037109/216634551-50425384-9a1e-4dcd-afd7-61701f69c693.png" alt="bit.dev" title="Home" loading="lazy" />
</p>



