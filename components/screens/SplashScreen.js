import React, { useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

export default function SplashScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 1000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 1000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setLoading(false);
      }
    });
  }, [moveAnim, fadeAnim]);
   if (!loading){
    navigation.navigate('Home')
   }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.View style={[styles.logoContainer, { marginLeft: moveAnim }]}>
          <Image style={styles.image} source={require('../../assets/logosplashcreen.png')} />
          <Animated.Text style={[styles.logoText, { opacity: fadeAnim }]}>
            {''}
          </Animated.Text>
        </Animated.View>

      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF9B6',
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color: '#333333',
    fontWeight: '700',
  },
  contentContainer: {
    top: '40%',
    alignItems: 'center',
  },
  image: {
    marginTop: 10,
    height: 300,
    width: 300,
    
  },
  logoContainer: {
    flexDirection: 'row',
  },
});
