# Workshop: AI Agents & Skills para QA Automation

> De Copilot genérico a Copilot que trabaja como tu equipo.

## Requisitos previos

- VS Code con GitHub Copilot activo
- Node.js 20+
- Git

## Setup rápido

```bash
git clone https://github.com/JuanCarlosCalderon-vml/workshop-ai-agents-qa.git
cd workshop-ai-agents-qa
npm install
npx playwright test
```

Si el test pasa ✅, estás listo.

---

## API de práctica

Usaremos [JSONPlaceholder](https://jsonplaceholder.typicode.com) — una API REST pública gratuita (no requiere API key).

**Endpoints disponibles:**

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users` | Lista de usuarios |
| GET | `/users/{id}` | Usuario por ID |
| POST | `/users` | Crear usuario |
| PUT | `/users/{id}` | Actualizar usuario |
| DELETE | `/users/{id}` | Eliminar usuario |
| GET | `/posts` | Lista de posts |
| GET | `/posts/{id}/comments` | Comentarios de un post |
| POST | `/posts` | Crear post |

---

## Ejercicio: Capa por capa

> **Nota importante:** Para cada paso, abre un **chat nuevo** en Copilot (Ctrl/Cmd + L). Así te aseguras de que Copilot cargue la configuración más reciente. Los resultados pueden variar ligeramente entre personas — lo importante es observar si se respetan las convenciones, no que el output sea idéntico.

### Paso 0 — Línea base (sin configuración)

Abre Copilot Chat y pídele:

> "Genera tests de Playwright para el endpoint GET /users de JSONPlaceholder"

Observa el resultado. Fíjate en:
- ¿Usa `test.describe`?
- ¿Tiene comentarios AAA (Arrange/Act/Assert)?
- ¿Los `expect()` tienen mensajes de error?
- ¿Usa la `baseURL` del config o hardcodea la URL?

**No lo guardes en un archivo todavía** — solo observa el output en el chat.

---

### Paso 1 — copilot-instructions.md

Crea el archivo `.github/copilot-instructions.md` con las convenciones de tu equipo.

**Ejemplo de contenido:**

```markdown
# Copilot Instructions

## Proyecto
API test automation framework con Playwright + TypeScript.

## Reglas
- Usar TypeScript estricto, nunca `any`
- Tests siguen el patrón AAA (Arrange-Act-Assert) con comentarios
- Cada `expect()` debe tener mensaje de error personalizado
- Usar `const` por defecto, `let` solo cuando sea necesario
- No usar `console.log()` en tests
- Imports con `import type` para tipos
```

Abre un **chat nuevo** y repite el mismo pedido:

> "Genera tests de Playwright para el endpoint GET /users de JSONPlaceholder"

**¿Qué cambió?** Compara con el resultado del Paso 0.

---

### Paso 2 — Instructions por tipo de archivo

Crea `.github/instructions/spec-files.instructions.md`:

```yaml
---
applyTo: "tests/**/*.spec.ts"
---
```

```markdown
# Spec Files

## Estructura de spec files
- Cada spec file tiene un `test.describe` con el nombre del endpoint
- Test labels: '[API] Should {expected behavior}'
- Tests usan AAA pattern con comentarios: // Arrange, // Act, // Assert
- No lógica compleja en spec files — delegar a funciones reutilizables
- Agrupar tests relacionados en el mismo describe

## Naming
- Archivos: `{feature}.spec.ts` (kebab-case)
- Describes: nombre del recurso o endpoint
- Tests: empiezan con "Should" + comportamiento esperado
```

Abre un **chat nuevo** y ahora pide un endpoint diferente para ver el efecto combinado:

> "Genera tests de Playwright para el endpoint GET /posts de JSONPlaceholder"

**¿Cómo cambió la estructura?** Busca los labels `[API] Should ...` y la agrupación con `test.describe`.

---

### Paso 3 — Tu primer Skill

Crea `.github/skills/generate-api-tests/SKILL.md`:

```markdown
# Skill: Generate API Tests

## Cuándo usar
Cuando el usuario pida generar tests para un endpoint REST.

## Pasos

1. Identificar el endpoint (método HTTP + path)
2. Crear el archivo spec en `tests/{feature}.spec.ts`
3. Generar un `test.describe` con el nombre del recurso
4. Para cada escenario, crear un `test()` con:
   - Label: '[API] Should {comportamiento esperado}'
   - Patrón AAA con comentarios
   - Assertions con mensajes personalizados
5. Incluir al menos estos escenarios:
   - Happy path (respuesta exitosa)
   - Recurso no encontrado (404)
   - Validación de estructura del response body

## Ejemplo de output

\`\`\`typescript
test.describe('Users API', () => {
  test('[API] Should return a list of users', async ({ request }) => {
    // Arrange
    const endpoint = '/users';

    // Act
    const response = await request.get(endpoint);
    const body = await response.json();

    // Assert
    expect(response.status(), 'Status should be 200').toBe(200);
    expect(Array.isArray(body), 'Response should be an array').toBeTruthy();
  });
});
\`\`\`
```

Ahora invoca el skill en Copilot:

> "Usa el skill generate-api-tests para generar tests del endpoint POST /posts"

**¿El resultado sigue los pasos definidos?** Verifica:
- ¿Creó el archivo en `tests/`?
- ¿Incluyó happy path, 404 y validación de estructura?
- ¿Usó los labels `[API] Should ...`?

Si el test fue creado, córrelo: `npx playwright test tests/posts.spec.ts`

---

### Paso 4 — Tu primer Agent (bonus si hay tiempo)

Crea `.github/agents/test-generator.agent.md`:

```yaml
---
name: test-generator
description: Genera test suites completos para endpoints REST
tools: ["read", "edit", "search"]
---
```

```markdown
# Test Generator Agent

## Rol
Eres un QA automation engineer que genera test suites para APIs REST.

## Instrucciones
1. Antes de generar, lee los archivos existentes en `tests/` para entender los patrones
2. Carga el skill `generate-api-tests` y sigue sus pasos
3. Genera tests completos y ejecutables
4. Usa las convenciones definidas en copilot-instructions.md

## Restricciones
- No uses `any` — usa tipos estrictos
- No generes `console.log()`
- Cada expect debe tener mensaje personalizado
```

Invoca el agent:

> `@test-generator genera tests para el endpoint GET /posts/{id}/comments incluyendo happy path y error cases`

---

## Reflexión

| Sin configuración | Con configuración |
|---|---|
| Código genérico | Código alineado al equipo |
| Cada persona obtiene algo diferente | Todos obtienen el mismo estándar |
| Hay que revisar y corregir todo | El output ya está listo para usar |

**Pregunta clave:** ¿Cuánto tiempo ahorrarías si cada nuevo test siguiera automáticamente los estándares de tu proyecto?

---

## Estructura final del proyecto

Al terminar el ejercicio, tu proyecto debería verse así:

```
.github/
  copilot-instructions.md          ← Paso 1: reglas globales
  instructions/
    spec-files.instructions.md      ← Paso 2: reglas por tipo de archivo
  skills/
    generate-api-tests/
      SKILL.md                      ← Paso 3: procedimiento reutilizable
  agents/
    test-generator.agent.md         ← Paso 4: rol completo con tools
tests/
  smoke.spec.ts                     ← Test base del setup
  posts.spec.ts                     ← Generado en Paso 3
  comments.spec.ts                  ← Generado en Paso 4
```
