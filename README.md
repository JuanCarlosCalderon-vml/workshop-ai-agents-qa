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
src/                    ← Carpeta para helpers y utilidades
```

> Los pasos del ejercicio se darán durante el workshop. 🚀
