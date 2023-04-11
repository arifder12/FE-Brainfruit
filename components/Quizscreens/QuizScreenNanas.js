import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function QuizScreenNanas ({ navigation }) {
  const [score, setScore] = useState(0);
  const [right, setRight] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [quiz, setquiz] = useState([]);
  const [answer,setAnswer] = useState('');

  const fetchquizdata = async () => {
    const response = await axios.get(`https://bb02-36-73-32-247.ngrok-free.app/api/quiz/7`);

    setquiz(response.data)
    console.log(quiz)
  }

  useEffect( () => { fetchquizdata() }, [] );


  const wrongAnswer = () => {
    console.log('Jawaban Salah');
    
    setWrong(true);
  };
  return (
    <View style={styles.container}>
      <View >
      
         <Image
            source={require('../../assets/quiz/quiznanas.png')}
            style={{width: 300, height: 250, marginBottom: 5, marginTop: 150,  resizeMode:'contain'}}
          />
        </View>
        <TouchableOpacity onPress={wrongAnswer}>
          <Image
            source={require('../../assets/button/quiz/buttonquizorange.png')}
            style={{ width: 110, height: 100, marginTop: 5, marginRight: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={wrongAnswer}>
          <Image
            source={require('../../assets/button/quiz/buttonquizpomegranate.png')}
            style={{ width: 110, height: 100, marginTop: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={wrongAnswer}>
          <Image
            source={require('../../assets/button/quiz/buttonquizcherry.png')}
            style={{ width: 110, height: 100, marginBottom: 100, marginRight: 5, resizeMode:'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={
          ()=>{
            setAnswer(quiz.d)
            if(answer === quiz.key) {
              console.log('Jawaban Benar');
              setRight(true);
              navigation.navigate('Quizpisang')
            }
            
          }
        }>
          <Image
            source={require('../../assets/button/quiz/buttonquizpinapple.png')}
            style={{ width: 110, height: 100, marginBottom: 100, resizeMode:'contain'}}
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
  }
});

