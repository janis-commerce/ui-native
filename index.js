/* istanbul ignore file */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Storybook from './storybook';
import Config from 'react-native-config';

const Component = Config.LOAD_STORYBOOK === 'true' ? Storybook : App;

AppRegistry.registerComponent(appName, () => Component);
