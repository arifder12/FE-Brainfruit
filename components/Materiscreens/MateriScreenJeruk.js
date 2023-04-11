import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';




export default function MateriScreenAlpukat ({ navigation }) {
  return (
    <View style={styles.container}>
      <View >
      
         <Image
            source={require('../../assets/materi/MateriJeruk.png')}
            style={{ width: 500, height: 400, marginBottom: 10, marginTop: 120, resizeMode:'contain'}}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonTenseStyle}
          activeOpacity={0.5}  onPress={() => navigation.navigate('Materidelima')}>
          <Image
            source={require('../../assets/button/buttonkiri.png')}
            style={{ width: 50, height: 100, marginBottom: 10, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonTenseStyle}
          activeOpacity={0.5}  onPress={() => navigation.navigate('Materinanas')}>
          <Image
            source={require('../../assets/button/buttonkanan.png')}
            style={{ width: 50, height: 100, marginBottom: 10, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        
         
    </View>
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#FFF9B6',
    flexDirection: "row",
    flexWrap: "wrap",
  },
  
  image: {
    marginTop: 20,
    height: 300,
    width: 200,
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

