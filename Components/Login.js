import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  render() {
    return (
    	<View style={styles.container}>
    	<Image 	
    	style={{width:100,height:100}}
    	source={require('./facebook.png')} />
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Ponsel atau Email"
    	/>
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Kata Sandi"
    	secureTextEntry={true}
    	/>
    	<TouchableOpacity style={styles.button}>
    	<Text style={styles.buttonText}> LOGIN </Text>
    	</TouchableOpacity>
		
    	<TouchableOpacity>
    	<Text>Lupas Password?</Text>
    	</TouchableOpacity>
    	</View>    	
    );
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#D4D4'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
		color: '#000000'
	},

	button:{
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#3B5998',
		marginVertical: 10,
		paddingHorizontal: 80
	},

	buttonText:{
		fontSize:13,
		color:'#f7f7f7'
	}
})