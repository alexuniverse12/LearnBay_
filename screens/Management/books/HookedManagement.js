import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const HookedManagement = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Hooked</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Nir Eyal</Text>
                    
                        <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'This book introduces listeners to the "Hooked Model", a four-step process companies use to build customer habits. In short, how to influence a customer to use your products and services over and over again without relying on ads, promotions'/>
                        <TextBlockBlack headerText = 'Why To Read'  mainText = 'If you want a guide to building products people use because they want to then you should read the book'/>
                        
                        <ButtonAmazon eventName = 'Hooked Management Amazon' AmazonLink = 'https://amzn.to/3iFUPlT'/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default HookedManagement

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