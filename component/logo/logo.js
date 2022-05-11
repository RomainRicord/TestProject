import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//import style from './logo.css';

const Logo = (props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.textLogo}>Logo</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width:200,
    height:200,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  textLogo: {
    display:'flex',
    textAlign:'center',
    color:'#fff',
    fontSize:24,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Logo;