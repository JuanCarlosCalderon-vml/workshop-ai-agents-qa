# Workshop: AI Agents & Skills para QA Automation

> De Copilot genérico a Copilot que trabaja como tu equipo.

## Requisitos previos

- [VS Code](https://code.visualstudio.com/download) con [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) activo (licencia requerida)
- [Node.js 20+](https://nodejs.org/en/download) (incluye npm)
- [Git](https://git-scm.com/downloads)
- [pnpm](https://pnpm.io/installation) (recomendado) — se habilita automáticamente con corepack (ver setup)

> **Windows:** todos los comandos funcionan igual en PowerShell o CMD.

## Setup rápido

```bash
git clone https://github.com/JuanCarlosCalderon-vml/workshop-ai-agents-qa.git
cd workshop-ai-agents-qa
npm install --ignore-scripts
npx playwright install
npx playwright test
```

Si el test pasa ✅, estás listo para el workshop.

## API de práctica

Usaremos [JSONPlaceholder](https://jsonplaceholder.typicode.com) — una API REST pública y gratuita (no requiere API key ni autenticación).

**Endpoints disponibles:**

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users` | Lista de usuarios |
| GET | `/users/{id}` | Usuario por ID |
| POST | `/users` | Crear usuario |
| GET | `/posts` | Lista de posts |
| GET | `/posts/{id}/comments` | Comentarios de un post |
| POST | `/posts` | Crear post |

## Estructura del proyecto

```
playwright.config.ts    ← Configuración de Playwright
tests/
  smoke.spec.ts         ← Test base para verificar el setup
```

> Los pasos del ejercicio se darán durante el workshop. 🚀
