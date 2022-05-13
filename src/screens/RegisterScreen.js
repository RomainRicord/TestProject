import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Logo from '../component/logo.js';
import FormulaireRegister from '../component/formulaireRegister.js';
import axios from 'axios';
import ValidRegister from '../component/iwantregister.js'
import { useSelector, useDispatch } from 'react-redux'
import { setuser } from '../features/user'
import { setpassword } from '../features/password'
import { setpasswordconfirmed } from '../features/passwordconfirmed';

const image2 = require('../../assets/2984100.jpeg');

const Register = (navigation) => {

    const user = useSelector((state) => state.user.value)
    const password = useSelector((state) => state.password.value)
    const passwordconfirmed = useSelector((state) => state.passwordconfirmed.value)

    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
        <Logo></Logo>
        <FormulaireRegister />
        <ValidRegister nav={navigation} user={user} password={password} passwordconfirmed={passwordconfirmed}/>
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