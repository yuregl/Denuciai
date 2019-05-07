/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './src/Navigate'
//import AuthLogCad from './src/Tela/telaAuthLogCad';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
