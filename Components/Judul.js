import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component {
	render(){
		return(
			<Text style={stylee.judul}>{this.props.judul}</Text>
			)
}

}
const stylee = {
	judul:{
		color:'#FFFF',
		fontSize: 50,	
		fontWeight:'bold',	
		backgroundColor: '#0F0',

	}
}