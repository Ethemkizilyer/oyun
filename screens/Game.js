import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber'
import CustomButton from '../components/CustomButton'
import {AntDesign} from "@expo/vector-icons"
import ComputerGuess from '../components/ComputerGuess'

let minNum =1
let maxNum =100
export default function Game({userNum,onGameOver}) {
  const initialGuess =generateNumber(1,100,userNum)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessCount, setGuessCount] = useState([initialGuess])

  useEffect(()=>{
    if(currentGuess === userNum){
      onGameOver(guessCount?.length)
    }
  },[currentGuess,userNum,onGameOver])
  useEffect(()=>{
    minNum =1
    maxNum =100
  },[])

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
setGuessCount((prev)=>[newRandom,...prev])
}

  return (
    <View style={styles.container}>
      <Title>Bilgisayar Tahmini</Title>
      <ComputerNumber>{currentGuess}</ComputerNumber>
      <View style={styles.card}>
        <Text style={styles.title}>Altında mı üstünde mi?</Text>
        <View style={styles.buttons}>
          <CustomButton onPress={nextGuessHandler.bind(this,"lower")}><AntDesign name="minus" size={24} color="white"/></CustomButton>
          <CustomButton onPress={nextGuessHandler.bind(this,"greater")}><AntDesign name="plus" size={24} color="white"/></CustomButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList 
        data={guessCount}
        key={(item)=>item}
        renderItem={(item,i)=><ComputerGuess roundNum={guessCount.length - item.index} guess={item.item}/>}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:30,
  },
  buttons:{
    flexDirection:"row",
  },
  card:{
    backgroundColor:"orange",
    padding:16,
    marginTop:20,
    elevation:20,
    shadowColor:"black",
    shadowOffset:{width:100,height:10},
    shadowRadius:10,
    shadowOpacity:1,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    color:"white",
    fontSize:25,
    marginBottom:15
  },
  listContainer:{
    flex:1,
  marginTop:10
}
})