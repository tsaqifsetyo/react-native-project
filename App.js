import React, { Component } from 'react';
import Judul from './Components/Judul';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
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
  <View style={styles.container} >
  <Judul judul ="BIODATA"/>
  <Judul judul ="LOGIN"/>
  <Judul judul ="FORM"/>
    <Text style={styles.welcome}>
     Nama = Tsaqif Setyo Abdulhaqqi
    </Text>
    <Text style={styles.welcome}>
     Kelas = XI RPL 1 
    </Text>
    <Text style={styles.welcome}>
     No Absen = 37
    </Text>
    <Image
      style={{width: 250, height: 250}}
      source={require('./aa.jpg')}
      />
  </View>
	
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 18,
    textAlign: 'left',
	color: 'purple',
    margin: 1,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});