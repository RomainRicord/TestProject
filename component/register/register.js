import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../logo/logo.js';
import FormulaireRegister from '../formulaireRegister/formulaireRegister.js';
import axios from 'axios';
import ValidRegister from '../iwantregister/iwantregister.js'

const image2 = require('../../assets/2984100.jpeg');

const Register = (props) => {

    const {getuser,setuser,getpassword,setpassword,setconfirmedpassword,getconfirmedpassword,setregister,setlogin,islogin} = props
    
    return (
        <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Logo></Logo>
        <FormulaireRegister 
        user={getuser} 
        password={getpassword}
        setpassword={setpassword}
        setuser={setuser}
        setconfirmedpassword={setconfirmedpassword}
        getconfirmedpassword={getconfirmedpassword}
        />
        <ValidRegister setregister={setregister} user={getuser} password={getpassword} passwordconfirmed={getconfirmedpassword} setlogin={setlogin} islogin={islogin}/>
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