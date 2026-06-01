---
name: generate-api-tests
description: Genera test suites completas para endpoints REST de JSONPlaceholder
---

# Generate API Tests

## Procedimiento
1. Identifica el endpoint y método HTTP
2. Crea el archivo `tests/{recurso}.spec.ts`
3. Agrega `test.describe` con el nombre del endpoint
4. Genera tests para:
   - Happy path (status 200, estructura correcta)
   - Recurso no encontrado (404 si aplica)
   - Validación de campos del response
5. Cada test sigue patrón AAA con comentarios
6. Cada `expect()` tiene mensaje de error
7. Labels: `[API] Should {comportamiento}`
8. Ejecuta los tests con `npx playwright test {archivo}`
