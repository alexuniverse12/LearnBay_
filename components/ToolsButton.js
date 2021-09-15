import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import * as Amplitude from 'expo-analytics-amplitude';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import Firebase from '../config/Firebase';

const ToolsButton = ({navigation,eventName,navPoint, btnName}) => {
    return (    
    <Button title = {btnName} titleStyle = {styles.btnTitle} buttonStyle ={styles.btn}  onPress = {()=>  { 
        
        if (btnName === 'Log Out') {
            Firebase.auth().signOut().then(() => console.log('User signed out!'))
            console.log('logout')
            Amplitude.logEvent(eventName)
        } else if(btnName === 'Favorites') {
            Amplitude.logEvent(eventName)
            navigation.navigate(navPoint)
            console.log('to favorites')
        }

        }} 
    /> 

    )
}

const baseStyles = StyleSheet.create({
    btnTitle: {
        textAlign: "center",
        color: '#f2f2f2',
        fontSize: 24,
        padding: 0,
        margin: 0,
        fontFamily: 'roboto-regular',
        
    },
    btn: {
        marginBottom: 20,
        width: '100%',
        height: 47,
        backgroundColor: '#0E1B26',
        borderRadius: 10,
        padding: 0
    }
  }) 
  
  const styles = createStyles(
    baseStyles, 
  
    minHeight(700, {

    })
  )

export default ToolsButton