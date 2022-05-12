import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../logo/logo.js';
import FormulaireRegister from '../formulaireRegister/formulaireRegister.js';
import axios from 'axios';
import ValidRegister from '../iwantregister/iwantregister.js'

const image2 = require('../../assets/2984100.jpeg');

const Register = (props) => {

    return (
    <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Logo></Logo>
        <FormulaireRegister 
        user={props.getuser} 
        password={props.getpassword}
        setpassword={props.setpassword}
        setuser={props.setuser}
        setconfirmedpassword={props.setconfirmedpassword}
        getconfirmedpassword={props.getconfirmedpassword}
        />
        <ValidRegister setregister={props.setregister} user={props.getuser} password={props.getpassword} passwordconfirmed={props.getconfirmedpassword} setlogin={props.setlogin} islogin={props.islogin}/>
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
  

export default Register;