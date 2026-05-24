# Desafío Final 2 – Fibonacci & Números Primos en el Mundo Real

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-%E2%9C%94-brightgreen)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-%F0%9F%9A%80-222?logo=github)

**Estimada Licenciada**,

Este documento explica el funcionamiento completo del proyecto, los conceptos matemáticos aplicados y las decisiones técnicas que tomé. El programa genera la serie de Fibonacci, detecta los términos primos y presenta los resultados de forma visual, conectando patrones naturales con criptografía.

---

## 📌 Enlaces del proyecto

| Plataforma | Enlace |
|------------|--------|
| **Repositorio** | [GitHub - MaauPaau/Web-Fibonacci-y-Numeros-Primos...](https://github.com/MaauPaau/Web-Fibonacci-y-Numeros-Primos-aplicados-a-problemas-del-mundo-real) |
| **Sitio en vivo** | [GitHub Pages - Fibonacci & Primos](https://maaupaau.github.io/Web-Fibonacci-y-Numeros-Primos-aplicados-a-problemas-del-mundo-real/) |

---

## 🧩 Descripción del problema

En la naturaleza abundan los patrones de Fibonacci (pétalos, espirales de girasoles, piñas). Paralelamente, los números primos son esenciales en la seguridad informática moderna.  
El desafío consiste en **generar una cantidad de términos de Fibonacci, identificar cuáles son primos y presentar la información de forma clara e interactiva**.

---

## 🎯 Objetivo del programa

1. Generar la serie de Fibonacci según el número de términos que indique el usuario.
2. Detectar los términos que son números primos.
3. Mostrar la secuencia completa, los primos encontrados y un resumen con estadísticas.

---

## ⚙️ Tecnologías utilizadas

| Tecnología | Uso en el proyecto |
|------------|-------------------|
| **HTML5** | Estructura semántica de la página, formulario de entrada y secciones de resultados. |
| **CSS3** | Variables, Grid, Flexbox y diseño responsive. Estilos para destacar los primos. |
| **JavaScript (Vanilla)** | Lógica de Fibonacci, detección de primos, manipulación del DOM y validaciones. |
| **Google Fonts** | Tipografía moderna (se requiere conexión a internet). |
| **GitHub Pages** | Despliegue público del proyecto. |

---

## 📁 Estructura del repositorio

| Archivo / Carpeta | Descripción |
|-------------------|-------------|
| `index.html` | Página principal con el formulario, enlaces al CSS y JavaScript, y zonas de resultados. |
| `css/estilos.css` | Hoja de estilos con variables de color, Grid/Flexbox, resaltado de primos y media queries. |
| `js/script.js` | Funciones `esPrimo()`, `generarFibonacci()`, `calcular()` y actualización del DOM. |
| `README.md` | Este documento. |

---

## 🧠 Explicación del código (por archivo)

### `index.html`
- Contiene el formulario donde el usuario ingresa la cantidad de términos (2–40).
- Las secciones `#estadisticas`, `#secuencia`, `#primos` y `#conclusion` se llenan dinámicamente con JavaScript.
- Incluye metaetiqueta `viewport` para el diseño responsive.
- Usa `defer` en el script para no bloquear la carga del DOM.

### `css/estilos.css`
- Define variables CSS para colores, sombras y tipografía.
- Organiza las tarjetas de explicación y resultados con `grid` y `flex`.
- La clase `.primo` aplica un estilo especial (borde dorado, sombra) a los números primos dentro de la secuencia.
- Las *media queries* activan un layout de una sola columna en pantallas menores a 600px, el botón ocupa el ancho completo.

### `js/script.js`
- **`esPrimo(n)`**  
  Verifica si un número es primo contando sus divisores. Retorna `true` solo si tiene exactamente dos divisores (1 y él mismo). Números ≤ 1 no se consideran primos.
- **`generarFibonacci(cantidad)`**  
  Construye un arreglo con la serie comenzando en 0 y 1, sumando los dos últimos términos hasta completar la cantidad solicitada.
- **`calcular(e)`**  
  Previene el envío del formulario, valida que el input esté entre 2 y 40, luego genera la serie, filtra los primos y actualiza el DOM con:
  - Total de términos generados.
  - Cantidad de Fibonacci primos.
  - Último término de la serie.
  - Lista de la secuencia completa (los primos llevan la clase `.primo` y una estrella).
  - Lista de los primos detectados.
  - Conclusión interpretativa con porcentaje de primos en la serie.

---

## 📐 Algoritmo en lenguaje sencillo

1. Se comienza con los números **0** y **1**.
2. El siguiente número se obtiene **sumando los dos anteriores**.
3. Se repite este proceso hasta alcanzar la cantidad de términos deseada.
4. Para cada número generado se **cuentan sus divisores**:
   - Si tiene **exactamente 2 divisores** (1 y el propio número), es **primo**.
   - Si tiene más de 2, es compuesto.

---

## ✅ Validaciones y límites

- El campo de entrada solo acepta números **entre 2 y 40**.
- Si el valor es menor a 2 o mayor a 40, se muestra un mensaje de error y no se ejecuta ningún cálculo.
- Este límite evita que la página se vuelva lenta o que los números se salgan del diseño visual.

---

## 📱 Diseño responsive (celular y computadora)

| Dispositivo | Comportamiento |
|-------------|----------------|
| **Escritorio** | Las tarjetas de contexto y resultados se muestran en columnas gracias a `grid-template-columns`. |
| **Móvil** | El formulario y las tarjetas pasan a una sola columna. El botón de “Calcular” ocupa el 100% del ancho para facilitar el toque. |
| **Tipografía** | Se adapta con unidades `rem` y porcentajes; el tamaño de fuente base se hereda del navegador. |

---

## ❓ Preguntas guía respondidas

1. **¿Qué problema real voy a resolver?**  
   Relacionar los patrones de Fibonacci presentes en la naturaleza (girasoles, piñas) con los números primos que se utilizan en criptografía y seguridad informática.

2. **¿Usaré Fibonacci, números primos o ambos?**  
   Ambos: genero la serie de Fibonacci y luego filtro aquellos términos que además son primos (Fibonacci primos).

3. **¿Qué datos ingresará el usuario?**  
   Solo la **cantidad de términos** de Fibonacci que desea analizar (un número entero entre 2 y 40).

4. **¿Qué resultado debe mostrar la página?**  
   - La secuencia completa, resaltando los primos con una estrella (★).  
   - Lista de los Fibonacci primos encontrados.  
   - Estadísticas: total de términos, cantidad de primos, último término.  
   - Una conclusión automática con el porcentaje de primos en la serie.

5. **¿Cómo explicaré el algoritmo en lenguaje sencillo?**  
   Con pasos simples: sumar los dos últimos números para continuar la serie; contar divisores para saber si un número es primo.

6. **¿Cómo haré que la página se vea bien en celular y computadora?**  
   Usando **CSS Grid y Flexbox**, y aplicando **media queries** para reorganizar los elementos en pantallas pequeñas.

---

## 🚀 Cómo ver el proyecto

- **En línea (recomendado)**: visita el enlace de GitHub Pages que aparece en la tabla de arriba.  
- **Localmente**:
  1. Clona el repositorio o descarga los archivos.
  2. Abre `index.html` con cualquier navegador moderno (Chrome, Firefox, Edge).
  3. Se recomienda tener conexión a internet para cargar las fuentes de Google Fonts.

---

## 💡 Conclusión

Este proyecto demuestra la aplicación práctica de dos conceptos matemáticos fundamentales – Fibonacci y números primos – en un entorno web interactivo y visualmente agradable. La combinación de HTML semántico, CSS moderno y JavaScript puro permite que cualquier usuario, incluso sin conocimientos técnicos, explore la belleza de las matemáticas presentes en la naturaleza y su relevancia en la tecnología actual.

---

*Desarrollado por **Mauricio Alejandro Flores Tapia** para la materia Programación Web I.*
