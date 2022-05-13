import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import axios from 'axios';


const letsgopost = (user_,password_,nav) => {

  //console.log("LEtsgopost "+user+ " "+ password)

  const testconfigheaders = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      "user": user_,
      "password": password_
    }
  }


  axios.post('http://192.168.1.16:3000/login',{},testconfigheaders)
  .then((res) =>{
    console.log(res.data)
    if(res.data == "no"){
      
    }else if (res.data == "yes"){
      nav.navigation.navigate('WelcomeScreen')
    }
  })
  .catch((err) => {
    console.log(err)
  })

}

const Valid = (props) => {

  const {user,password,nav} = props

  console.log("Navigation props")
  console.log(nav)

    const Valid_ = () => {

      if(String(user) != 'undefined' && String(password) != 'undefined'){
        letsgopost(user,password,nav);
        //props.setlogin(true);
      }

    }

    return (
    <View style={styles.container}>
        <Pressable style={styles.button} onPress={Valid_}>
          <Text style={styles.text}>Valider</Text>
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
  

export default Valid;