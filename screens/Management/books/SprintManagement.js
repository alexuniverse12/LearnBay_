import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const SprintManagement = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Sprint</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Jake Knapp</Text>
                    
                        <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'The author will teach you how to move from an idea of your product to a prototype within five days'/>
                        <TextBlockBlack headerText = 'Why To Read'  mainText = 'If you want a practical guide to answering critical questions for your business, then you should read this book'/>
                        
                        <ButtonAmazon eventName = 'SprintManagement Amazon' AmazonLink = 'https://amzn.to/3hHmZLY'/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default SprintManagement

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