import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import Login from './component/login/login.js';
import Register from './component/register/register.js'
import Welcome from './component/welcome/welcome.js';

export default function App() {

  //const [SetUser, GetUser] = useState('');

  const [getUser,setUser] = useState('');
  const [getPassword, setPassword] = useState('');
  const [getPasswordConfirmed, setPasswordConfirmed] = useState('');
  const [isLogin,setLogin] = useState(false);
  const [getRegister,setRegister] = useState(false);

  return (
    <View style={styles.container}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
  }
});
