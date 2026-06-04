---
name: generate-api-tests
description: Generates complete test suites for JSONPlaceholder REST endpoints
---

<!-- Skill: reusable procedure Copilot follows when invoked with #generate-api-tests -->

# Generate API Tests

## Procedure
<!-- Step-by-step recipe — Copilot executes these in order -->
1. Identify the endpoint and HTTP method
2. Create the file `tests/{resource}.spec.ts`
3. Add a `test.describe` block named after the endpoint
4. Generate tests for:
   - Happy path (status 200, correct structure) <!-- verifies the API works under normal conditions -->
   - Resource not found (404 when applicable) <!-- verifies proper error handling -->
   - Response field validation <!-- ensures the shape of the data matches expectations -->
5. Each test follows the AAA pattern with comments
6. Every `expect()` includes a custom error message
7. Labels: `[API] Should {behavior}`
8. Run the tests with `npx playwright test {file}`
