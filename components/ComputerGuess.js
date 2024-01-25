import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerGuess({roundNum,guess}) {
  return (
    <View  style={styles.list}>
      <Text>{roundNum}*</Text>
      <Text>{guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderColor:"yellow",
        borderWidth:1,
        borderRadius:30,
        marginVertical:10,
        padding:15,
        elevation:4,
        shadowColor:"white",
        shadowOffset:{width:2,height:5},
        shadowRadius:4,
        shadowOpacity:0.25,
    }
})