import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const Inspired = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Inspired</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Marty Cagan</Text>
                    
                        <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'Marty Cagan provides a master class in how to structure and staff a vibrant and successful product organization and how to discover and deliver technology products that your customers will love'/>
                        <TextBlockBlack headerText = 'Why To Read'  mainText = 'This book will be useful for you, if you want to design, develop, and deploy the products that have earned the love of literally billions of people around the world'/>
                        
                        <ButtonAmazon eventName = 'Inspired Amazon' AmazonLink = 'https://amzn.to/3mD29RC'/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default Inspired

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