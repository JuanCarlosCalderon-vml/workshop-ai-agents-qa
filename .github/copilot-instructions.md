# Copilot Instructions

## Proyecto
API test automation framework con Playwright + TypeScript.

## Reglas
- Usar TypeScript estricto, nunca `any`
- Tests siguen patrón AAA (Arrange-Act-Assert) con comentarios
- Cada `expect()` debe tener mensaje de error personalizado
- Usar `const` por defecto, `let` solo cuando sea necesario
- No usar `console.log()` en tests
- Imports con `import type` para tipos
