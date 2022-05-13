import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import axios from 'axios';



const letsgopost = (user_,password_) => {

  //console.log("LEtsgopost "+user+ " "+ password)

  const testconfigheaders = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "user": user_,
      "password": password_
    }
  }


  axios.post('http://192.168.1.16:3000/register',{},testconfigheaders)
  .then((res) =>{
    if(res.data == "no"){
      
    }else if (res.data == "yes"){
      nav.navigation.navigate('WelcomeScreen')
    }
  })
  .catch((err) => {
    console.log(err)
  })

}

const ValidRegister = (props) => {

    const {password,passwordconfirmed,user,nav} = props

    const Valid_ = () => {

        if (((password === passwordconfirmed) && (String(password).length > 0) && (String(passwordconfirmed).length > 0) && (String(user).length > 0)) && String(password) != "undefined" && String(user) != "undefined" && String(passwordconfirmed) != "undefined"){
    
            letsgopost(user,password);
    
            console.log(`YA2 ${password.length} ${String(password)}`)
    
        }else{
            console.log("YA")
            nav.navigation.navigate('RegisterScreen')
        }
    
    }

    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={Valid_}>
          <Text style={styles.text}>S'inscrire</Text>
       </Pressable>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginTop:20
    },
    ButtonValid:{
        width:30,
        height:20,
        marginTop:40
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    }
  });
  

export default ValidRegister;