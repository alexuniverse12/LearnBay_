import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const MeasureWhatMatters = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Measure What Matters</Text>
                    <Text style = {styles.headerAuthorTextStyle}>John Doerr</Text>
                    
                        <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'Legendary venture capitalist John Doerr reveals how the goal-setting system of Objectives and Key Results (OKRs) can help any organization thrive'/>
                        <TextBlockBlack headerText = 'Why To Read'  mainText = 'In order to understand what makes Silicon Valley tick, you should read this book'/>
                        
                        <ButtonAmazon eventName = 'Measure What Matters Amazon' AmazonLink = 'https://amzn.to/32K90kz'/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default MeasureWhatMatters

const styles = StyleSheet.create({
    screen: { 
        width: '100%',
        height: '100%',
        backgroundColor: '#0E1B26',
    }, 
    container: {
        width: '90%',
        height: '100%',
        backgroundColor: '#0E1B26',
        alignSelf: "center",
        marginTop: 30,
    },
    align: {
        alignItems:"center",
        flex: 1
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10
    },
    headerTextStyle : {
        color: '#F2F2F2',
        fontFamily: 'montserrat-regular',
        fontSize: 30,
        textAlign: "center",
        marginBottom: 15
    },
    headerAuthorTextStyle: {
        color: '#F2F2F2',
        fontFamily: 'montserrat-regular',
        textAlign: "center",
        fontSize: 20,
        marginBottom: 7
    }

})