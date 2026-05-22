# Desafio Final 2

Este README esta dirigido a la licenciada para explicar el problema, el codigo y como verificar el funcionamiento en GitHub Pages o localmente.

## Enlaces del proyecto

- Repositorio: https://github.com/MaauPaau/Web-Fibonacci-y-Numeros-Primos-aplicados-a-problemas-del-mundo-real
- GitHub Pages: https://maaupaau.github.io/Web-Fibonacci-y-Numeros-Primos-aplicados-a-problemas-del-mundo-real/


## Descripcion del problema

En la naturaleza aparecen patrones que siguen la serie de Fibonacci (flores, semillas, espirales). Al mismo tiempo, los numeros primos son clave en criptografia. El reto consiste en generar una cantidad de terminos de Fibonacci, identificar cuales son primos y presentar la informacion de forma clara y visual.

## Objetivo del programa

1. Generar la serie de Fibonacci segun la cantidad indicada por el usuario.
2. Detectar los terminos que son numeros primos.
3. Mostrar la secuencia, los primos encontrados y un resumen interpretativo.

## Como ver el proyecto

- Local: abrir index.html en el navegador.
- Online: abrir el enlace de GitHub Pages.

Nota: se usan fuentes de Google Fonts, por eso se recomienda tener conexion a internet.

## Tecnologias utilizadas

- HTML5 para la estructura.
- CSS3 para el diseno y la adaptacion a movil y escritorio.
- JavaScript para la logica y el manejo del DOM.

## Estructura del repositorio

- index.html
- css/estilos.css
- js/script.js
- README.md

## Explicacion del codigo (por archivo)

### index.html

- Contiene la estructura principal y el formulario de entrada.
- Enlaza el estilo externo en css/estilos.css.
- Enlaza el script externo en js/script.js con defer.
- Define las secciones donde se muestran estadisticas, secuencia y conclusion.

### css/estilos.css

- Define variables de color y tipografia.
- Usa grid y flex para organizar tarjetas y listas.
- Aplica estilos visuales para destacar los numeros primos.
- Incluye reglas responsive para pantallas pequenas.

### js/script.js

- esPrimo(n): verifica si un numero es primo contando divisores.
- generarFibonacci(cantidad): genera la secuencia usando suma de terminos previos.
- calcular(e): valida el input, calcula resultados y actualiza la pagina.
- Actualiza el DOM con estadisticas, lista completa, primos y conclusion.

## Algoritmo en lenguaje sencillo

1. Empezar con 0 y 1.
2. Sumar los dos ultimos para obtener el siguiente numero.
3. Repetir hasta completar la cantidad solicitada.
4. Para saber si un numero es primo, contar sus divisores; si tiene solo 2 (1 y el mismo numero), entonces es primo.

## Validaciones y limites

- Se valida que el numero ingresado sea entre 2 y 40.
- El limite evita numeros demasiado grandes y mantiene la pagina rapida y clara.

## Diseno responsive (celular y computadora)

- Se usa layout con grid y flex para adaptar tarjetas y listas.
- En pantallas pequenas, el formulario pasa a una columna y el boton ocupa todo el ancho.

## Preguntas guia respondidas

1. Que problema real voy a resolver?
   - Relacionar patrones de Fibonacci en la naturaleza con numeros primos usados en seguridad.
2. Usare Fibonacci, numeros primos o ambos?
   - Ambos: se genera Fibonacci y se filtran los terminos que son primos.
3. Que datos ingresara el usuario?
   - La cantidad de terminos a generar.
4. Que resultado debe mostrar la pagina?
   - Secuencia completa, primos detectados y un resumen con estadisticas.
5. Como explicare el algoritmo en lenguaje sencillo?
   - Con pasos basicos: sumar los dos ultimos para Fibonacci y contar divisores para primos.
6. Como hare que la pagina se vea bien en celular y computadora?
   - Usando grid/flex y reglas responsive para ajustar columnas y botones.

