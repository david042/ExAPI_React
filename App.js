import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CEP from './components/CEP';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.texto}> Digite seu CEP </Text>
        
        <TextInput
          style={styles.input}
          placeholder='11730-000'
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}> Buscar </Text>
        </TouchableOpacity>

        <CEP/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 30,
    alignSelf: 'center'
  },
  botao:{
    width: '50%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: '#000',
    marginBottom: 10,
    textAlign: 'center'
  },
  textoBotao:{
    color: '#fff',
    fontSize: 30
  },
  input:{
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    fontSize: 30,
    borderRadius: 6,
    backgroundColor: '#000',
    color: '#fff',
    marginTop: 10,
    marginBottom: 10
  }
});
