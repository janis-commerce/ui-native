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

## Usage Example

A quick example of how to import a component and start using **@janiscommerce/ui-native**:

```sh
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from '@janiscommerce/ui-native/Avatar';

function App() {
  return <Avatar size="sm" placeholder="Janis" bgColor="#2979FF" />;
}

ReactDOM.render(<App />, document.querySelector('#app'));
```
