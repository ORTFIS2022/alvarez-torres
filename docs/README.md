# Proyecto - NFTrade

| Documentación |
|-|
| Fundamentos de Ingeniería de Software |
| M4A - Docentes: Alejandro Adorjan, Roxana Falco |
| Santiago Alvarez, Pablo Torres |
| https://github.com/ORTFIS2022/alvarez-torres |

# Glosario
- **Blockchain:** Una red compartida e inmutable creada para registrar transacciones y seguir activos
- **Criptomoneda:** ERC-20
- **NFT:** ERC-721
- **Wallet:** Monedero digital donde se pueden almacenar criptomonedas. Poseen avanzados protocolos de seguridad que permiten almacenar, enviar y recibir criptoactivos de forma segura.
- **Contrato Inteligente:** Serie de condiciones que se programan entre compradores y vendedores para que ambas partes tengan la informacion necesaria y asi no tenga que intervenir un tercero en la transacción 
- **Repositorio:** Estructura de directorios en disco, donde se almacenan el software. Utilizada por sistemas de control de versiones para manejar multiples versiones de archivos. Puede ser local (almacenado en la computadora), o remoto (almacenado en la nube, un servidor).
- **Rama:** Version que parte de otra, siendo modificable de forma independiente y con la posibilidad de volver a fusionarse.  
- **Git:** Sistema de control de versiones, el cual registra cambios a archivos con el fin de poder volver a estados anteriores. Tambien permite el trabajo asincronico centralizado por un repositorio remoto.
  <!-- Rellenar y agregar palabras pertinentes -->
# Repositorio Git
## Repositorio
Para este proyecto se usó Git como nuestro sistema de control de versiones. Este software nos permitió conectar nuestros repositorios locales mediante un repositorio remoto en la nube, permitiendo un trabajo asincrónico. Se comenzó creando un proyecto de Git, desde el cual creamos repositorios locales en nuestras computadoras.
El modus operandi constó de repartir temas, trabajar individualmente y cross-checkear el trabajo del comopañero. Cada vez que completabamos un tema, actualizabamos el repo remoto con el fin de unificar nuestros cambios y tener disponible el progreso del compañero para analizar.
## Comandos
```git init``` Crea un repositorio de Git. Esto incluye el directorio con los subdirectorios y templates por defecto. Se crea una rama inicial.

```git remote add origin [url]``` Asigna un repositorio remoto al repositorio local.

```git clone [url]``` Clona un repositorio de la nube a un nuevo directorio local.

```git branch``` Muestra las ramas, e indica en cual esta situado el usuario.

```git checkout [rama]``` Actualiza los archivos del Working Directory con los de la rama especificada. En otras palabras, mueve al usuario a otra rama.

```git checkout -b [rama]``` Crea una nueva rama con el nombre especificado.

```git merge [rama]``` Incorpora los cambios de la rama especificada en la rama actual.

```git add .``` Agrega los cambios de la rama actual, llevandolos del Working Directory a la Staging Area.

```git status``` Muestra el estado de los archivos modificados.

```git commit -m [nota]``` Crea un commit con una respectiva nota para identificarlo. Este commit engloba los cambios en el Staging Area y los transfiere al Repositorio Local.

```git push``` Sube el Repositorio Local al Repositorio Remoto.

```git pull``` Descarga y actualiza el Repositorio Local con el Repositorio Remoto.

```git log``` Muestra un log de los commits.
# Versionado

En la creación y mantenimiento de un proyecto de sofware es muy importante incorporar un sistema de versionado de archivos. Suele ser difícil saber cuál es la version funcional del proyecto, o conocer qué cambios fueron surgiendo al avanzar el proyecto. Las estrategias de versionado dependen de si los archivos son manipulados por una o varias personas, si es local o remoto, si las versiones entre usuarios necesitan ser actualizadas, etc

## Buenas prácticas

UK Data Service define algunas buenas prácticas de versionado como:

- Decidir qué versiones de archivo mantener y como organizarlas
- Identificar y mantener versiones estables, que son las que contienen cambios mayores
- Identificar las diferentes versiones de los archivos con una nomenclatura sistemática
- Registrar los cambios realizados a un archivo al momento de actualizarlo
- Registrar las relaciones entre los archivos donde son necesitados
- Mantener localizados los archivos en caso de que esten guardados en varios lugares
- Sincronizar regularmente archivos guardados en diferentes directorios
- Designar una única localización para almacenar versiones estables y versiones maestras

## Ramas

Una rama (branch) es un espacio virtual de trabajo que permite que los desarrolladores diverjan de la version estable del software para solucionar un bug o para añadir nuevas funciones. En las ramas se trabaja con una copia sin modificar de la version existente para aislar las actualizaciones y luego probarlas antes de hacer merge a las ramas principales. Otro posible uso de las ramas es para poder variar el producto según instrucciones de un cliente. 

![ Ramas ](https://github.com/ORTFIS2022/alvarez-torres/blob/pablo-develop/assets/img/branch.png)

## Commits

Separamos el informe en bloques y cada uno escogió cuales quería hacer, al terminar dichos bloques realizamos commits a las ramas individuales. Luego de que cross-checkearamos lo añadido, realizabamos commits menores para arreglar o añadir contenido.

## Evolucion

Decidimos que era pertinente crear ramas individuales, en las que trabajamos según las tareas que nos dividimos. Además de otra rama "release" la cual actualizamos cuando concluiamos las tareas asignadas. Trabajamos en ciclos donde realizabamos commits cuando cumpliamos metas preestablecidas y realizamos examinaciones cruzadas. Sentimos que no realizamos mucho re-trabajo gracias a la comunicacion que manejamos.

# Elicitacion
## Actividades

### Tormenta de ideas

Mediante la tormenta de ideas logramos pensar en una idea nueva para implementar, combinando dos paginas con las que estabamos familiarizados y voy a elaborar en el siguiente punto.
<!--Plantearlo como intro a elicitacion, no como actividad-->

### Ingenieria inversa

Analizamos dos paginas para tomar inspiracion:
Por un lado, OpenSea, quienes se autodenominan el primer y mas grande mercado de NFTs. De ellos tomamos la mayoria de las funcionalidades, como la compra, venta y publicacion de NFTs entre otros. 
La otra parte de este proyecto tomo ideas de Hellcase. Esta es una pagina que se dedica a las apuestas de skins del videojuego Counter Strike: Global Offensive. En este juego los jugadores pueden obtener skins (aspectos) para sus armas jugando. Lo interesante de esto es que el juego permite que los jugadores compren, vendan e intercambien estas armas. Dado esto, y que las skins poseen un sistema de rareza que les da un valor intrinseco por su escasez, dio lugar a un mercado externo al juego. Paginas como Hellcase surgen para capitalizar en esta oportunidad, permitiendo que los usuarios apuesten sus armas contra la pagina. En caso de ganar, el usuario obtiene una skin con mayor valor monetario que la suya a cambio de la que aposto, y en caso de perder se queda sin nada. 
La idea que extrapolamos de ambas paginas fue crear un mercado de NFTs como OpenSea, con juegos de apuestas como Hellcase.

### User personas

![User persona 1 - Amanda Wright](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/AW.png)

![User persona 2 - Federico Peralta](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/FP.png)

![User persona 3 - Nara Kumar](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/NK.png)

### Entrevista

**¿Crees que ya existen suficientes mercados de NFTs o crees que existen demasiados?**
Demasiados mercados segmentados por la cantidad de tipos de crypto que existen. Hacen falta mercados que hagan intuitivo el uso del block-chain y sus bienes, para su adopción masiva.

**¿Has escuchado alguna vez de un sistema de apuestas con NFTs? ¿Qué tan posible lo ves y qué opinas sobre este? En caso de que existiera, ¿Estarías interesado en la idea?**
Sí. Se me viene a la mente Zed Run. O juegos similares, en que el modelo Play to Earn en que se compran y reproducen NFTs, que debería ser catalogado como Pay to Play to Earn, en realidad, es un sistema de apuestas en sí: estás apostando en la "genética" del NFT que reproducís y tirás el dado. Pero como sistema de apuestas para deporte y demás, no sabría qué decir.
<!-- Ya la mandamos -->

## Modelo del problema

![Modelo Entidad-Relación](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/mer.png)

# Especificacion
## Requerimientos
### Funcionales
>Especifican servicios o funciones del sistema. Describe el comportamiento del sistema mediante la definicion de entradas y salidas esperadas del sistema.

| Id. | Nombre | Funcionalidad | Prioridad |
| :-: | - | - | - |
| RF1 | Sign In | Crear usuario con mail y contra | Alta |
| RF2 |  Log In | Ingresar con un usuario | Alta |
| RF3 | Crear NFT | Publicar un archivo como NFT y publicarlo en la tienda | Media |
| RF4 | Asociar wallet | Asociar una wallet a la cuenta | Alta |
| RF5 | Comprar NFT | Comprar un NFT pagando con una criptomoneda | Alta |
| RF5.1 | Filtrar | Filtrar NFTs por tipo de archivo | Baja |
| RF5.2 | Ordenar | Ordenar NFTs por precio o antiguedad | Baja |
| RF6 | Vender NFT | Poder enlistar un NFT propio en la tienda | Alta |
| RF6.1 | Postear unitario | Enlistar un NFT propio a la venta | Alta |
| RF6.2 | Postear coleccion | Enlistar NFTs propios a la venta en bundles | Baja |
| RF7 | Transacciones | Intercambio de NFTs por criptomonedas u otros NFTs | Alta |
| RF7.1 | Precio fijo | Venta donde se preestablece el precio final | Alta |
| RF7.2 | Subasta | Subasta tipica con un tiempo determinado | Media |
| RF7.3 | Subasta holandesa | Subasta donde el precio baja con el tiempo | Baja |
| RF8 | Tradear NFT | Intercambiar NFTs con otro usuario | Alta |
| RF9 | Juegos NFT | Juegos de apuestas de NFTs | Alta |
| RF9.1 | Wheel of fortune | Ruleta NFTs donde se paga con criptomonedas por tirada | Media |
| RF9.2 | Apostar contra pagina | Apostar NFTs contra la pagina | Alta |
| RF10 | Ver transacciones | Ver un registro de las transacciones del sitio | Baja |

### No funcionales
>Especifican *como* el sistema va a funcionar, no *que* va a hacer. Es un concepto muy amplio que abarca: usabilidad, portabilidad, seguridad, performance, entre otros. Al no ser tan concisos como los funcionales, se suelen usar estandares para comparar.

| Id. | Nombre | Funcionalidad | Prioridad |
| :-: | - | - | - |
| RNF1 | Portabilidad | Compatibilidad con distintos dispositivos | Alta |
| RNF1.1 | Compatibilidad con navegadores basados en Chromium (101.0 o mayor)| Compatibilidad con la mayoría de los navegadores de escritorio | Alta |
| RNF1.2 | Compatibilidad con navegadores de celular (iOS 15.4 y Android 12 o mayores) | Compatibilidad con la mayoría de los navegadores mobile | Alta |
| RNF2 | Cumplimiento del estandar AA de la guia WCAG 2.1 (Accesibilidad) | Cumplir con los requisitos que se pueden encontrar en la pagina de WCAG | Media |
| RNF3 | Cumplimiento del estandar ASVS 4.0.3 de OWASP (Seguridad) | Cumplir con los requisitos que se pueden encontrar en la pagina de OWASP | Alta |
| RNF4 | Versiones en espanol, inglés y portugués | Versiones de la página en los tres idiomas | Baja |
| RNF5 | Tiempo de transacción menor a dos minutos | Establecer dos minutos como el tiempo máximo para una transacción | Media |

## Casuistica
### Use cases
| Id. | 1 |
| - | - |
| Titulo | Compra a precio fijo |
| Descripcion | Filtro de contenido |
| Requerimiento/s asociado/s | RF5, RF6, RF7, RF7.1 |
| Actor/es | Usuario |
| Prerequisito/s | Estar suscripto, estar logueado |
| Posrequisito/s | Se realizo la transaccion de forma correcta |
| Accion | Respuesta |
| 1. Seleccionar "Tienda" | Se redirige a la tienda |
| 2. Selecciona un NFT del catalogo | Se lleva a la pagina del producto |
| 3. El usuario selecciona comprar | Se despliegan los metodos de compra |
| 4. El usuario selecciona "Comprar ya!" | Se abre un pop-up de confirmacion |
| 5. El usuario confirma | Se concreta la transaccion y se notifica a ambos usuarios |
| Cursos alternativos | **2.1:** No hay NFTs en venta; se muestra que no hay, y se recomienda probar los juegos. <br/> **4.1:** El usuario no tiene wallet asociada o su sueldo es insuficiente; Le es notificado y retorna a la pagina del producto. <br/> **5.1:** El usuario rechaza; Se retorna a la pagina del producto |

| Id. | 2 |
| - | - |
| Titulo | Tradeo |
| Descripcion | Realizar un intercambio de NFTs entre dos usuarios |
| Requerimiento/s asociado/s | RF5, RF7, RF8 |
| Actor/es | Usuario |
| Prerequisito/s | Estar suscripto, estar logueado, tener al menos un NFT |
| Posrequisito/s | Se realizo el intercambio de forma correcta |
| Accion | Respuesta |
| 1. Seleccionar "Tienda" | Se redirige a la tienda |
| 2. Selecciona un NFT del catalogo | Se lleva a la pagina del producto |
| 3. El usuario selecciona intercambiar | Se despliegan los NFTs para ofertar |
| 4. El usuario selecciona un NFT | Se abre un pop-up de confirmacion |
| 5. El usuario confirma | El otro usuario confirma, se concreta el intercambio |
| Cursos alternativos | **2.1:** No hay NFTs en venta; se muestra que no hay, y se recomienda probar los juegos. <br/> **5.1:** El usuario rechaza; Se retorna a la pagina del producto <br/> **5.2:** El otro usuario rechaza; Se cancela el intercambio <br/> **5.3:** El otro usuario realiza una contraoferta; El usuario puede aceptarla, rechazarla o realizar otra contraoferta |

| Id. | 3 |
| - | - |
| Titulo | Enlistar NFT propio unitario a p.f. |
| Descripcion | Enlistar un unico NFT propio a la venta con un precio fijo |
| Requerimiento/s asociado/s | RF4, RF6, RF6.1, RF7, RF7.1 |
| Actor/es | Usuario |
| Prerequisito/s | Estar suscripto, estar logueado, tener wallet asociada, tener al menos un NFT |
| Posrequisito/s | El NFT queda enlistado para venta con un precio asignado |
| Accion | Respuesta |
| 1. Selecciona "Mi coleccion" | Se redirige a la coleccion |
| 2. Selecciona un NFT | Se lleva a la pagina del producto |
| 3. Selecciona "Vender" | Se despliegan las opciones de venta |
| 4. Se selecciona "Precio fijo" y se elige un precio | Se abre un pop-up de confirmacion |
| 5. El usuario confirma | Se enlista el NFT a la venta |
| Cursos alternativos | **4.1:** Se ingresa un precio invalido; Le es notificado al usuario que es invalido y que lo modifique <br/> **5.1:** El usuario rechaza; Se retorna a la pagina del producto |


### User stories
| Id. | 1 |
| - | - |
| Titulo | Aprobacion de contenido |
| Narrativa | **Como** administrador. <br/> **Quiero** filtrar los NFTs en venta.<br/> **Para** evitar obsenidades / infricciones de copyright|
| Criterios de aceptacion | <ul><li>No se puede lanzar un NFT al mercado sin aprobacion de un administrador.</li><li>Un administrador puede deslistar un NFT de la tienda en cualquier momento</li></ul> |

| Id. | 2 |
| - | - |
| Titulo | Conectar wallet |
| Narrativa | **Como** usuario. <br/> **Quiero** asociar mi wallet a mi cuenta.<br/> **Para** permitirme pagar/cobrar por transacciones en la pagina |
| Criterios de aceptacion | <ul><li> Se puede conectar unicamente una wallet por cuenta.</li><li>Se puede elegir cualquiera de las criptomonedas aceptadas por el sistema.</li></ul> |

| Id. | 3 |
| - | - |
| Titulo | Tradear NFTs |
| Narrativa | **Como** usuario. <br/> **Quiero** intercambiar NFTs con otro usuario.<br/> **Para** ahorrarme una transaccion entre la compra y la venta |
| Criterios de aceptacion | <ul><li> Se puede realizar un intercambio donde cada usuario da al menos un NFT.</li><li>No se puede realizar un intercambio donde al menos un usuario no da ningun NFT.</li></ul> |

| Id. | 4 |
| - | - |
| Titulo | Apostar contra la pagina |
| Narrativa | **Como** usuario. <br/> **Quiero** apostar un NFT contra la pagina.<br/> **Para** intentar ganar uno de mayor valor |
| Criterios de aceptacion | <ul><li> Al ganar, el usuario recibe el premio a cambio de lo que aposto.</li><li>Al perder, el usuario le da su NFT a la pagina y no recibe nada.</li></ul> |

## UI

![Homepage](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/homepage.png)

![Perfil](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/profile.png)

![Apuesta](https://github.com/ORTFIS2022/alvarez-torres/blob/santi-develop/docs/assets/img/apuesta.png)

# Validaciones
## Verificando la especificacion

Verificamos los requerimientos que nos parecieron pertinentes con una tabla de criterios de aceptación

| *Requerimiento* | *RF1* | *RF2* | *RF3* | *RF5* | *RF6* | *RF7* | *RF8* | *RN9* | *RNF1* | *RNF5* |
|:-----------------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|:--------:|:--------:|
|     Relevante     |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si    |    Si    |
|     Alcanzable    |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si    |    Si    |
|     Específico    |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si    |    Si    |
|     Priorizado    |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si   |    Si    |    Si    |

<!-- Sacar del ejemplo. Se puede hacer una tabla entre UC y RF -->

## Validando la solucion

Acordamos una instancia en persona para enseñarle el proyecto a una persona cercana, le explicamos los conceptos necesarios para entender las funciones del sistema y un recorrido por las distintas características del mismo. La persona quedó sastisfecha, remarcó la innovación y aportó detalles del diseño.
<!-- Cuando terminemos -->

# Reflexion
**Santi:** Por mi parte, siento que nos repartimos bien las tareas, tuvimos una buena comunicacion y logramos cumplir con nuestras metas dentro del tiempo designado.

**Pablo:** Siento que el proyecto avanzo a pasos agigantados, Santiago y yo coincidimos muy bien con las ideas que queriamos implementar al proyecto y supimos perfectamente que dirección queriamos darle. Nos dividimos las tareas según lo que cada uno queria hacer y asi podiamos trabajar mas satisfechos.

# Resumen

Para la realizacion de este trabajo aplicamos:
- Ingenieria Inversa
- User Personas
- Entrevista
- Modelaje del problema

De esta experiencia aprendimos que ciclos cortos y buena comunicacion permiten minimizar el re-trabajo. <!--Agregar github, blockchain-->

# Fuentes
- Presentaciones del curso
- Documentos de git-scm
- IBM.com
- TechTerms.com
- UTDallas.edu
- OpenSea.io
- UK Data Service
- Varonis.com