import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Clipboard, Alert  } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import { ScrollView } from 'react-native-gesture-handler';



const TextBlock = ({headerText, mainText,email}) => {
    const copied = ()=> {
        Clipboard.setString(email)
        Alert.alert('Copied To Clipboard')
    }
    return (
    <View> 
        <View style = {styles.container}> 
            <Text style = {styles.header} >{headerText}</Text>
            <View style= {styles.line}>
            </View>
            <ScrollView style = {styles.textContainer}> 
            <Text style = {styles.text}  >{mainText}</Text>

            {email ? <Button   titleStyle = {styles.ttlStyle} buttonStyle = {styles.btnStyle} onPress={copied} title={email}/> : null }
            
            
            </ScrollView>
        </View> 
    </View>
    )
}
 

export default TextBlock

const baseStyles = StyleSheet.create(
    {
        container:{
            alignItems: "center",
            width: 304,
            height: 205,
            backgroundColor: '#0E1B26',
            borderRadius: 15,
            marginTop: 25
            
        },  
        header: {
            color: '#F2F2F2',
            textAlign: "center",
            fontSize: 18 ,
            fontFamily: 'montserrat-bold', 
            marginTop: 13, 
            fontWeight: 'bold'
        },
        line: {
            backgroundColor: '#C4F2F2',
            width: 70,
            height: 2,
            marginTop: 7,
            marginBottom: 10,
            alignSelf: "center"
        },
        text: {
            textAlign: "center",
            color: '#F2F2F2',
            fontSize: 16,
            lineHeight: 25
        }, 
        textContainer: {
            width: '80%',
            alignSelf: "center"
        },
        btnStyle: {
            backgroundColor: '#0E1B26',
            margin: 0,
            padding: 0
        },
        ttlStyle: {
            color:'#C4F2F2',
        }
    }
)

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        container:{
            width: 304,
            height: 246,
            marginTop: 25
        },
        text: {
            fontSize: 19,
            lineHeight: 26
        }, 
        line: {
            marginTop: 9,
            marginBottom: 12,
          
        },
        header: { 
            fontSize: 21 ,
            marginTop: 15, 
        },
    })
)