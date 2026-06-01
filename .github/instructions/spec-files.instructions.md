---
applyTo: "tests/**/*.spec.ts"
---

# Spec Files

## Estructura de spec files
- Cada spec file tiene un `test.describe` con el nombre del endpoint
- Test labels: '[API] Should {expected behavior}'
- Tests usan AAA pattern con comentarios
- No lógica compleja en spec files
- Agrupar tests relacionados en el mismo describe

## Naming
- Archivos: `{feature}.spec.ts` (kebab-case)
- Describes: nombre del recurso o endpoint
- Tests: empiezan con "Should" + comportamiento esperado
