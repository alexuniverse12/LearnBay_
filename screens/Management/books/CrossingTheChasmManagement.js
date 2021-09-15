import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const CrossingTheChasmManagement = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Crossing The Chasm</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Geoffrey A. Moore</Text>
                    
                        <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'The book provides a lucid, updated account about what is involved in successfully introducing and getting mainstream acceptance of disruptive innovations in high tech related businesses'/>
                        <TextBlockBlack headerText = 'Why To Read'  mainText = 'If you want the majority of people to adopt your innovation, then this book is your choice '/>
                        
                        <ButtonAmazon eventName = 'Crossing The Chasm Management Amazon' AmazonLink = 'https://amzn.to/3iB2JwZ'/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default CrossingTheChasmManagement

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