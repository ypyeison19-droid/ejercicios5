# Ejercicios Node - Testing y CI/CD

Proyecto desarrollado en JavaScript con Node.js que implementa 5 ejercicios básicos, pruebas automatizadas y despliegue continuo con GitHub Actions.

---

## Tecnologías utilizadas

- JavaScript
- Node.js
- HTML5
- CSS3
- Git
- GitHub Actions

---

## Ejercicios implementados

### 1. Sumar
Realiza la suma de dos números.

### 2. Restar
Realiza la resta entre dos números.

### 3. Multiplicar
Multiplica dos valores.

### 4. Es Par
Verifica si un número es par.

### 5. Promedio
Calcula el promedio de tres números.

---

## Testing automatizado

El proyecto incluye pruebas automáticas con Node Test Runner.

Ejecutar pruebas:

```bash
npm test
```

Resultado esperado:

```bash
pass 5
fail 0
```

---

## Interfaz gráfica

Incluye una interfaz web con botón de ejecución para probar los ejercicios visualmente.

Archivo principal:

```bash
index.html
```

---

## CI/CD

Se implementó integración continua mediante GitHub Actions.

El workflow ejecuta automáticamente:

- Instalación de dependencias
- Validación del proyecto
- Ejecución de tests

Cada push a la rama `main` dispara el pipeline.

---

## Estructura del proyecto

```bash
ejercicios-node/
│
├── src/
│   └── app.js
│
├── test/
│   └── app.test.js
│
├── .github/workflows/
│   └── ci.yml
│
├── index.html
├── test-ui.js
├── package.json
└── README.md
```

---

## Autor

Desarrollado por Yeison

Proyecto académico orientado al aprendizaje de:

- Desarrollo de software
- Testing
- Automatización
- Control de versiones