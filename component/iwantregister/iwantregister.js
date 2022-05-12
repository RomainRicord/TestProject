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


  axios.post('http://localhost:3000/register',{},testconfigheaders)
  .then((res) =>{
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })

}

const ValidRegister = (props) => {

    const Valid_ = () => {

        if (((props.password === props.passwordconfirmed) && (String(props.password).length > 0) && (String(props.passwordconfirmed).length > 0) && (String(props.user).length > 0)) && (!props.islogin)){

            letsgopost(props.user,props.password);
            props.setlogin(true)
            props.setregister(false)

            console.log(`YA2 ${props.password.length} ${String(props.password)}`)

        }else{
            console.log("YA")
            props.setregister(true);
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