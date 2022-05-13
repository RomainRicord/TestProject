import React, {useState} from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';

const image2 = require('../../assets/2984100.jpeg');

const WelcomeScreen = (props) => {

    return (
    <View style={styles.container}>
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}>
            <Text style={{fontSize:40}}>Welcome to my application !</Text>
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
  

export default WelcomeScreen;