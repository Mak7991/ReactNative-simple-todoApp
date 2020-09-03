/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import Backup from './src/components/Backup'
import Todo from './Todo'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Todo);
