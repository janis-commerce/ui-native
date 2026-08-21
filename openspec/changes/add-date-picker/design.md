## Context

`@janiscommerce/ui-native` es la librería de componentes de UI de Janis, organizada con
atomic design (`atoms`/`molecules`/`organisms`) y tipada en TypeScript. Usa `palette`
(`theme/palette`) como fuente de colores, Jest + `@testing-library/react-native` para
tests (con **coverage 100% obligatorio**: branches, functions, lines, statements) y
Storybook (ondevice + web) para documentación visual.

Se necesita un componente de selección de fecha/hora. Se eligió envolver
`react-native-date-picker` (henninghall, v5.x): un módulo nativo, autocontenido (no arrastra
dependencias de JS), compatible con el rango de RN del repo (la lib pide `react-native >= 0.64.3`
y `react >= 17.0.1`; el repo usa React 17.0.2 y RN `>=0.71.5 <0.82.0`), que ofrece una rueda
consistente entre plataformas y un modo modal propio.

Existe una dependencia huérfana, `@react-native-community/datetimepicker`, declarada en
`package.json` pero nunca importada en el código (verificado sobre todo el historial de git).
Entró como arrastre de un commit masivo de migración de Storybook.

## Goals / Non-Goals

**Goals:**
- Exponer dos componentes (atoms): `DatePicker` (inline) y `DatePickerModal` (modal).
- API alineada al design system: theming integrado con `palette` dentro de lo que la
  librería permite por plataforma, tipado seguro, convenciones del repo.
- Control imperativo del modal (`ref` con `open()`/`close()`) para evitar que el consumidor
  maneje el estado de visibilidad, siguiendo el patrón del `Modal` atom existente.
- Manejo robusto de valor nulo y de la zona horaria de cara al back.

**Non-Goals:**
- No se incluye un input trigger dentro de los componentes (picker "crudo", no envuelto). El
  input que abre el modal es responsabilidad del consumidor.
- No se define una política de timezone ni de formato ISO: se delega al consumidor.
- No se migra ningún consumo de `@react-native-community/datetimepicker` (no hay ninguno).
- **No se expone `isDisabled` en esta versión** (ver Decisión correspondiente).
- **No se busca control de color de texto del picker ni paleta completa en iOS**: la
  librería no lo soporta (ver Decisión de theming).

## Decisions

### Dos componentes separados (vs. componente único con `variant`)
Se eligió **dos componentes** (`DatePicker` inline + `DatePickerModal` modal) sobre una
**lógica base compartida** (función pura `getSharedProps` en `utils/`, que resuelve
`date=null`, theming por plataforma, `mode` y props comunes).
- **Por qué:** el control imperativo del modal requiere un `ref` tipado. Con un componente
  único + `forwardRef`, el `ref` es **único para todas las variantes**: en `inline` TypeScript
  igual expondría `open()/close()` y obligaría a un parche de no-op + `console.warn` en
  runtime (con un branch difícil de cubrir bajo coverage 100%). Con dos componentes, el `ref`
  vive solo en el modal, correctamente tipado, sin parches.
- **Alternativa descartada:** componente único con `variant` (discriminated union) — una sola
  superficie de API, pero el `ref` queda laxo y arrastra el no-op/warning. El discriminated
  union protege las *props*, no el *ref*. Se evaluaron overloads de `forwardRef` y tipos
  condicionales sobre el ref: frágiles, peor que el problema que resuelven.

### Theming por plataforma, integrado con `palette` (vs. atar palette en ambas / pass-through)
La librería **no permite el mismo control de color en ambas plataformas**:
- **Android:** se aplica el tinte de `palette` vía `buttonColor` (mapeado a `palette.primary`)
  y `dividerColor` (mapeado a un gris de la `palette`). Ambas son props Android-only.
- **iOS:** el único control de apariencia es `theme: 'light' | 'dark' | 'auto'`. No hay
  control fino de color ni de color de texto.
- **No existe `textColor` cross-platform** en la librería.
- **Decisión:** se expone una prop `theme?: 'light' | 'dark' | 'auto'` (default `'auto'`,
  sigue al esquema del sistema operativo) como única perilla cross-platform; en Android,
  además, se inyecta el tinte de `palette` internamente. No se exponen props de color crudas
  al consumidor.
- **Alternativa descartada:** "atar todos los colores a palette en ambas plataformas" — era
  **inviable**: en iOS no aplica y `textColor` no existe. También se descarta el pass-through
  crudo de `theme` sin integración con palette en Android.

### Modal: control imperativo construido sobre la prop `open` de la librería
La librería expone su modal con `modal={true}` + la prop controlada **`open`** (boolean);
no tiene API imperativa nativa. `DatePickerModal` mantiene `open` en **estado interno**
(`useState`) y expone `open()/close()` vía `useImperativeHandle`, que mutan ese estado.
- **Por qué:** evita que el consumidor declare `useState` de visibilidad y replica la
  convención del `Modal` atom (`ModalMethods { open, close }`).
- **Sincronización con cierre nativo:** la documentación confirma que `onCancel` se dispara
  tanto al tocar el botón Cancelar **como al cerrar tocando fuera del modal**. Por lo tanto,
  el wrapper sincroniza su estado interno (`isVisible → false`) en `onCancel`, lo que cubre el
  caso más común. Queda por verificar en implementación el cierre por **botón "atrás" de
  Android** o gesto de swipe (no documentado): si no dispara `onCancel`, habrá que cablearlo
  vía `onStateChange` u otro mecanismo para no quedar desincronizado.

### `date` acepta `Date | null` y contrato de emisión
La librería exige siempre un `Date`. Los componentes aceptan `Date | null`: con `null`
posicionan la rueda en `new Date()` (hoy).
- **Inline (`DatePicker`):** con `date=null` no emite `onDateChange` hasta que el usuario
  modifica la rueda.
- **Modal (`DatePickerModal`):** confirmar es una **acción explícita**; al confirmar
  **siempre** emite el `Date` mostrado (hoy, si se abrió con `date=null` y no se tocó nada).
  El componente **no** intenta representar "sin selección": distinguir "el usuario eligió hoy"
  de "no eligió" es responsabilidad del **consumidor**, que mantiene su propio estado
  (`null` hasta el primer `onConfirm`). Esto resuelve la ambigüedad de "no emite hasta
  interactuar" para el caso abrir+confirmar-sin-tocar.

### `mode` con default propio `'date'`
Valores `'date' | 'time' | 'datetime'`. El default de la **librería** es `'datetime'`; los
componentes fuerzan explícitamente `'date'` cuando el consumidor no lo provee.

### `locale` sin default propio
Se expone `locale` opcional, sin valor por defecto, apoyándose en el comportamiento nativo
de la librería (usa el locale del dispositivo). `locale` solo afecta presentación, no el
valor devuelto.

### Timezone como *escape hatch*
Los componentes devuelven `Date` crudo; el `toISOString()` lo hace el consumidor. Se expone
`timeZoneOffsetInMinutes` (nombre exacto de la prop de la librería) para controlar el
corrimiento de día/hora (`0` = "lo que el usuario elige es lo que se manda" en UTC).

### `react-native-date-picker` como `peerDependency`
Por ser módulo nativo, se declara como `peerDependency` (+ `devDependency` para desarrollo
local), no como `dependency` anidada, para no romper ni duplicar el autolinking de la app final.

### `isDisabled` fuera de alcance (por ahora)
La librería **no expone una prop de deshabilitado**. Implementarlo exigiría envolver con
`pointerEvents`/opacidad (inline) o lógica ad-hoc, sin un caso de uso confirmado todavía.
- **Decisión:** no incluirlo en esta versión (YAGNI). En modal, el "disabled" lo controla el
  consumidor no invocando `open()`. Se puede agregar más adelante si surge la necesidad.

## Risks / Trade-offs

- **Theming limitado en iOS** → solo `theme` claro/oscuro; el tinte de palette aplica solo
  en Android. Mitigación: documentar la limitación; es una restricción de la librería, no del
  diseño.
- **Cierre nativo del modal desincroniza el estado interno** → mitigación: sincronizar con
  `onCancel`/`onStateChange`; verificar el comportamiento real de la librería en implementación.
- **Coverage 100% obligatorio** → al eliminar el branch `__DEV__` del no-op (ya no existe con
  dos componentes), se reduce el riesgo. Se evita `/* istanbul ignore file */` (mal precedente
  de `Select`); se cubren todas las ramas con tests y se mockea la librería nativa.
- **`mode='time'` + `minimumDate`/`maximumDate`** → la librería compara solo la hora; puede
  dar resultados inesperados entre fechas distintas. Mitigación: documentar la limitación.
- **`minuteInterval`** → valores soportados por la librería: 1, 2, 3, 4, 5, 6, 10, 12, 15,
  20, 30. Otros valores producen comportamiento indefinido. Mitigación: documentar el set válido.
- **Cambio de `date` por prop con el modal abierto** → la librería reacciona a `date` y
  reposiciona la rueda. Mitigación: documentar el comportamiento esperado.
- **`minimumDate > maximumDate`** → en lugar de confiar ciegamente en el clamping de la
  librería, el wrapper emite un `console.warn` en dev si detecta el rango inválido.
- **Impacto en apps consumidoras** (instalar lib nativa + `pod install` + rebuild) →
  inevitable por ser módulo nativo; mitigado documentándolo en el README.
- **Sin soporte en Storybook web / `react-native-web`** → la librería es un componente nativo
  puro (`requireNativeComponent`/Fabric), sin implementación web, por lo que el componente
  **no se visualiza en la vista web de Storybook** (queda en blanco); solo en ondevice
  (Android/iOS). Es una limitación de la librería. Mitigación: documentarlo; la previsualización
  se hace en el Storybook ondevice.

## Migration Plan

1. Agregar `react-native-date-picker` a `peerDependencies` y `devDependencies`.
2. Implementar la base compartida, los dos componentes, tests y story.
3. Remover `@react-native-community/datetimepicker` del `package.json` (sin migración de
   consumo: no existe ninguno).
4. Documentar en el README la instalación del lado del consumidor.

Rollback: revertir el commit; al no haber consumos previos de la dependencia removida, no
hay efectos colaterales.

## Open Questions

Ninguna pendiente. El componente fue probado en vivo en device y funciona correctamente
(render del picker y flujo del modal verificados).

Nota de implementación: la librería **no expone ninguna prop para prevenir el cierre**
(`cancelable`/`dismissable`/etc. no existen), por lo que el modal es siempre descartable y la
estrategia es reaccionar al cierre vía `onCancel` (que la doc confirma se dispara tanto en el
botón Cancelar como en el tap-outside), no bloquearlo.
