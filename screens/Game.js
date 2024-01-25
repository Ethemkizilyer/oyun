import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber'
import CustomButton from '../components/CustomButton'
let minNum =1
let maxNum =100
export default function Game({userNum,onGameOver}) {
  const initialGuess =generateNumber(1,100,userNum)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)

  useEffect(()=>{
    if(currentGuess === userNum){
      onGameOver()
    }
  },[currentGuess,userNum,onGameOver])

function generateNumber(min,max,exclude){
  const randomNum = Math.floor(Math.random() * (max-min)) + min

  if(randomNum ===exclude){
    return generateNumber(min,max,exclude)
  } else {
    return randomNum
  }
}



function nextGuessHandler(direction){

if((direction === "lower" && currentGuess < userNum) || (direction ==="greater" && currentGuess > userNum)){
  Alert.alert("Hadi Oradan!","Yanlış olduğunu Biliyorsun!...",[{text:"Tamam",style:"cancel"}])
  return 
}

if(direction === "lower"){
maxNum =currentGuess
}
else {
  minNum=currentGuess + 1
}
const newRandom =generateNumber(minNum,maxNum,currentGuess)
setCurrentGuess(newRandom)
}

  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View>
        <Text>Altında mı üstünde mi?</Text>
        <View>
          <CustomButton onPress={nextGuessHandler.bind(this,"lower")}>-</CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this,"greater")}>+</CustomButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:30,
  }
})