import React from 'react';
import { View, StyleSheet,TouchableOpacity  } from 'react-native';
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const ButtonMainScreen = ({navigation, titleBtn,navPoint,eventName}) => (
     <View> 
        <Button buttonStyle = {styles.btn}  title = {titleBtn} titleStyle = {styles.titleBtn}  onPress={() => {
             Amplitude.logEvent(eventName)
             navigation.navigate(navPoint)
             }}  /> 
    </View>
)

const baseStyles = StyleSheet.create({
    btn: {
        backgroundColor: '#0E1B26',
        height: 80,
        width: 233,
        borderRadius: 22.41,
        marginTop:49,
        justifyContent:"center",
        alignItems: "center"
    },
   
    titleBtn: {
        color: '#F2F2F2',
        fontSize: 21,
        fontFamily: 'roboto-bold',
        fontWeight: "bold" ,
        textAlign: "center"
    }
}) 

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        btn : {
            width: 261,
            height: 90
        },
        titleBtn : {
            fontSize: 24
        }
    })
)

export default ButtonMainScreen