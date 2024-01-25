import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import GameStart from './screens/GameStart';
import Game from './screens/Game';
import GameOver from './screens/GameOver';
import {LinearGradient} from "expo-linear-gradient"
import { useState } from 'react';

export default function App() {
  const [userNum,setUserNum]=useState(null)
  const [gameOver,setGameOver]=useState(true)
  const [guessNum,setGuessNum]=useState(0)

function onSendNumber(number){
  setUserNum(number)
  setGameOver(false)
}
function onGameOver(guessCount){
  setGameOver(true)
  setGuessNum(guessCount)
}
function newGame(){
setUserNum(null)
setGuessNum(0)
}

let screen=<GameStart onSendNumber={onSendNumber}/>

if(userNum){
  screen = (
    <Game userNum={userNum} onGameOver={onGameOver}/>
  )
}

if(gameOver && userNum) {
  screen = <GameOver roundsNum={guessNum} userNum={userNum} newGame={newGame}/>
}

  return (
    <LinearGradient style={styles.container} colors={["rgba(0,0,0,0.8)","transparent"]}> 
      <ImageBackground style={[styles.container]} source={require("./assets/back.jpg")} imageStyle={styles.backImage}>
  {screen}
  </ImageBackground>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backImage:{
    opacity:0.2,
  }
});
