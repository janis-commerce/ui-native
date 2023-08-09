/* istanbul ignore file */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Storybook from './storybook';
import Container from './src/components/LoadingFullScreen/Container';

const Component = __DEV__ ? Storybook : App;
// const Component = Container;
AppRegistry.registerComponent(appName, () => Component);
