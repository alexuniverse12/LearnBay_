import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import ButtonMainScreen from '../components/ButtonMainScreen';
import * as Amplitude from 'expo-analytics-amplitude';

Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')

const MainScreen = ({navigation}) => {
    return (
        <View style = {styles.screen} >
            <View style = {styles.textContainer}> 
                <Text style = {styles.headerTextAbove} >LearnBay</Text>
                <Text style = {styles.headerTextUnder} >Learn By Yourself</Text>
            </View>
             
            <TouchableOpacity style = {styles.question} onPress={() => {
                 navigation.navigate('HelpScreen')
                 Amplitude.logEvent('Help Screen')
                 }}>
                <Icon
                type = 'ionicon'
                name="help-outline"
                size={35}
                color="#C4F2F2"
                />
            </TouchableOpacity>
             
            <ScrollView style = {styles.scroll} showsVerticalScrollIndicator = {false}> 
                <ButtonMainScreen titleBtn = 'Marketing' navigation={navigation} navPoint = 'MarketingSubTopicScreen' eventName = 'marketing'  />
                <ButtonMainScreen titleBtn = 'Management' navigation={navigation} navPoint = 'ManagementSubTopicScreen' eventName = 'management' />
                <ButtonMainScreen titleBtn = 'Design' navigation={navigation} navPoint = 'DesignSubTopicScreen' eventName = 'design' />
                <ButtonMainScreen titleBtn = 'Finance' navigation={navigation} navPoint = 'FinanceSubTopicScreen' eventName = 'finance' />
                <ButtonMainScreen titleBtn = 'Startup' navigation={navigation} navPoint = 'StartupTopicScreen' eventName = 'startup' />
            </ScrollView>
        </View>
    )
}  

const baseStyles = StyleSheet.create({
    screen: {
        paddingTop: 40, 
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        alignItems:"center",
        paddingBottom: 30
    },
    textContainer: {
        alignItems: "center",
        width: '100%',
        marginTop: 5
    },
    headerTextAbove: {
        color: '#0E1B26',
        fontSize: 36 ,
        fontFamily: 'montserrat-regular'   
    },
    headerTextUnder: {
        color: '#A4B0BF',
        fontSize: 15,
        fontFamily: 'roboto-regular' 
    },
    question: {
        marginTop: 50,
        width: 53,
        height: 53,
        backgroundColor : '#0E1B26',
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 50    
    
    },
    btn: {
        backgroundColor: '#0E1B26',
        height: 80,
        width: 233,
        borderRadius: 22.41,
        marginTop:44,
        justifyContent:"center",
        alignItems: "center"
    },
   
    titleBtn: {
        color: '#F2F2F2',
        fontSize: 21,
        fontFamily: 'roboto-bold',
        fontWeight: "bold" ,
        textAlign: "center"
    },
    scroll: {
       marginTop: 5

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
        },
        textContainer: {
            marginTop: 30
        },
        headerTextAbove: {
            fontSize:40
        },
        headerTextUnder: {
            fontSize:17
        },
        question: {
            width: 59,
            height: 59 
        }
    })
)

export default MainScreen