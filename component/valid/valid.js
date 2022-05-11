import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';


const Valid = (props) => {

    const Valid_ = () => {

      console.log("Validation")
      props.setlogin(true);

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