# Copilot Instructions

<!-- Global rules that apply to every Copilot interaction in this repo -->

## Project
<!-- Tell Copilot what this repo is so it picks the right libraries and patterns -->
API test automation framework using Playwright + TypeScript.

## Rules
<!-- Each rule steers generated code toward team conventions -->
- Use strict TypeScript, never `any` <!-- prevents loosely-typed code that bypasses compile checks -->
- Tests follow the AAA pattern (Arrange-Act-Assert) with comments <!-- makes test intent scannable -->
- Every `expect()` must include a custom error message as the second argument of expect: `expect(value, 'message').toBe(expected)` — never as a second argument of the matcher <!-- Playwright-specific: .toBe() does NOT accept a message arg -->
- Use `const` by default, `let` only when reassignment is needed <!-- promotes immutability -->
- No `console.log()` in tests <!-- keeps test output clean; use Playwright's built-in reporting -->
- Use `import type` for type-only imports <!-- reduces bundle size and clarifies intent -->
