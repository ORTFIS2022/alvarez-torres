# Proyecto - NFTrade

| Documentación                                |
|----------------------------------------------|
| Fundamentos de Ingeniería de Software        |
| M4A - Docentes: Alejandro Adorjan,           |
| Santiago Alvarez, Pablo Torres               |
| https://github.com/ORTFIS2022/alvarez-torres |

# Glosario
- **Blockchain:** Una red compartida e inmutable creada para registrar transacciones y seguir activos
- **Criptomoneda:** ERC-20
- **NFT:** ERC-721
- **Wallet:**
- **Contrato Inteligente:**
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

## Commits

Separamos el informe en bloques y cada uno escogió cuales quería hacer, al terminar dichos bloques realizamos commits a las ramas individuales. Luego de que cross-checkearamos lo añadido, realizabamos commits menores para arreglar o añadir contenido.

## Evolucion

Decidimos que era pertinente crear ramas individuales, en las que trabajamos según las tareas que nos dividimos. Además de otra rama "release" la cual actualizamos cuando concluiamos las tareas asignadas. Trabajamos en ciclos donde realizabamos commits cuando cumpliamos metas preestablecidas y realizamos examinaciones cruzadas. Sentimos que no realizamos mucho re-trabajo gracias a la comunicacion que manejamos.

# Elicitacion
## Actividades

### Tormenta de ideas

Mediante la tormenta de ideas logramos pensar en una idea nueva para implementar, combinando dos paginas con las que estabamos familiarizados y voy a elaborar en el siguiente punto.

### Ingenieria inversa

Analizamos dos paginas para tomar inspiracion:
Por un lado, OpenSea, quienes se autodenominan el primer y mas grande mercado de NFTs. De ellos tomamos la mayoria de las funcionalidades, como la compra, venta y publicacion de NFTs entre otros. 
La otra parte de este proyecto tomo ideas de Hellcase. Esta es una pagina que se dedica a las apuestas de skins del videojuego Counter Strike: Global Offensive. En este juego los jugadores pueden obtener skins (aspectos) para sus armas jugando. Lo interesante de esto es que el juego permite que los jugadores compren, vendan e intercambien estas armas. Dado esto, y que las skins poseen un sistema de rareza que les da un valor intrinseco por su escasez, dio lugar a un mercado externo al juego. Paginas como Hellcase surgen para capitalizar en esta oportunidad, permitiendo que los usuarios apuesten sus armas contra la pagina. En caso de ganar, el usuario obtiene una skin con mayor valor monetario que la suya a cambio de la que aposto, y en caso de perder se queda sin nada. 
La idea que extrapolamos de ambas paginas fue crear un mercado de NFTs como OpenSea, con juegos de apuestas como Hellcase.

### User personas

<!-- Los voy a hacer en photoshop -->

### Entrevista

<!-- Ya la mandamos -->

## Modelo del problema
<!-- No entendi -->
# Especificacion
## Requerimientos
### Funcionales
>Especifican servicios o funciones del sistema. Describe el comportamiento del sistema mediante la definicion de entradas y salidas esperadas del sistema.

| Id. | Nombre |
| :-: | - |
| RF1 | Sign In |
| RF2 |  Log In |
| RF3 | Crear NFT |
| RF4 | Asociar wallet |
| RF5 | Comprar NFT |
| RF5.1 | Filtrar |
| RF5.2 | Ordenar |
| RF6 | Vender NFT |
| RF6.1 | Postear unitario |
| RF6.2 | Postear coleccion |
| RF7 | Transacciones |
| RF7.1 | Precio fijo |
| RF7.2 | Subasta |
| RF7.3 | Subasta holandesa |
| RF8 | Tradear NFT |
| RF9 | Juegos NFT |
| RF9.1 | Wheel of fortune |
| RF9.2 | Apostar contra pagina |
| RF10 | Ver transacciones |

<!-- Los desarrollamos? -->

### No funcionales
>Especifican *como* el sistema va a funcionar, no *que* va a hacer. Es un concepto muy amplio que abarca: usabilidad, portabilidad, seguridad, performance, entre otros. Al no ser tan concisos como los funcionales, se suelen usar estandares para comparar.

| Id. | Nombre |
| :-: | - |
| RNF1 | Portabilidad |
| RNF1.1 | Compatibilidad con navegadores basados en chromium (101.0 o mayor)|
| RNF1.2 | Compatibilidad con navegadores de celular (iOS 15.4 y Android 12 o mayores) |
| RNF2 | Cumplimiento del estandar AA de la guia WCAG 2.1 (Accesibilidad) |
| RNF3 | Cumplimiento del estandar ASVS 4.0.3 de OWASP (Seguridad) |

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
| Cursos alternativos | **2.1:** No hay NFTs en venta; se muestra que no hay, y se recomienda probar los juegos. <br/> **4.1:** El usuario no tiene wallet asociada o su sueldo es insuficiente; Le es notificado y retorna a la pagina del producto. <br/> **5.1** El usuario rechaza; Se retorna a la pagina del producto |

| Id. | 2 |
| - | - |
| Titulo | Tradeao |
| Descripcion | Realizar un intercambio de NFTs entre dos usuarios |
| Requerimiento/s asociado/s | RF8 |
| Actor/es | Usuario |
| Prerequisito/s | Estar suscripto, estar logueado, tener al menos un NFT |
| Posrequisito/s | Se realizo el intercambio de forma correcta |
| Accion | Respuesta |
| 1. Seleccionar "Tienda" | Se redirige a la tienda |
| 2. Selecciona un NFT del catalogo | Se lleva a la pagina del producto |
| 3. El usuario selecciona intercambiar | Se despliegan los NFTs para ofertar |
| 4. El usuario selecciona un NFT | Se abre un pop-up de confirmacion |
| 5. El usuario confirma | El otro usuario confirma, se concreta el intercambio |
| Cursos alternativos | **2.1:** No hay NFTs en venta; se muestra que no hay, y se recomienda probar los juegos. <br/> **5.1** El usuario rechaza; Se retorna a la pagina del producto <br/> **5.2** El otro usuario rechaza; Se cancela el intercambio <br/> **5.3** El otro usuario realiza una contraoferta; El usuario puede aceptarla, rechazarla o realizar otra contraoferta |

<!-- Cuantos? -->

### User stories
| Id. | 1 |
| - | - |
| Titulo | Filtro de contenido |
| Narrativa | **Como** administrador. <br/> **Quiero** filtrar los NFTs en venta.<br/> **Para** evitar obsenidades / infricciones de copyright|
| Criterios de aceptacion | <ul><li>No se puede lanzar un NFT al mercado sin aprovacion de un administrador.</li><li>Un administrador puede deslistar un NFT de la tienda en cualquier momento</li></ul> |

| Id. | 2 |
| - | - |
| Titulo | Notificaciones ofertas |
| Narrativa | **Como** usuario. <br/> **Quiero** recibir notificaciones cuando oferten por mi NFT.<br/> **Para** no perderme oportunidades de negocios. |
| Criterios de aceptacion | <ul><li> Se puede dar de alta o baja para las notificaciones.</li><li>Se puede establecer un limite inferior para que no llegue spam.</li></ul> |

<!-- Cuantos? -->

## UI

<!-- Lo voy a hacer en figma -->

# Validaciones
## Verificando la especificacion

<!-- No entendi -->

## Validando la solucion

<!-- Cuando terminemos -->

# Reflexion
**Santi:** Por mi parte, siento que nos repartimos bien las tareas, tuvimos una buena comunicacion y logramos cumplir con nuestras metas dentro del tiempo designado.

**Pablo:**
# Resumen

Para la realizacion de este trabajo aplicamos:
- Tormenta de ideas
- Ingenieria Inversa
- User Personas
- Entrevista
- Modelaje del problema
- Use cases
- User stories
- Especificacion de requierimientos

De esta experiencia aprendimos que ciclos cortos y buena comunicacion permiten minimizar el re-trabajo.

# Fuentes
- Presentaciones del curso
- Documentos de git-scm
- IBM.com
- TechTerms.com
- UTDallas.edu
- OpenSea.io