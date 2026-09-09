import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [valorEtanol, setValorEtanol] = useState();
  const [valorGasolina, setValorGasolina] = useState();
  const [mensagem, setMensagem] = useState();

  const calcular = () => {
    const calculo = parseFloat(valorEtanol) / parseFloat(valorGasolina);
    if(calculo <= 0.70){
        setMensagem('O Etanol está valendo mais apena.')
    }else{
        setMensagem('A Gasolina está valendo mais apena.')
    }
  }
//TO DO: adicionar imagem
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de Combustivel</Text>
      
      <TextInput style={styles.input} placeholder='Digite o valor do etanol.' keyboardType={'numeric'} onChangeText={number => setValorEtanol(number)}></TextInput>
     
      <TextInput style={styles.input} placeholder='Digite o valor da gasolina.' keyboardType={'numeric'} onChangeText={number => setValorGasolina(number)}></TextInput>
      
      <TouchableOpacity style={styles.botao} onPress={calcular}>
        <Text style={styles.texto}>Calcular</Text>      
      </TouchableOpacity>
    
      <Text style={styles.resultado}>Valor Etanol:{valorEtanol}</Text>
      <Text style={styles.resultado}>Valor Gasolina: {valorGasolina}</Text>
      <Text style={styles.resultado}>{mensagem}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffde5'
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
    backgroundColor: '#f3af30',
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
    color: '#1a1a1a',
    margin: 20,
    textAlign: 'center'
  },
  resultado: {
    fontSize: 26,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center'
  }
});
