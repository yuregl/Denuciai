/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navigator from './src/Navigate'
import Ocorrencia from './src/Tela/Ocorrencia'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Ocorrencia);
