/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Judul from './Components/Judul';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul judul="BIODATA"/>
      <Judul judul="LOGIN"/>
      <Judul judul="FORM"/>
      <Image
      	style={{width: 200, height: 250}}
      	source={require('./foto.png')} />
        <Text style={styles.welcome}>
          Nama : Tsaqif Setyo Abdulhaqqi
        </Text>
        <Text style={styles.instructions}>
          Kelas : XI RPL 1
        </Text>
        <Text style={styles.instructions}>
          No Absen : 37
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4D4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
