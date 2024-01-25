import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({ children, onPress }) {
  return (
    <View style={styles.container}>
          <Pressable style={({ pressed }) => pressed ? [styles.inner, styles.pressed] : styles.inner } onPress={onPress}>
              <Text style={styles.text}>{children}</Text>  
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:5
    },
    inner:{
        paddingVertical:8,
        paddingHorizontal:16
    },
    text:{
        textAlign:"center",
        color:"white",
        fontSize:20
    },
    pressed:{
        opacity:0.5
    }
})