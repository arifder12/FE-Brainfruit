import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';

export default function QuestionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View> 
         <Image style={styles.image} source={require('../../assets/font/question1.png')} />
        </View>
        <TouchableOpacity
          style={styles.buttonTenseStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Quizalpukat')}>
          <Image
            source={require('../../assets/button/YES.png')}
            style={{ width: 300, height: 50, marginBottom: 10, resizeMode:'contain', marginTop: 50}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTenseStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Materialpukat')}>
          <Image
            source={require('../../assets/button/NO.png')}
            style={{ width: 300, height: 50, marginBottom: 10, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        
        <Image  source={require('../../assets/gambarbawah.png')} 
        style={{ width: '100%', height:200, marginTop: 138}}/>  
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#FFF9B6',
  },
  image: {
    marginTop: 248,
  }
});
