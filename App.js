import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [valorEtanol, setValorEtanol] = useState('0');
  const [valorGasolina, setValorGasolina] = useState('0');
  const [mensagem, setMensagem] = useState('');
  const [imagem, setImagem] = useState(null);

  const calcular = () => {
    if (valorEtanol <= 0 || valorGasolina <= 0) {
      setMensagem('Digite um valor válido.');
      return;
    }

    const calculo = parseFloat(valorEtanol) / parseFloat(valorGasolina);

    if (calculo <= 0.70) {
      setMensagem('Etanol está valendo mais apena.');
      setImagem(require('./assets/images/etanol.png'));
    } else {
      setMensagem('Gasolina está valendo mais apena.');
      setImagem(require('./assets/images/gasolina.png'));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Qual combustivel está valendo mais apena? 🤔</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Valor do Etanol:</Text>
        <TextInput style={styles.input} placeholder='Ex: 3.99' keyboardType={'numeric'} onChangeText={number => setValorEtanol(number)}></TextInput>

        <Text style={styles.label}>Valor da Gasolina:</Text>
        <TextInput style={styles.input} placeholder='Ex: 7.89' keyboardType={'numeric'} onChangeText={number => setValorGasolina(number)}></TextInput>

        <TouchableOpacity style={styles.botao} onPress={calcular}>
          <Text style={styles.texto}>Calcular</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.valores}>
          <Text style={[styles.resultado, styles.etanol]}>Etanol: R$ {valorEtanol}</Text>
          <Text style={[styles.resultado, styles.gasolina]}>Gasolina: R$ {valorGasolina}</Text>
        </View>

        <Text style={styles.resultado}>{mensagem}</Text>
        
        {imagem && <Image style={styles.imagem} source={imagem} />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: 'center'
  },
  form: {
    marginHorizontal: 20,
    marginVertical: 25
  },
  valores: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: '100%',
    paddingLeft: 10,
    fontSize: 18,
    color: 'grey',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 20,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#091840',
    height: 50,
    borderRadius: 10
  },
  texto: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center'
  },
  resultado: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 15
  },
  imagem: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '500'
  },
  etanol: {
    color: '#125408'
  },
  gasolina: {
    color: '#670d0d'
  }
});
