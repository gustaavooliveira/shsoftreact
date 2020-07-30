import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text,  StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function App(){
  return(
    <KeyboardAvoidingView style={styles.backgroud}>
      <View style={styles.containerLogo}>
        <Image 
        source={require('./src/assets/logo.png')} 
        />
      </View>

      <View style={styles.container}>
        <TextInput style={styles.input}
        placeholder="Usuário"
        autoCorrect={false}
        onChangeText={()=>{}}
        />

        <TextInput style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=>{}}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnEntrar}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  backgroud:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3e3e3'
  },
  containerLogo:{
    flex:1,
    justifyContent:'center',
  
  },

  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: '90%',
  },

  input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color: '#222',
    fontSize: 17,
    borderRadius:7,
    padding:10,
  },

  btnSubmit:{
    backgroundColor:'#35AAFF',
    width:'90%',
    height: 45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,
  },
  btnEntrar:{
    color:'#FFF',
    fontSize:18,
  }


})