import {Text, View, Image, Button } from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

export default function App() {
  const [dice, setDice] = useState(1);
  const images={
    pics:{
      '1':require('./assets/dice 1.png'),
      '2':require('./assets/dice 2.png'),
      '3':require('./assets/dice 3.png'),
      '4':require('./assets/dice 4.png'),
      '5':require('./assets/dice 5.png'),
      '6':require('./assets/dice 6.png'),
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <Image source={images.pics[dice]} style={styles.image}/>
      </View>
      <Text style={styles.word}>Please press me</Text>
      <Button title='Hey! Throw the dice!' style={styles.button} onPress={()=>setDice(Math.floor(Math.random()*6))}/>
    </View>
  );
}

