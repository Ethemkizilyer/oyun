import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import CustomButton from '../components/CustomButton'

export default function GameOver({roundsNum,userNum,newGame}) {
  return (
    <View style={styles.container}>
      <Title>Oyun Tamamlandı!</Title>
      <View style={styles.imageView} >
        <Image style={styles.image} source={require("../assets/success.jpg")}/>
      </View>
      <Text  style={styles.result}>
      <Text style={styles.count}>{roundsNum}</Text> denemeyle 
      <Text style={styles.count}> {userNum}</Text> sayısını buldun.</Text>
      <CustomButton onPress={newGame}>Yeni Oyuna Başla</CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  imageView:{
    width:350,
    height:350,
    overflow:"hidden",
    borderRadius:175,
    borderWidth:3,
    borderColor:"red",
    margin:30,
  },
  image:{
    width:"100%",
    height:"100%"
  },
  result:{
    fontSize:20,
    textAlign:"center",
marginBottom:20
  },
  count:{
    color:"red"
  }
})