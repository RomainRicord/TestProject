import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

const FormulaireRegister = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.TextFormu}>Nom d'utilisateur: </Text>
        <TextInput onChangeText={(e) => {props.setuser(e)}} style={styles.TextUser} placeholder="Nom d'utilisateur" />
        <Text style={styles.TextFormu}>Mot de Passe: </Text>
        <TextInput onChangeText={(e) => {props.setpassword(e)}} style={styles.TextUser} autoComplete="password" secureTextEntry={true} placeholder="Mot de passe" />
        <Text style={styles.TextFormu}>Confirmation du mot de passe: </Text>
        <TextInput onChangeText={(e) => {props.setconfirmedpassword(e)}} style={styles.TextUser} autoComplete="password" secureTextEntry={true} placeholder="Mot de passe" />
        {props.getconfirmedpassword != props.password && String(props.getconfirmedpassword).length > 0 &&
            <Text style={{fontSize:20,color:'red'}}>
                Le mot de passe confirmé ne correspond pas au mot de passe
            </Text>
        }
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        paddingRight:40,
        paddingLeft:40,
        borderRadius:10,
    },
    TextFormu: {
      paddingRight:40,
      paddingLeft:40,
      display:'flex',
      textAlign:'center',
      color:'#fff',
      fontSize:24,
      justifyContent:'center',
      alignItems:'center',
      marginTop:20
    },
    TextUser: {
        width:200,
        height:40,
        textAlign:'center',
        color:'#fff',
        backgroundColor:'rgb(32,32,32)',
        shadowColor: '#000',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10
    }
});

export default FormulaireRegister;