import { StatusBar } from 'expo-status-bar'
import React,{useState} from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen.js'
import RegisterScreen from './src/screens/RegisterScreen.js'
import WelcomeScreen from './src/screens/WelcomeScreen.js'
import store from './src/component/redux_data.js'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

export default function App() {

  //const [SetUser, GetUser] = useState('');

  const [getPasswordConfirmed, setPasswordConfirmed] = useState('');
  const [isLogin,setLogin] = useState(false);
  const [getRegister,setRegister] = useState(false);

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
);
}

/*
 {!isLogin && !getRegister &&
            <Login 
              islogin={isLogin} 
              setlogin={setLogin} 
              getuser={getUser} 
              setuser={setUser} 
              getpassword={getPassword} 
              setpassword={setPassword}
              setregister={setRegister}
              confirmedpassword={getPasswordConfirmed}
              >
            </Login>
          }
          {isLogin && !getRegister &&
            <Welcome 
              getuser={getUser} 
              getpassword={getPassword}
            />
          }
          {!isLogin && getRegister &&

            <Register
            islogin={isLogin}
            getuser={getUser}
            setuser={setUser}
            setlogin={setLogin} 
            setpassword={setPassword}
            setregister={setRegister}
            getconfirmedpassword={getPasswordConfirmed}
            setconfirmedpassword={setPasswordConfirmed}
            getpassword={getPassword}
            >

            </Register>
          
          }

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  }
});
