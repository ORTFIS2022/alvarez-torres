# Informe académico entrega 2
Fecha de entrega: 27-jun-2022

## Construcción

Implementación de funciones principales (sin la necesidad de persistencia de datos)

Configuración de plataforma tecnológica para desarrollo y producción

Documentación del uso de librerías externas (package.json)

## Interfaz de usuario

### Interfaz de usuario web / mobile (responsive)

No se pudo lograr que la aplicación sea responsive al cambiar el tamaño del display del usuario final.

### Página única con navegación entre secciones

Se utilizo una top-app-bar para poder navegar entre las funciones de la página, adaptamos el estilo del template a los colores que definimos en el boceto, adicionando botones con íconos de material design en lugar de usar botones con texto y agregando funcionalidad de botón al titulo de la app para volver a la página principal.

### Implementación: Material Design Web Components

A través del desarrollo de la aplicación ultilizamos algunos componentes de Material Design:

- ```Top App Bar```: En donde se encuentra el título y los botones para navegar entre secciones. 

- ```Button```: Se usaron buttons con íconos para cambiar de secciones en la aplicación y un button sin relieve para volver a la pagina principal

### Aplicar un sistema de diseño

El sistema de diseño aplicado fue Material Design de Google, el cual está inspirado en el mundo físico y sus texturas, como las sombras que producen o la luz que reflejan en dicho entorno.
 
### Principios de usabilidad y cumplimiento de estándar de accesibilidad WCAG

Debido al mal manejo de tiempo y a la subestimación del alcance del proyecto no pudimos cumplir con una gran cantidad de items que se solicitaron en el proyecto, y por consecuencia no pudimos imponer principios de usabilidad en el proyecto ni cumplir con WCAG.

### Seguir especificación de estilo

El título de la aplicación se cambio a uno que estaba acorde con las funciones que queriamos aplicar. Se definió un color principal y secundario que se puede observar en la página.

## Codificación

### IDE Visual Studio Code: configuración común del equipo

Decidimos usar una versión de node específica (v14.18.1) para que generara la misma carpeta de node_modules, ya que a veces aparecían errores al levantar la aplicación si se usaban versiones diferentes.
Usamos el formatter default de HTML ya que Prettier indentaba las etiquetas de forma confusa.

### Estándares de codificación Google (HTML, CSS, JavaScript)

No se llegó a usar ESlint ni javadoc debido al manejo del tiempo explicado anteriormente.

### Buenas prácticas de OOP: separación de lógica e interfaz

Desde el principio del desarrollo se separó la parte de manejo de clases y pruebas en dominio (mjs test.js) y la parte visual en interfaz (HTML scss js).

En intefaz se importaron los archivos de dominio para poder usarse de acuerdo a las funciones de la página.

## Test unitario

Test unitarios en Jest

100% cobertura en clases de dominio


| En la semana previa a la entrega se debe congelar el desarrollo (22-nov-2021).
A partir de este punto solo se realizan actividades de test de sistema, reporte de issues y generación del informe académico.

## Test de sistema

Realizar test de sistema en un entorno separado del desarrollo

Generar casos de prueba aplicando técnica partición equivalente

Detallar sesiones de prueba exploratoria

## Reporte de issues

Reportar issues (bugs, improvements, missing features) en GitHub 

Aplicar buenas prácticas de reporte de issues

Definir labels para tipos de issue y niveles de severidad

Dejar issues abiertos para correcciones o mejoras futuras

Sumarizar número de issues reportados por tipo

Realizar una evaluación global de la calidad

## Reflexión

**Pablo**

Personalmente tenía grandes expectativas con esta parte del trabajo ya que quería mezclar los conceptos que expusimos en la primera parte del obligatorio; subestimé la curva de aprendizaje del uso de Material Design, pasamos varios días de la recta final intentando descifrar cómo configurar los archivos para que la página pudiera levantar (cuando pudimos haber experimentado antes), dejándonos menos tiempo para poder implementar todo lo pedido por la letra y lo planteado en nuestro proyecto. Tuvimos varios problemas con git(que se pueden ver reflejados en los commits) que nos restaron aún mas tiempo.


Dejando eso de lado, nos dividimos las tareas eficientemente y nos ayudábamos mutuamente cuando podíamos. Pudimos mantener el mismo rumbo de pensamiento a la hora de mejorar de la implementación.

Técnicas aplicadas y aprendizajes
