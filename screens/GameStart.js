import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import Title from '../components/Title'

export default function GameStart({onPress,onSendNumber}) {
    const [number, setNumber] = useState("")
    function resetHandler() {
        setNumber("")
    }

    function confirmHandler() {
const chosen=parseInt(number)
if(isNaN(chosen) || chosen <= 0 || chosen > 99){
    Alert.alert("Geçersiz Sayı!","Sayı 1 ile 99 arasında olmalıdır",[{text:"Tamam",style:"destructive",onPress:resetHandler}])
    return
}
onSendNumber(chosen)
    }
    function numberHandler(num) {
        setNumber(num)
    }
    return (
        <View style={styles.container}>
            <Title>Sayı Tahmin Uygulaması</Title>
            <View style={styles.card}>
                <TextInput maxLength={2} value={number} onChangeText={numberHandler} keyboardType='number-pad' style={styles.input} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={resetHandler}>Temizle</CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
                    </View>


                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    card: {
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "yellow",
        width: 50,
        height: 50,
        marginVertical: 10,
        fontSize: 35,
        fontWeight: "bold",
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})