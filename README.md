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
