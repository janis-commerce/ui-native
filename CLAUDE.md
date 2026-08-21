# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandos

```bash
npm test                        # correr todos los tests
npm test -- --testPathPattern=DatePicker  # correr un test específico por nombre de archivo
npm run lint                    # ESLint
npm run validate:code           # lint + TypeScript check + tests (lo que corre en CI)
npm run build                   # compila TypeScript a dist/
npm run storybook-web           # Storybook en http://localhost:6006
```

La cobertura de tests se exige al 100% en branches, functions, lines y statements.

## Arquitectura

Librería de componentes React Native organizada en tres capas según Atomic Design. La dependencia es estrictamente unidireccional:

```
organisms  →  molecules  →  atoms
```

Un atom no puede importar de molecules u organisms. Un molecule no puede importar de organisms.

Los componentes se exportan todos desde `src/index.ts` (barrel central). También se exportan `palette` (colores) y `getScale` (función de escala).

## Estructura de un componente

```
/ComponentName
├── index.tsx        # componente principal
├── types.ts         # interfaces y tipos TypeScript
├── index.test.tsx   # tests
└── utils/
    ├── index.ts
    └── index.test.ts
```

Cuando una carpeta exporta más de un componente, el barrel export debe ser `index.ts` (no `.tsx`).

## Alias de TypeScript

Configurados en `tsconfig.json` y `babel.config.js`. Usarlos siempre en lugar de rutas relativas:

```ts
import Button from 'atoms/Button'
import { palette } from 'theme/palette'
import { scaledForDevice } from 'scale'
// también disponibles: molecules/*, organisms/*, ts/*, utils/*
```

## Sistema de escala responsiva

Todos los valores de tamaño deben pasar por las funciones de `src/scale/`:

- `horizontalScale(n)` — para anchos, padding horizontal, font sizes
- `verticalScale(n)` — para alturas y padding vertical
- `moderateScale(n, factor?)` — cuando se quiere un escalado intermedio
- `scaledForDevice(n, callback)` — en web retorna `n` directamente; en native ejecuta `callback`

No usar valores hardcodeados en px.

## Tests

Usa `react-test-renderer`, no React Testing Library. Los mocks globales (reanimated, gesture-handler, bottom-sheet, date-picker, toast-message) ya están configurados en `setupTest/jest.setup.js` — no hace falta redefinirlos en cada test.

## Peer dependencies nativas

Varios componentes dependen de módulos nativos declarados como `peerDependencies`. No están instalados en este repo y se mockean en los tests:

- `react-native-date-picker` (DatePicker)
- `react-native-fast-image` (Image)
- `react-native-svg` (Svg)
- `react-native-reanimated` + `react-native-gesture-handler` (SwipeUp, SwipeList)
- `@react-native-async-storage/async-storage`
- `react-native-toast-message`
