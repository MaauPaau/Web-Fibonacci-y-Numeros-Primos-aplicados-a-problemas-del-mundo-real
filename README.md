# Desafio Final 2

Proyecto web que relaciona la serie de Fibonacci con los numeros primos, conectando un problema real (patrones en la naturaleza y uso de primos en seguridad) con un algoritmo simple y visual.

## Descripcion del problema

En la naturaleza aparecen patrones que siguen la serie de Fibonacci (flores, semillas, espirales). Al mismo tiempo, los numeros primos son clave en criptografia. El reto consiste en generar una cantidad de terminos de Fibonacci, identificar cuales son primos y presentar la informacion de forma clara.

## Objetivo

1. Generar la serie de Fibonacci segun la cantidad indicada por el usuario.
2. Detectar los terminos que son numeros primos.
3. Mostrar la secuencia, los primos encontrados y un resumen interpretativo.

## Como funciona

1. El usuario ingresa la cantidad de terminos (entre 2 y 40).
2. El programa genera la serie de Fibonacci con un ciclo.
3. Cada termino se analiza para verificar si es primo.
4. La pagina muestra:
	- Total de terminos generados.
	- Cantidad de Fibonacci primos.
	- Ultimo termino generado.
	- Lista completa de la secuencia.
	- Lista destacada de los primos encontrados.

## Datos de entrada

- Cantidad de terminos de Fibonacci (numero entero entre 2 y 40).

## Resultados que muestra la pagina

- Estadisticas basicas (terminos, primos, ultimo termino).
- Secuencia completa con marca visual de los primos.
- Lista de Fibonacci primos detectados.
- Conclusion en lenguaje natural sobre la rareza de estos numeros.

## Algoritmo en lenguaje sencillo

1. Empezar con 0 y 1.
2. Sumar los dos ultimos para obtener el siguiente numero.
3. Repetir hasta completar la cantidad solicitada.
4. Para saber si un numero es primo, contar sus divisores; si tiene solo 2 (1 y el mismo numero), entonces es primo.

## Validaciones y limites

- Se valida que el numero ingresado sea entre 2 y 40.
- El limite evita numeros demasiado grandes y mantiene la pagina rapida y clara.

## Diseno responsive (celular y computadora)

- Se usa un layout con grid y flex para adaptar tarjetas y listas.
- En pantallas pequenas, el formulario pasa a una columna y el boton ocupa todo el ancho.

## Estructura del repositorio

- index.html
- css/estilos.css
- js/script.js
- README.md

## Recomendacion para estudiantes (preguntas guia)

Antes de programar, responder estas preguntas. En este proyecto se cumple lo siguiente:

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

## Uso

Abrir index.html en el navegador.
