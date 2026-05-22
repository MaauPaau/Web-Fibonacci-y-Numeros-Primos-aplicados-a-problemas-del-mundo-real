// Verificar si un numero es primo
function esPrimo(n) {
  if (n < 2) return false;
  let contador = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      contador++;
    }
  }
  return contador === 2;
}

// Generar serie de Fibonacci (sin arrays en la logica base)
function generarFibonacci(cantidad) {
  let secuencia = [];
  let a = 0;
  let b = 1;
  let c;

  for (let i = 0; i < cantidad; i++) {
    if (i === 0) { secuencia.push(a); continue; }
    if (i === 1) { secuencia.push(b); continue; }
    c = a + b;
    a = b;
    b = c;
    secuencia.push(b);
  }
  return secuencia;
}

// Calcular
function calcular(e) {
  e.preventDefault();

  const input = parseInt(document.getElementById('terminos').value);
  const errorEl = document.getElementById('errorMsg');

  if (!input || input < 2 || input > 40) {
    errorEl.style.display = 'block';
    return;
  }
  errorEl.style.display = 'none';

  const secuencia = generarFibonacci(input);
  const primos = secuencia.filter(n => esPrimo(n));

  // Stats
  document.getElementById('statTerminos').textContent = secuencia.length;
  document.getElementById('statPrimos').textContent = primos.length;
  document.getElementById('statUltimo').textContent = secuencia[secuencia.length - 1].toLocaleString('es-BO');

  // Secuencia
  const seqList = document.getElementById('seqList');
  seqList.innerHTML = '';
  secuencia.forEach(function(n) {
    const div = document.createElement('div');
    div.className = 'seq-item' + (esPrimo(n) ? ' es-primo' : '');
    div.textContent = n.toLocaleString('es-BO');
    seqList.appendChild(div);
  });

  // Primos
  const primosList = document.getElementById('primosList');
  primosList.innerHTML = '';
  if (primos.length === 0) {
    const emptyNote = document.createElement('span');
    emptyNote.className = 'empty-note';
    emptyNote.textContent = 'Ninguno en este rango';
    primosList.appendChild(emptyNote);
  } else {
    primos.forEach(function(n) {
      const span = document.createElement('span');
      span.className = 'primo-badge';
      span.textContent = n.toLocaleString('es-BO');
      primosList.appendChild(span);
    });
  }

  // Conclusion
  document.getElementById('conclusionText').textContent =
    'De los ' + secuencia.length + ' primeros términos de Fibonacci, solo ' + primos.length +
    ' son también números primos (' + (primos.length > 0 ? primos.join(', ') : 'ninguno') +
    '). Esto muestra que los "Fibonacci primos" son extremadamente raros — una propiedad ' +
    'que los hace valiosos en criptografía. La naturaleza usa Fibonacci para optimizar estructuras ' +
    '(girasoles, piñas, caracoles), mientras que las matemáticas los usan para proteger información digital.';

  document.getElementById('resultsArea').classList.add('visible');
  document.getElementById('resultsArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
