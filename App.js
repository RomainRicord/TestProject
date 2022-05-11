import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Login from './component/login/login.js';

export default function App() {

  //const [SetUser, GetUser] = useState('');

  return (
    <View style={styles.container}>
      <Login></Login>
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
