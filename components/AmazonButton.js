import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')


const AmazonButton = (url, eventName) => (
    <Button title = 'Amazon' titleStyle ={styles.BtnTitle}  buttonStyle = {styles.btn} onPress = {()=> {
        Amplitude.logEvent('Sprint Amazon')
        Linking.openURL('https://www.amazon.com/Jake-Knapp/dp/150112174X/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1596207971&sr=1-1') 
        }}   
    /> 
)

export default AmazonButton

const styles = StyleSheet.create({
    btn: {
        height:36,
        width: 115,
        borderRadius: 16,
        backgroundColor: '#F2F2F2',
        alignSelf:"center",
        padding: 0,
        marginTop: 10,
        marginBottom: 30
    },
    BtnTitle: {
        color: '#0E1B26',
        textAlign: "center",  
        fontSize: 18
    }
})