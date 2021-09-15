import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';

const BannerMarginWidth = Dimensions.get('window').width*0.075;
const BLockWidth = Dimensions.get('window').width*0.85;

const TextBlockBlack = ({headerText, mainText}) => (
    <View > 
        <View style = {styles.container}> 
            <Text style = {styles.header} >{headerText}</Text>
            <View style= {styles.line}>
            </View>
            <ScrollView style = {styles.textContainer} showsVerticalScrollIndicator = {true}> 
            <Text style = {styles.text}  >{mainText}</Text>
            </ScrollView>
        </View> 
    </View>
) 

// тут Другой margin у блока и линии

const baseStyles = StyleSheet.create(
    {
        container:{
            alignItems: "center",
            width: BLockWidth,
            height: 205,
            backgroundColor: '#F2F2F2',
            borderRadius: 15,
            marginTop: 25,
            marginBottom: 15,
            marginHorizontal: BannerMarginWidth
            
        },  
        header: {
            color: '#0E1B26',
            textAlign: "center",
            fontSize: 18 ,
            fontFamily: 'montserrat-bold', 
            marginTop: 13, 
            fontWeight: 'bold'
        },
        line: {
            backgroundColor: '#A4B0BF',
            width: 70,
            height: 2,
            marginTop: 7,
            marginBottom: 10,
            alignSelf: "center"
        },
        text: {
            textAlign: "center",
            color: '#0E1B26',
            fontSize: 16,
            lineHeight: 20
        }, 
        textContainer: {
            width: '85%',
            alignSelf: "center",
            marginBottom: 3
        }
    }
)

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        container:{
            width: BLockWidth,
            height: 246,
            marginTop: 25
            
        },
        text: {
            fontSize: 18,
            lineHeight: 22,
        }, 
        line: {
            marginTop: 9,
            marginBottom: 15,
          
        },
        header: { 
            fontSize: 21 ,
            marginTop: 15, 
        },
    })
)

export default TextBlockBlack