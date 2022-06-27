# Informe académico entrega 2
Fecha de entrega: 29-nov-2021

## Construcción

### Implementación de funciones principales

Comenzamos por pensar las clases que ibamos a precisar. Decidimos usar:
- NFT
- Collection: Lista de NFTs
- User: Usuario que tiene una colección de NFTs
- System: Sistema donde se encuentran los usuarios

Cada NFT tiene su propio id, imagen y precio. Los NFTs se encuentran en una colección, la cual es una lista de NFTs perteneciente a un usuario. Esta puede recibir NFTs, removerlos, y retornar su contenido. A su vez, los usuarios cuentan con un id además de su colección. Estos pueden recibir NFTs de otros usuarios (intercambiar), y retornar su colección. Por último, el sistema figura por encima de todo y contiene una lista de usuarios. Esta se puede modificar agregando nuevos usuarios.

### Configuración de plataforma tecnológica para desarrollo y producción

Siguiendo el estandar de material.io, decidimos usar nodejs, npm, y webpack para la construcción de la plataforma. 

### Documentación del uso de librerías externas

No usamos ninguna librería externa.

## Interfaz de usuario

Interfaz de usuario web / mobile (responsive)

Página única con navegación entre secciones

Implementación: Material Design Web Components

Aplicar un sistema de diseño y principios de usabilidad

Cumplimiento de estándar de accesibilidad WCAG

Seguir especificación de estilo

## Codificación

IDE Visual Studio Code: configuración común del equipo

Estándares de codificación Google (HTML, CSS, JavaScript)

Buenas prácticas de OOP: separación de lógica e interfaz

Análisis estático de código: mostrar reducción de problemas

## Test unitario

Se corrieron las pruebas sobre el sistema, donde pasaron 13 casos de 14. El caso de prueba que falló fue el de agregar un usuario al sistema ya que fue omitido un "let".

![](../docs/assets/img/test-unitario.png)

## Test de sistema

### Realizar test de sistema en un entorno separado del desarrollo

Realizamos las pruebas de sistema en un entorno separado del desarrollo al hacerlo despues del code freeze, probando el codigo final.

### Generar casos de prueba aplicando técnica partición equivalente

Nuestro sistema está pensado para que el usuario no tenga que ingresar nada. Este comenzará logueado y con una colección con NFTs predeterminados. Este no tendrá impacto en su id, precio, etc., por lo cual no se establecieron chequeos internos para estos datos. Para efectos del ejercicio, se supondrá que el usuario puediese cambiar estos valores.

| Variable | Clases validas | Clases invalidas |
| :-: | - | - |
| nft.id | Número natural menor a 4294967296 (32 bits) | Campo vacio, valores no numericos, valores numericos menores a 0, valores numericos mayores a 4294967295, valores numericos con coma. |
| nft.price | Valor numerico positivo expresable con un punto flotante de 64 bits | Campo vacio, valores no numericos, valores numericos menores a 0, valores numericos no expresables con un punto flotante de 64 bits. |
| nft.image | Imagen formato .png con dimensiones menores o iguales a 1080x1080 | Campo vacio, archivos que no sean imagenes, imagenes con dimensiones que excedan a 1080 en cualquiera de sus ejes. |


## Reporte de issues

### Reportar issues (bugs, improvements, missing features) en GitHub 

![](../docs/assets/img/issues.png)

### Aplicar buenas prácticas de reporte de issues

![](../docs/assets/img/issue.png)

### Definir labels para tipos de issue y niveles de severidad

Para organizarnos usamos las labels default de GitHub, y además definimos labels para bugs visuales o funcionales.

### Sumarizar número de issues reportados por tipo

Reportamos dos issues visuales.

### Realizar una evaluación global de la calidad

Dado el estado del proyecto, no es posible evaluar la calidad del mismo.

## Reflexión

Detalle del trabajo individual

Técnicas aplicadas y aprendizajes
