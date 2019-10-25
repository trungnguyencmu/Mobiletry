// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import App from './App';

import { Navigation } from "react-native-navigation";
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});