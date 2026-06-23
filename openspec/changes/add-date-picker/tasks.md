## 1. Dependencias

- [x] 1.1 Agregar `react-native-date-picker` a `peerDependencies` en `package.json`
- [x] 1.2 Agregar `react-native-date-picker` a `devDependencies` (desarrollo local / Storybook)
- [x] 1.3 Remover `@react-native-community/datetimepicker` de `dependencies`
- [x] 1.4 Verificar el `minSdkVersion` Android requerido por la librería
- [x] 1.5 Instalar dependencias y verificar que el proyecto levanta

## 2. Base compartida y tipos

- [x] 2.1 Crear carpeta `src/components/atoms/DatePicker/`
- [x] 2.2 Definir tipos comunes en `utils/` (date: Date | null, mode, minimumDate, maximumDate, locale, minuteInterval, timeZoneOffsetInMinutes, theme, testID)
- [x] 2.3 Implementar la lógica base compartida en `utils/` (función pura `getSharedProps`): resolución de `date=null` → "hoy", default de `mode='date'`, theming por plataforma, `console.warn` si `minimumDate > maximumDate`
- [x] 2.4 Implementar el mapeo de theming: Android → `buttonColor`/`dividerColor` desde `palette`; iOS → `theme`

## 3. Componente `DatePicker` (inline)

- [x] 3.1 Implementar `DatePicker` declarativo sobre la base compartida
- [x] 3.2 Cablear `onDateChange`; con `date=null` no emitir hasta interacción

## 4. Componente `DatePickerModal` (modal)

- [x] 4.1 Implementar `DatePickerModal` con `forwardRef` y estado interno de visibilidad sobre la prop `open` de la librería
- [x] 4.2 Exponer `open()`/`close()` vía `useImperativeHandle` (ref tipado `DatePickerModalRef`)
- [x] 4.3 Cablear `onConfirm` (emite el `Date` mostrado y cierra) y `onCancel` (cierra sin emitir)
- [x] 4.4 Sincronizar el estado interno con el cierre nativo (gesto/back) vía `onCancel`/`onStateChange`
- [x] 4.5 Accesibilidad de los botones Confirmar/Cancelar: son nativos de la librería; su etiqueta accesible la dan `confirmText`/`cancelText` (no hay `testID` inyectable desde JS)

## 5. Export e integración

- [x] 5.1 Exportar `DatePicker` y `DatePickerModal` desde `src/index.ts` (sin tipos, por consistencia con el resto de los componentes del repo)

## 6. Testing (coverage 100%, sin `istanbul ignore` de archivo completo)

- [x] 6.1 Configurar el mock de `react-native-date-picker` en Jest
- [x] 6.2 Test: render de `DatePicker` (inline) y `DatePickerModal` (modal)
- [x] 6.3 Test: `onDateChange` se dispara al cambiar la fecha (inline)
- [x] 6.4 Test: `DatePicker` con `date=null` no emite hasta interacción
- [x] 6.5 Test: `onConfirm`/`onCancel` disparan y cierran el modal
- [x] 6.6 Test: `onConfirm` con `date=null` sin interacción emite la fecha actual
- [x] 6.7 Test: métodos del ref (`open`/`close`) abren/cierran el modal
- [x] 6.8 Test: sincronización con cierre nativo (re-`open()` reabre)
- [x] 6.9 Test: `console.warn` cuando `minimumDate > maximumDate`
- [x] 6.10 Test: theming por plataforma (tinte de palette en Android, `theme` en iOS)
- [x] 6.11 Verificar coverage 100% sin recurrir a `/* istanbul ignore file */`

## 7. Storybook y documentación

- [x] 7.1 Crear `storybook/stories/DatePicker/DatePicker.stories.js` con ejemplos de `DatePicker` y `DatePickerModal`, y de `mode`, `minimumDate`/`maximumDate`, `locale`, `theme`
- [x] 7.2 Documentar en el README: instalación de la peerDep, `pod install` y rebuild del lado del consumidor
- [x] 7.3 Documentar: patrón `toISOString()` + `timeZoneOffsetInMinutes`, limitación de theming en iOS, set válido de `minuteInterval`, comportamiento de `mode='time'` con límites y de cambio de `date` con el modal abierto

## 8. Verificación final

- [x] 8.1 Correr `npm run validate:code` (lint + tsc + tests) y dejarlo en verde
- [x] 8.2 Probar en vivo en device/emulador: render visual del picker y flujo del modal verificados, funciona correctamente
