## ADDED Requirements

### Requirement: Selección de fecha en variante inline (`DatePicker`)
El componente `DatePicker` SHALL renderizar una rueda de selección siempre visible y SHALL
emitir la fecha seleccionada mediante `onDateChange` cada vez que el usuario modifica la
selección. El componente NO SHALL exponer control imperativo (no aplica a inline).

#### Scenario: El usuario cambia la fecha en inline
- **WHEN** el usuario gira la rueda de un `DatePicker`
- **THEN** se dispara `onDateChange` con el `Date` seleccionado

#### Scenario: Render inline con fecha provista
- **WHEN** el `DatePicker` se renderiza con una prop `date` válida
- **THEN** la rueda se posiciona en esa fecha

#### Scenario: Render inline sin fecha seleccionada
- **WHEN** el `DatePicker` se renderiza con `date={null}`
- **THEN** la rueda se posiciona en la fecha actual
- **AND** no se dispara `onDateChange` hasta que el usuario modifica la rueda

### Requirement: Selección de fecha en variante modal (`DatePickerModal`)
El componente `DatePickerModal` SHALL presentar la rueda dentro de un diálogo con botones de
confirmación y cancelación. El componente SHALL permanecer montado en el árbol y controlar su
visibilidad mediante estado interno, sin requerir montaje condicional por parte del consumidor.

#### Scenario: Confirmar la selección en modal
- **WHEN** el modal está abierto y el usuario confirma la selección
- **THEN** se dispara `onConfirm` con el `Date` seleccionado
- **AND** el modal se cierra automáticamente

#### Scenario: Cancelar la selección en modal
- **WHEN** el modal está abierto y el usuario cancela
- **THEN** se dispara `onCancel` (si fue provisto)
- **AND** el modal se cierra sin emitir la fecha

#### Scenario: Confirmar con valor nulo sin interacción
- **WHEN** el modal se abre con `date={null}` y el usuario confirma sin modificar la rueda
- **THEN** se dispara `onConfirm` con la fecha actual (el valor mostrado)
- **AND** queda a cargo del consumidor distinguir "sin selección" manteniendo su propio estado

### Requirement: Control imperativo del modal
El componente `DatePickerModal` SHALL exponer mediante `ref` los métodos `open()` y `close()`
que mutan el estado interno de visibilidad (construido sobre la prop `open` de la librería),
de modo que el consumidor no necesite manejar el estado de apertura.

#### Scenario: Abrir el modal de forma imperativa
- **WHEN** el consumidor invoca `ref.open()`
- **THEN** el diálogo se vuelve visible

#### Scenario: Cerrar el modal de forma imperativa
- **WHEN** el consumidor invoca `ref.close()` con un modal abierto
- **THEN** el diálogo se oculta

### Requirement: Sincronización con el cierre nativo del modal
El componente `DatePickerModal` SHALL mantener su estado interno de visibilidad sincronizado
con cualquier forma de cierre, incluyendo el cierre nativo por gesto o botón "atrás", de modo
que una invocación posterior de `open()` vuelva a abrir el diálogo correctamente.

#### Scenario: Cierre nativo sin usar los botones
- **WHEN** el usuario cierra el modal por gesto o botón "atrás" sin tocar Confirmar/Cancelar
- **THEN** el estado interno de visibilidad queda en "cerrado"
- **AND** una llamada posterior a `ref.open()` reabre el diálogo

### Requirement: Theming integrado por plataforma
Los componentes SHALL exponer una prop `theme` (`'light' | 'dark' | 'auto'`, default `'auto'`)
como control de apariencia cross-platform. En Android SHALL aplicar adicionalmente el tinte de
la `palette` del repo (botones y divisores). Los componentes NO SHALL exponer props de color
crudas al consumidor. En iOS el control de apariencia se limita a `theme` (limitación de la
librería).

#### Scenario: Apariencia controlada por theme
- **WHEN** un componente se renderiza con una prop `theme`
- **THEN** el picker adopta el esquema claro/oscuro correspondiente en ambas plataformas

#### Scenario: Tinte de palette en Android
- **WHEN** un componente se renderiza en Android
- **THEN** los botones y divisores adoptan colores derivados de la `palette` del repo

### Requirement: Configuración de modo, límites y zona horaria
Los componentes SHALL aceptar las props `mode` (`'date' | 'time' | 'datetime'`, con valor por
defecto `'date'`), `minimumDate`, `maximumDate`, `locale`, `minuteInterval` y
`timeZoneOffsetInMinutes`, y SHALL devolver siempre un `Date` crudo sin formatear.

#### Scenario: Modo por defecto
- **WHEN** un componente se renderiza sin prop `mode`
- **THEN** opera en modo `'date'`

#### Scenario: Restricción de rango de fechas
- **WHEN** se proveen `minimumDate` y/o `maximumDate` válidos
- **THEN** la selección queda restringida a ese rango

#### Scenario: Rango inválido
- **WHEN** se provee `minimumDate` mayor que `maximumDate`
- **THEN** se emite un `console.warn` en entorno de desarrollo

#### Scenario: Control de zona horaria
- **WHEN** se provee `timeZoneOffsetInMinutes`
- **THEN** la fecha seleccionada se interpreta en esa zona horaria en lugar de la del dispositivo
