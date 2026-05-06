function cargarEjercicio1() {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Ejercicio 1: Sumar dos números</h3>

    <input type="number" id="num1Suma" placeholder="Primer número">
    <input type="number" id="num2Suma" placeholder="Segundo número">

    <br><br>

    <button onclick="procesarSuma()">Calcular suma</button>
    <button onclick="testingEjercicio1()">Testing 1</button>

    <div id="resultadoSuma"></div>
    <div id="testingSuma"></div>
  `;
}

function sumar(a, b) {
  return a + b;
}

function procesarSuma() {
  const a = Number(document.getElementById("num1Suma").value);
  const b = Number(document.getElementById("num2Suma").value);
  const resultadoSuma = document.getElementById("resultadoSuma");

  if (isNaN(a) || isNaN(b)) {
    resultadoSuma.innerHTML = "⚠️ Ingresa dos números válidos.";
    return;
  }

  resultadoSuma.innerHTML = `✅ Resultado: ${a} + ${b} = <b>${sumar(a, b)}</b>`;
}

function testingEjercicio1() {
  const testingSuma = document.getElementById("testingSuma");
  const prueba = sumar(2, 3);

  testingSuma.innerHTML = `
    <p>🧪 Testing 1</p>
    <p>Prueba: sumar(2, 3)</p>
    <p>Resultado esperado: 5</p>
    <p>${prueba === 5 ? "✅ Aprobado" : "❌ Falló"}</p>
  `;
}
function cargarEjercicio2() {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Ejercicio 2: Analizar texto</h3>

    <input type="text" id="textoAnalizar" placeholder="Escribe un texto">

    <br><br>

    <button onclick="procesarTexto()">Analizar</button>
    <button onclick="testingEjercicio2()">Testing 2</button>

    <div id="resultadoTexto"></div>
    <div id="testingTexto"></div>
  `;
}

function analizarTexto(texto) {
  if (texto === texto.toUpperCase()) {
    return "MAYÚSCULAS";
  }

  if (texto === texto.toLowerCase()) {
    return "minúsculas";
  }

  return "Mixto";
}

function procesarTexto() {
  const texto = document.getElementById("textoAnalizar").value;
  const resultadoTexto = document.getElementById("resultadoTexto");

  if (!texto) {
    resultadoTexto.innerHTML = "⚠️ Ingresa un texto válido.";
    return;
  }

  resultadoTexto.innerHTML = `✅ Resultado: ${analizarTexto(texto)}`;
}

function testingEjercicio2() {
  const testingTexto = document.getElementById("testingTexto");
  const prueba = analizarTexto("HOLA");

  testingTexto.innerHTML = `
    <p>🧪 Testing 2</p>
    <p>Prueba: analizarTexto("HOLA")</p>
    <p>Resultado esperado: MAYÚSCULAS</p>
    <p>${prueba === "MAYÚSCULAS" ? "✅ Aprobado" : "❌ Falló"}</p>
  `;
}

function testingEjercicio2() {
  const testingResta = document.getElementById("testingResta");
  const prueba = restar(10, 4);

  testingResta.innerHTML = `
    <p>🧪 Testing 2</p>
    <p>Prueba: restar(10, 4)</p>
    <p>Resultado esperado: 6</p>
    <p>${prueba === 6 ? "✅ Aprobado" : "❌ Falló"}</p>
  `;
}

function cargarEjercicio3() {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Ejercicio 3: Multiplicar dos números</h3>

    <input type="number" id="num1Multi" placeholder="Primer número">
    <input type="number" id="num2Multi" placeholder="Segundo número">

    <br><br>

    <button onclick="procesarMultiplicacion()">Calcular multiplicación</button>
    <button onclick="testingEjercicio3()">Testing 3</button>

    <div id="resultadoMulti"></div>
    <div id="testingMulti"></div>
  `;
}

function multiplicar(a, b) {
  return a * b;
}

function procesarMultiplicacion() {
  const a = Number(document.getElementById("num1Multi").value);
  const b = Number(document.getElementById("num2Multi").value);
  const resultadoMulti = document.getElementById("resultadoMulti");

  if (isNaN(a) || isNaN(b)) {
    resultadoMulti.innerHTML = "⚠️ Ingresa dos números válidos.";
    return;
  }

  resultadoMulti.innerHTML = `✅ Resultado: ${a} × ${b} = <b>${multiplicar(a, b)}</b>`;
}

function testingEjercicio3() {
  const testingMulti = document.getElementById("testingMulti");
  const prueba = multiplicar(3, 4);

  testingMulti.innerHTML = `
    <p>🧪 Testing 3</p>
    <p>Prueba: multiplicar(3, 4)</p>
    <p>Resultado esperado: 12</p>
    <p>${prueba === 12 ? "✅ Aprobado" : "❌ Falló"}</p>
  `;
}

function cargarEjercicio4() {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Ejercicio 4: Verificar si un número es par</h3>

    <input type="number" id="numeroPar" placeholder="Ingresa un número">

    <br><br>

    <button onclick="procesarPar()">Verificar</button>
    <button onclick="testingEjercicio4()">Testing 4</button>

    <div id="resultadoPar"></div>
    <div id="testingPar"></div>
  `;
}

function esPar(numero) {
  return numero % 2 === 0;
}

function procesarPar() {
  const numero = Number(document.getElementById("numeroPar").value);
  const resultadoPar = document.getElementById("resultadoPar");

  if (isNaN(numero)) {
    resultadoPar.innerHTML = "⚠️ Ingresa un número válido.";
    return;
  }

  resultadoPar.innerHTML = esPar(numero)
    ? `✅ El número ${numero} es par.`
    : `✅ El número ${numero} es impar.`;
}

function testingEjercicio4() {
  const testingPar = document.getElementById("testingPar");
  const prueba = esPar(8);

  testingPar.innerHTML = `
    <p>🧪 Testing 4</p>
    <p>Prueba: esPar(8)</p>
    <p>Resultado esperado: true</p>
    <p>${prueba === true ? "✅ Aprobado" : "❌ Falló"}</p>
  `;
}

function cargarEjercicio5() {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Ejercicio 5: Calcular promedio de tres números</h3>

    <input type="number" id="num1Prom" placeholder="Primer número">
    <input type="number" id="num2Prom" placeholder="Segundo número">
    <input type="number" id="num3Prom" placeholder="Tercer número">

    <br><br>

    <button onclick="procesarPromedio()">Calcular promedio</button>
    <button onclick="testingEjercicio5()">Testing 5</button>

    <div id="resultadoProm"></div>
    <div id="testingProm"></div>
  `;
}

function promedio(a, b, c) {
  return (a + b + c) / 3;
}

function procesarPromedio() {
  const a = Number(document.getElementById("num1Prom").value);
  const b = Number(document.getElementById("num2Prom").value);
  const c = Number(document.getElementById("num3Prom").value);
  const resultadoProm = document.getElementById("resultadoProm");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    resultadoProm.innerHTML = "⚠️ Ingresa tres números válidos.";
    return;
  }

  resultadoProm.innerHTML = `✅ Promedio: <b>${promedio(a, b, c)}</b>`;
}

function testingEjercicio5() {
  const testingProm = document.getElementById("testingProm");
  const prueba = promedio(4, 5, 6);

  testingProm.innerHTML = `
    <p>🧪 Testing 5</p>
    <p>Prueba: promedio(4, 5, 6)</p>
    <p>Resultado esperado: 5</p>
    <p>${prueba === 5 ? "✅ Aprobado" : "❌ Falló"}</p>
  `;
}

function testingGlobal() {
  const resultado = document.getElementById("resultado");

  resultado.innerHTML = `
    <h3>Testing Global</h3>

    <p>${sumar(2, 3) === 5 ? "✅" : "❌"} Ejercicio 1: suma aprobada.</p>
   ${analizarTexto("HOLA") === "MAYÚSCULAS" ? "✅" : "❌"} Ejercicio 2: análisis de texto aprobado.
    <p>${multiplicar(3, 4) === 12 ? "✅" : "❌"} Ejercicio 3: multiplicación aprobada.</p>
    <p>${esPar(8) === true ? "✅" : "❌"} Ejercicio 4: número par aprobado.</p>
    <p>${promedio(4, 5, 6) === 5 ? "✅" : "❌"} Ejercicio 5: promedio aprobado.</p>

    <br>

    <p><b>🎉 Resultado final: proyecto aprobado correctamente.</b></p>
  `;
}