## Why

La librería de UI no cuenta con un componente para seleccionar fecha y/u hora, una
necesidad recurrente en las apps que la consumen (formularios, filtros, vencimientos).
Hoy cada app resolvería esto por su cuenta, con APIs inconsistentes y sin alineación al
design system de Janis.

## What Changes

- Se agregan **dos componentes** (atoms) que envuelven `react-native-date-picker` sobre una
  lógica base compartida:
  - **`DatePicker`**: variante inline (rueda embebida, declarativa, vía `onDateChange`).
  - **`DatePickerModal`**: variante modal (diálogo emergente), con control imperativo vía
    `ref` (`open()`/`close()`) y callbacks `onConfirm`/`onCancel`.
- Se eligió **dos componentes** en lugar de uno único con `variant` porque permite un `ref`
  correctamente tipado (solo el modal lo expone), sin parches de no-op ni warnings.
- **Theming por plataforma** (limitación real de la librería): en Android se aplica el tinte
  de la `palette` del repo (`buttonColor`, `dividerColor`); en iOS el único control de
  apariencia es `theme` (`'light' | 'dark' | 'auto'`). No existe control de color de texto
  cross-platform.
- Maneja `date={null}` posicionando la rueda en "hoy" sin emitir cambios hasta que el
  usuario interactúe (inline) o confirme (modal).
- Expone `timeZoneOffsetInMinutes` como *escape hatch* para controlar el corrimiento de
  zona horaria de cara al back.
- Se agrega `react-native-date-picker` como `peerDependency` (+ `devDependency` para
  desarrollo local).
- Se remueve la dependencia huérfana `@react-native-community/datetimepicker` (declarada en
  `package.json` pero nunca usada).

## Capabilities

### New Capabilities
- `date-picker`: selección de fecha y/u hora mediante componentes de UI (inline y modal),
  control imperativo del modal, integración de theming por plataforma con la palette del
  repo y manejo explícito de valor nulo y zona horaria.

### Modified Capabilities
<!-- No hay capabilities existentes en openspec/specs/ cuyos requerimientos cambien. -->

## Impact

- **Código nuevo:** `src/components/atoms/DatePicker/` (componentes `DatePicker` y
  `DatePickerModal`, base compartida y tests) y exports en `src/index.ts`.
- **Storybook:** `storybook/stories/DatePicker/DatePicker.stories.js` (junto al resto de
  stories, fuera de la carpeta del componente), con ejemplos de ambos componentes.
- **Dependencias (`package.json`):** agregar `react-native-date-picker` a
  `peerDependencies` y `devDependencies`; remover `@react-native-community/datetimepicker`.
- **Repo destino (apps consumidoras):** deberán instalar `react-native-date-picker`,
  correr `pod install` (iOS) y rebuildear el binario. Documentar en el README.
- **Jest:** mock de la librería nativa para los tests; el repo exige coverage 100%.
