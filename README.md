# Prisma DB

##  Instalación
- Denben terner instalado node js una vez que lo hayas clonado el proyecto ejecuta el comando **npm install** estro instalara las dependencias del proyecto ya que se instalara express y Prisma D
- Inicializa prisma con el siguiente comando npx prisma init de esta manera se creare el archivo **.env** y la carpeta de **prisma**
- Crea una base de datos que se llame **explorers_api**
- Modifica el archivo .env, coloca tu usuario y password:
**.env** este archivo es el que hará posible la conexión a tu db, para ello necesitas haber creado la db **explorers_api**
- Para inicilizar prisma ejecuta el siguiente comando** npx prisma migrate dev --name init** esto creara las siguiente tablas en tu base de datos **Explorer, MissionCommander y MCommander** y esto tambien creara  la siguiente estructra de carpeta **prisma/migrations/**
## Introduccion 
Este proyecto es la creacion de una Api que va a ser llamado por un cliente que se escuentra [aquí](https://github.com/CesarMezaB/client-launchx "aquí") ya que podra editar, eliminar, crear y traer un usuario explorer o mission commander
## Funcionamiento
Corre el archivo seed.js de la siguiente manera**node prisma/seed.js** y verifica que ahora las tablas se llenan con los datos que se encuentran allí como registros.

 Ahora corre el server **node server.js** y accede a localhost:3000, verifica que recibas un mensaje y de esta manera pudes probar los endPoints que se encuentran en el archivo **server.js** por ejemplo **localhost:3000/explorers/:id** etc.
