import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const AoClicar = () =>{
    alert("Voce clicou")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá mundo</Text>
      <Button title='Click aqui' color={'red'} onPress={AoClicar} ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: '50px',
    padding: '50px',
  },
});
