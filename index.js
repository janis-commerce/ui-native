/* istanbul ignore file */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Storybook from './storybook';

const Component = App;
AppRegistry.registerComponent(appName, () => Component);
