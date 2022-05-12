import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../logo/logo.js';
import Formulaire from '../formulaire/formulaire.js';
import Valid from '../valid/valid.js';
import ValidRegister from '../iwantregister/iwantregister.js';
import axios from 'axios';

const image2 = require('../../assets/2984100.jpeg');

const Login = (props) => {

    return (
    <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Logo></Logo>
        <Formulaire 
        user={props.getuser} 
        password={props.getpassword} 
        setpassword={props.setpassword} 
        setuser={props.setuser}/>
        <Valid setlogin={props.setlogin} user={props.getuser} password={props.getpassword}/>
        <ValidRegister 
        setregister={props.setregister} 
        setlogin={props.setlogin} 
        islogin={props.islogin} 
        password={props.getpassword} 
        confirmedpassword={props.getconfirmedpassword}
        />
      </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
  

export default Login;