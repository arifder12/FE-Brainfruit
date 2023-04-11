import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SplashScreen from './components/screens/SplashScreen'
import HomeScreen from './components/screens/HomeScreen' 
import MateriScreenAnggur from './components/Materiscreens/MateriScreenAnggur'
import MateriScreenAlpukat from './components/Materiscreens/MateriScreenAlpukat'
import MateriScreenBeri from './components/Materiscreens/MateriScreenBeri'
import MateriScreenCeri from './components/Materiscreens/MateriScreenCeri'
import MateriScreenDelima from './components/Materiscreens/MateriScreenDelima'
import MateriScreenJeruk from './components/Materiscreens/MateriScreenJeruk'
import MateriScreenNanas from './components/Materiscreens/MateriScreenNanas'
import MateriScreenPir from './components/Materiscreens/MateriScreenPir'
import MateriScreenPisang from './components/Materiscreens/MateriScreenPisang'
import MateriScreenSemangka from './components/Materiscreens/MateriScreenSemangka'
import MateriScreenStrawberry from './components/Materiscreens/MateriScreenStrawberry'
import question from './components/Materiscreens/question'
import QuizScreenAlpukat from './components/Quizscreens/QuizScreenAlpukat'
import QuizScreenAnggur from './components/Quizscreens/QuizScreenAnggur'
import QuizScreenDelima from './components/Quizscreens/QuizScreenDelima'
import QuizScreenJeruk from './components/Quizscreens/QuizScreenJeruk'
import QuizScreenNanas from './components/Quizscreens/QuizScreenNanas'
import QuizScreenPisang from './components/Quizscreens/QuizScreenPisang'
import QuizScreenSemangka from './components/Quizscreens/QuizScreenSemangka'
import answer from './components/Quizscreens/answer'


export default function app() {
const [quizData, setQuizData] = useState(null);
  const [score, setScore] = useState(0);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [disableAnswers, setDisableAnswers] = useState(false);

  useEffect(() => {
    // Get quiz data from API
    axios
      .get('https://bb02-36-73-32-247.ngrok-free.app/api/quiz', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      })
      .then((response) => setQuizData(response.data))
      .catch((error) => console.error(error));
  }, []);
  const handleAnswer = async (selectedOption) => {
    setDisableAnswers(true);

    try {
      const response = await axios.post(
        'https://bb02-36-73-32-247.ngrok-free.app/api/jobsheet/submitOne',
        {
          quizId: quizData[questionIndex].id,
          answer: selectedOption,
        }
      ).catch((error) => console.log(error.message));

      if (response.data.message === 'Jawabanmu benar, selamat!') {
        setRight(true);
        setScore(score + 1);
      } else {
        setWrong(true);
      }
    } catch (error) {
      console.error(error);
    }

  };
  return(
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen 
        name="Splashscreen" 
        component={SplashScreen} />
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} />
        <Stack.Screen 
        name="Materialpukat" 
        component={MateriScreenAlpukat} />
      <Stack.Screen 
        name="Materianggur" 
        component={MateriScreenAnggur} />
      <Stack.Screen 
        name="Materiberi" 
        component={MateriScreenBeri} />
      <Stack.Screen 
        name="Matericeri" 
        component={MateriScreenCeri} />
      <Stack.Screen 
        name="Materidelima" 
        component={MateriScreenDelima} />
      <Stack.Screen 
        name="Materijeruk" 
        component={MateriScreenJeruk} />
      <Stack.Screen 
        name="Materinanas" 
        component={MateriScreenNanas} />
      <Stack.Screen 
        name="Materipir" 
        component={MateriScreenPir} />
      <Stack.Screen 
        name="Materipisang" 
        component={MateriScreenPisang} />
      <Stack.Screen 
        name="Materisemangka" 
        component={MateriScreenSemangka} />
      <Stack.Screen 
        name="Materistrawberry" 
        component={MateriScreenStrawberry} />
        <Stack.Screen 
        name="question" 
        component={question} />

      <Stack.Screen 
        name="Quizalpukat" 
        component={QuizScreenAlpukat} />
      <Stack.Screen 
        name="Quizanggur" 
        component={QuizScreenAnggur} />
        <Stack.Screen 
        name="Quizdelima" 
        component={QuizScreenDelima} />
        <Stack.Screen 
        name="Quizjeruk" 
        component={QuizScreenJeruk} />
        <Stack.Screen 
        name="Quiznanas" 
        component={QuizScreenNanas} />
        <Stack.Screen 
        name="Quizpisang" 
        component={QuizScreenPisang} />
        <Stack.Screen 
        name="Quizsemangka" 
        component={QuizScreenSemangka} />
        <Stack.Screen 
        name="answer" 
        component={answer} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}