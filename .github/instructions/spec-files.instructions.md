---
applyTo: "tests/**/*.spec.ts"
---

<!-- Scoped instructions: only applied when Copilot works on spec files (tests/**/*.spec.ts) -->

# Spec Files

## Spec file structure
<!-- Enforces consistent test organization across all spec files -->
- Each spec file has a `test.describe` wrapping all tests, named after the endpoint
- Test labels follow the format: `[API] Should {expected behavior}` <!-- makes test reports readable -->
- Tests use the AAA pattern with comments <!-- Arrange-Act-Assert for clarity -->
- No complex logic in spec files <!-- keep tests simple; move helpers elsewhere -->
- Group related tests in the same describe block

## Naming
<!-- Naming conventions so files and tests are predictable -->
- Files: `{feature}.spec.ts` (kebab-case)
- Describes: name of the resource or endpoint
- Tests: start with "Should" + expected behavior
