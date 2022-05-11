import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native';
import Login from './component/login/login.js';
import Welcome from './component/welcome/welcome.js';

export default function App() {

  //const [SetUser, GetUser] = useState('');

  const [getUser,setUser] = useState('');
  const [getPassword, setPassword] = useState('');
  const [isLogin,setLogin] = useState(false);

  return (
    <View style={styles.container}>
      {!isLogin &&
        <Login islogin={isLogin} setlogin={setLogin} getuser={getUser} setuser={setUser} getpassword={getPassword} setpassword={setPassword}></Login>
      }
      {isLogin &&
        <Welcome getuser={getUser} getpassword={getPassword}/>
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
