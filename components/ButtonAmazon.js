import React from 'react';
import { View, StyleSheet, Linking, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const BtnWidth = Dimensions.get('window').width*0.85

const ButtonAmazon = ({eventName,AmazonLink}) => {
    return (    
    <Button title = 'Amazon' titleStyle ={styles.BtnTitle}  buttonStyle = {styles.btn} onPress = {()=>  { 
        Amplitude.logEvent(eventName)
        Linking.openURL(AmazonLink)
        }} 
    /> 

    )
}

export default ButtonAmazon

const styles = StyleSheet.create({

    btn: {
        height:44,
        width: BtnWidth,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
        alignSelf:"center",
        padding: 0,
        marginTop: 20,
        marginBottom: 30
    },
    BtnTitle: {
        color: '#0E1B26',
        textAlign: "center",
        fontWeight: 'bold',  
        fontSize: 22
    }
})