/* istanbul ignore file */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Storybook from './storybook';
import {LOAD_STORYBOOK} from './env.json';

const Component = LOAD_STORYBOOK ? Storybook : App;

AppRegistry.registerComponent(appName, () => Component);
