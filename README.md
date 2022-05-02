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
- **mainnet:**
- **Repositorio:** Locacion centralizada de almacenamiento de archivos. Utilizada por sistemas de control de versiones para manejar multiples versiones de archivos. Puede ser local (almacenado en la computadora), o remoto (almacenado en la nube, un servidor).
- **Rama:** Version que parte de otra, siendo modificable de forma independiente y con la posibilidad de volver a fusionarse.  
- **Git:** Sistema de control de versiones, el cual registra cambios a archivos con el fin de poder volver a estados anteriores. Tambien permite el trabajo asincronico centralizado por un repositorio remoto.
# Repositorio Git
## Repositorio
Para este proyecto se usó Git como nuestro sistema de control de versiones. Este software nos permitió conectar nuestros repositorios locales mediante un repositorio remoto en la nube, permitiendo un trabajo asincrónico. Se comenzó creando un proyecto de Git, desde el cual creamos repositorios locales en nuestras computadoras.
El modus operandi constó de repartir temas, trabajar individualmente y cross-checkear el trabajo del comopañero. Cada vez que completabamos un tema, actualizabamos el repo remoto con el fin de unificar nuestros cambios y tener disponible el progreso del compañero para analizar.
## Comandos
```git init```: Crea un repositorio de Git. Esto incluye el directorio con los subdirectorios y templates por defecto. Se crea una rama inicial.

```git remote add origin [url]```: Asigna un repositorio remoto al repositorio local.

```git clone [url]```: Clona un repositorio de la nube a un nuevo directorio local.

```git branch```: Muestra las ramas, e indica en cual esta situado el usuario.

```git checkout [rama]```: Actualiza los archivos del Working Directory con los de la rama especificada. En otras palabras, mueve al usuario a otra rama.

```git checkout -b [rama]```: Crea una nueva rama con el nombre especificado.

```git merge [rama]```: Incorpora los cambios de la rama especificada en la rama actual.

```git add .```: Agrega los cambios de la rama actual, llevandolos del Working Directory a la Staging Area.

```git status```: Muestra el estado de los archivos modificados.

```git commit -m [nota]```: Crea un commit con una respectiva nota para identificarlo. Este commit engloba los cambios en el Staging Area y los transfiere al Repositorio Local.

```git push```: Sube el Repositorio Local al Repositorio Remoto.

```git pull```: Descarga y actualiza el Repositorio Local con el Repositorio Remoto.

```git log```: Muestra un log de los commits.
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

>Una rama (branch) es un espacio virtual de trabajo que permite que los desarrolladores diverjan de la version estable del software para solucionar un bug o para añadir nuevas funciones. En las ramas se trabaja con una copia sin modificar de la version existente para aislar las actualizaciones y luego probarlas antes de hacer merge a las ramas principales. Otro posible uso de las ramas es para poder variar el producto según instrucciones de un cliente. 

## Commits

Separamos el informe en bloques y cada uno escogió cual quería hacer, al terminar dichos bloques realizamos commits a las ramas individuales. Luego de que cross-checkearamos lo añadido, realizabamos commits menores para arreglar o añadir contenido

## Nuestra experiencia

Decidimos que era pertinente crear ramas individuales, en las que trabajamos según las tareas que nos dividimos. Además de otra rama "release" la cual actualizamos cuando concluiamos las tareas asignadas.

# Elicitacion
## Actividades
## Teorico
## User personas
## Modelo del problema

# Especificacion
## Requerimientos
### Funcionales
### No funcionales

>Es un requerimiento que no describe lo que el programa va a hacer sino como lo hará. Pueden ser restricciones a los servicios provistos por el sistema, condiciones de rendimiento, atributos de calidad internos y externos, etc

| Id. | Nombre |
| :-: | - |
| RF 1 | Portabilidad para distintas plataformas |
| RF 2 |  |




## Casuistica
### User cases
### User stories
## UI

# Validaciones
## Especificacion
## Solucion

# Reflexion

# Resumen

# Fuentes
- Presentaciones del curso
- Documentos de git-scm
- IBM.com
- TechTerms.com