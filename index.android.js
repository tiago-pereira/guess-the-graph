'use strict';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import React, { Component } from 'react';
import GameApp from './src/containers/app';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <Text>
          Alo porra to mah life!
        </Text>
        <Text>
          To get started, edit index.android.js
        </Text>
        <Text>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => GameApp);

/*
import React, { Component } from 'react';






AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
*/
