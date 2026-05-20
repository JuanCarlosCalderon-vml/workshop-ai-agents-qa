# Workshop: AI Agents & Skills para QA Automation

> De Copilot genérico a Copilot que trabaja como tu equipo.

## Requisitos previos

- [VS Code](https://code.visualstudio.com/download) (última versión)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) + [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) (extensiones instaladas y sesión iniciada con licencia activa)
- [Node.js 20+](https://nodejs.org/en/download) (incluye npm)
- [Git](https://git-scm.com/downloads) configurado (`git config --global user.name` y `user.email`)

> **Windows:** todos los comandos funcionan igual en PowerShell o CMD.

## Configurar Git (si es la primera vez)

Si nunca has usado Git en tu máquina, abre una terminal y ejecuta:

```bash
git config --global user.name "Nombre"
git config --global user.email "correo@vml.com"
```

Para verificar que quedó bien:

```bash
git config --global --list
```

## Setup rápido

### Opción A: Clonar con Git (recomendado)

```bash
git clone https://github.com/JuanCarlosCalderon-vml/workshop-ai-agents-qa.git
cd workshop-ai-agents-qa
npm install --ignore-scripts
npx playwright install
npx playwright test
```

### Opción B: Descargar ZIP (si no puedes clonar)

1. Descarga el [ZIP del repositorio](https://github.com/JuanCarlosCalderon-vml/workshop-ai-agents-qa/archive/refs/heads/main.zip)
2. Descomprime la carpeta
3. Abre la carpeta en VS Code
4. Abre una terminal en VS Code y ejecuta:

```bash
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
