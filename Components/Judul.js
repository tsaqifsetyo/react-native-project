import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component {
	render(){
		return(
			<Text style={stylee.judul}>BIODATA</Text>
			)
}

}
const stylee = {
	judul:{
		color:'#F00',
		fontSize: 50,
		fontWeight:'bold',	
		backgroundColor: '#0F0',

	}
}