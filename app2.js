import { Alert, StatusBar, TouchableOpacity, YellowBox } from 'react-native'
import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Text, Button, Linking, } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/splash.png')} style={styles.backgroundImage}/>
        <View style={styles.textback}>
          <Text style={[styles.üyegirişi]}>Üye Girişi</Text>
          <TextInput style={styles.input} placeholder='E-posta adresi' placeholderTextColor='#464646'></TextInput>
          <TextInput style={styles.input} placeholder='Parola' placeholderTextColor='#464646'></TextInput>
          <TouchableOpacity onPress={()=> alert('Lütfen Bilgilerinizi Giriniz')}>
            <View style={styles.buttonStyle}>
              <Text style={styles.text}>Oturum Aç</Text>
            </View>
            </TouchableOpacity>

            <View>
              <TouchableOpacity onPress={()=>{Linking.openURL("https://www.twitter.com");}}>
                  <Text style={styles.forgotpassword}>Şifremi Unuttum</Text>
              </TouchableOpacity>
            </View>



          <TouchableOpacity onPress={()=> alert('Üye olmak ister misiniz?')}>
            <View style={styles.buttonstyle2}>
              <Text style={styles.text2}>Misafir Girişi</Text>
            </View>
          </TouchableOpacity>

           
          <TouchableOpacity>
            <View style={styles.googlebutton}>
              <Text style={styles.google}>Google hesabı ile giriş yap</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.facebookbutton}>
              <Text style={styles.facebook}>Facebook hesabı ile giriş yap</Text>
            </View>
          </TouchableOpacity>
        
         </View>
         <TouchableOpacity onPress={()=>{Linking.openURL("https://www.facebook.com");}}>
             <Text style={styles.kayıtol}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue',
    flex: 1
  
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    zIndex: -1,
    position: 'absolute'
    
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 10,
    margin: 8,
    width: 300

  },

  textback: { 
    margin: 40,
    padding: 80,
    backgroundColor: 'white',

  },

  üyegirişi: {
    top: 0,
    color: '#464646',
    fontWeight: 'bold',
    fontSize: 23,
    textAlign: 'center'

  },

  buttonStyle: {
    borderWidth: 0.5,
    borderColor: '#464646',
    padding: 10,
    margin: 7,
    width: 200,
    borderRadius: 10,
    width: 300 

  },

  text: {
    textAlign: 'center',
    color: '#464646',
    fontWeight: 'bold',
    fontSize: 15,

  },
  
  buttonstyle2: {
    borderWidth: 0.5,
    borderColor: '#464646',
    padding: 10,
    margin: 7,
    width: 200,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#464646',

  },

  text2: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,

  },

  googlebutton: {
    borderWidth: 0.5,
    borderColor: '#C10A07',
    padding: 10,
    margin: 7,
    width: 200,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#C10A07',

  },

  google: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,

  },

  facebookbutton: {
    borderWidth: 0.5,
    borderColor: '#284D89',
    padding: 10,
    margin: 7,
    width: 200,
    borderRadius: 10,
    width: 300,
    backgroundColor: '#284D89',

  },

  facebook: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 15,
  },

  kayıtol: {
    color: '#FFFFFF',
    fontSize: 18,
    textDecorationLine: 'underline'
  },

  forgotpassword:{
    textAlign:"right",
    textDecorationLine: 'none',
    textDecorationColor: '#464646',
    padding: 5
  },


 

});


  

   
    
      