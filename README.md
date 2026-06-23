# @janiscommerce/ui-native

![janis-logo](brand-logo.png)

Library components for Janis Apps

[![Coverage Status](https://github.com/janis-commerce/ui-native/actions/workflows/coverage-status.yml/badge.svg)](https://github.com/janis-commerce/ui-native/actions/workflows/coverage-status.yml)
[![npm version](https://badge.fury.io/js/%40janiscommerce%2Fui-native.svg)](https://badge.fury.io/js/%40janiscommerce%2Fui-native)

## Installation

The minimum required versions for using the package are **react: 17.0.2** and **react-native: 0.67.5**.

```sh
npm install @janiscommerce/ui-native
```

## Icons Installation

You will need to add the following lines in the **android/app/build.gradle** file:

```sh
  android {
    ...
    sourceSets {
      main {
        assets.srcDirs += [
          'src/main/assets',
          '../../node_modules/@janiscommerce/ui-native/dist/android/app/src/main/assets'
        ]
      }
    }
  }
```

## SwipeUp component installation

You will need to have the following dependencies pre-installed:

- **"react-native-reanimated@2.17.0"**
- **"react-native-gesture-handler@2.9.0"**

### Step 1 - Install peer dependencies

```sh
 npm i react-native-reanimated@2.17.0 react-native-gesture-handler@2.9.0
```

- gesture-handler will allow you to recognize the actions performed by the user.

- reanimated is responsible for displaying the animations in the bottom drawer.

### Step 2 - Add Reanimated's babel plugin

- Add `react-native-reanimated/plugin` plugin to your `babel.config.js`.

```js
 module.exports = {
    presets: [
      ... // don't add it here :)
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin', // <= add it here :D
    ],
  };
```

**IMPORTANT:** react-native-reanimated/plugin **has to be listed last**.

## DatePicker component installation

The `DatePicker` and `DatePickerModal` components wrap [`react-native-date-picker`](https://github.com/henninghall/react-native-date-picker), a native module. The consuming app must install it as a peer dependency.

### Step 1 - Install the peer dependency

```sh
 npm i react-native-date-picker
```

### Step 2 - Install pods (iOS) and rebuild

```sh
 cd ios && pod install && cd ..
```

Then rebuild the native binary (`npx react-native run-android` / `run-ios`). A JS reload is not enough because it is a native module.

### Usage

```js
import React, {useRef, useState} from 'react';
import {DatePicker, DatePickerModal} from '@janiscommerce/ui-native';

// Inline: the wheel is always visible, emits on every change
const Inline = () => {
	const [date, setDate] = useState(new Date());
	return <DatePicker date={date} mode="date" onDateChange={setDate} />;
};

// Modal: opened imperatively via ref, no need to manage visibility state
const Modal = () => {
	const ref = useRef(null);
	const [date, setDate] = useState(null);
	return (
		<>
			<Pressable onPress={() => ref.current.open()}>
				<Text>{date ? date.toISOString() : 'Select date'}</Text>
			</Pressable>
			<DatePickerModal ref={ref} date={date} onConfirm={setDate} />
		</>
	);
};
```

### Notes

- **Value & backend (ISO 8601):** both components return a raw `Date`. To send it to the backend use `date.toISOString()` (UTC). Beware of the off-by-one-day shift: if you only care about the calendar date, pass `timeZoneOffsetInMinutes={0}` so "what the user picks is what gets sent".
- **Theming:** `theme` (`'light' | 'dark' | 'auto'`, default `'auto'`) is the only cross-platform appearance control. On **Android** the Janis palette tint is applied to buttons and dividers; on **iOS** only `theme` applies (library limitation).
- **`date={null}`:** the wheel starts at "today" without emitting changes until the user interacts (inline) or confirms (modal). Confirming always emits the displayed value; distinguishing "no selection" is up to the consumer (keep your own `null` state until the first `onConfirm`).
- **`mode='time'` with `minimumDate`/`maximumDate`:** the library compares only the time portion, which can behave unexpectedly across different dates.
- **`minuteInterval`:** valid values are `1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30`.
- **Changing `date` while the modal is open:** the library reacts to the `date` prop and repositions the wheel.
- **Web / Storybook web:** `react-native-date-picker` is a native-only module (no `react-native-web` implementation), so the component does not render in the web Storybook. Preview it in the on-device Storybook (Android/iOS).

## Usage Example

A quick example of how to import a component and start using **@janiscommerce/ui-native**:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Avatar} from '@janiscommerce/ui-native';

function App() {
	return <Avatar size="sm" placeholder="Janis" bgColor="#2979FF" />;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

[Documentation](https://janis-commerce.github.io/ui-native)
