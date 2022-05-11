import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../logo/logo.js';
import Formulaire from '../formulaire/formulaire.js';
import Valid from '../valid/valid.js';

const image2 = require('../../assets/2984100.jpeg');

const Login = (props) => {

    const [getUser,SetUser] = useState('');
    const [getPassword, SetPassword] = useState('');

    return (
    <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Logo></Logo>
        <Formulaire user={getUser} password={getPassword}/>
        <Valid/>
      </ImageBackground>
    </View>
    );
}

/*
        <Formulaire/>
        <Valid/>
*/

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