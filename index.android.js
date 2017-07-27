import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BoldAndBeautiful from './nativeApp/SecondPage';
//import BoldAndBeautiful from './nativeApp/CardTile';
export default class T1 extends Component {
  render(){
    return(
      <BoldAndBeautiful/>
    )
  }
}

AppRegistry.registerComponent('T1', () => T1);
