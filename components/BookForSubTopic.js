import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const BookForSubTopic = ({navigation,text, navPoint, eventName}) => {
    return (
        <Button buttonStyle = {styles.btn}  title = {text} titleStyle = {styles.titleBtn} onPress={() => { 
            navigation.navigate(navPoint)
            Amplitude.logEvent(eventName)
            }} /> 
    )
}


const baseStyles = StyleSheet.create({
    btn: {
        backgroundColor: '#0E1B26',
        height: 66,
        width: 265,
        borderRadius: 12.64,
        marginTop:49,
        justifyContent: "center",
        alignItems: "center"
    },
    titleBtn: {
        color: '#F2F2F2',
        fontSize: 21,
        fontFamily: 'roboto-regular',
        fontWeight: "bold"
    },
  
})   

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        btn : {
            width: 297,
            height: 74
        },
        titleBtn : {
            fontSize: 24
        },
        textContainer: {
        
        },
        headerTextAbove: {
            fontSize:40
        },
        headerTextUnder: {
            fontSize:17
        },
        
    })
)

export default BookForSubTopic
