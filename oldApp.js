import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [n1, setN1] = useState();
  const [n2, setN2] = useState();
  const [n3, setN3] = useState();
  const [n4, setN4] = useState();
  const [resultado, setResultado] = useState();

  const calcularMedia = () => {
    setResultado((parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)) / 4);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Média</Text>
      
      <TextInput style={styles.input} placeholder='Digite o 1º número' keyboardType={'numeric'} onChangeText={number => setN1(number)}></TextInput>
     
      <TextInput style={styles.input} placeholder='Digite 2º número' keyboardType={'numeric'} onChangeText={number => setN2(number)}></TextInput>
      
      <TextInput style={styles.input} placeholder='Digite 3º número' keyboardType={'numeric'} onChangeText={number => setN3(number)}></TextInput>
      
      <TextInput style={styles.input} placeholder='Digite 4º número' keyboardType={'numeric'} onChangeText={number => setN4(number)}></TextInput>
      
      <TouchableOpacity style={styles.botao} onPress={calcularMedia}>
        <Text style={styles.texto}>Calcular</Text>
      
      </TouchableOpacity>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efffe7'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: '80%',
    paddingLeft: 10,
    margin: 15,
    fontSize: 18,
    color: 'grey',
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#40a113',
    height: 50,
    margin: 15,
    borderRadius: 10
  },
  texto: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#133305',
  },
  resultado: {
    fontSize: 26,
    fontWeight: '600',
  }
});
