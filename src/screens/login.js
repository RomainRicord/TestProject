import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../component/logo.js';
import Formulaire from '../component/formulaire.js';
import Valid from '../component/valid.js';
import ValidRegister from '../component/iwantregister.js';
import axios from 'axios';

const image2 = require('../../assets/2984100.jpeg');

const Login = (props) => {

    const {getuser, getpassword, setpassword, setuser,setlogin,islogin,getconfirmedpassword,setregister} = props

    return (
    <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Logo></Logo>
        <Formulaire 
        user={getuser} 
        password={getpassword} 
        setpassword={setpassword} 
        setuser={setuser}/>
        <Valid setlogin={setlogin} user={getuser} password={getpassword}/>
        <ValidRegister 
        setregister={setregister} 
        setlogin={setlogin} 
        islogin={islogin} 
        password={getpassword} 
        confirmedpassword={getconfirmedpassword}
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