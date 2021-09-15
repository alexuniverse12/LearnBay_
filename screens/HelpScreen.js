import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import TextBlock from '../components/TextBlock';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';



const HelpScreen = ({navigation}) => {
    return (
        <View style = {styles.screen}> 

            <View style = {styles.textContainer}> 
                <Text style = {styles.headerTextAbove} >LearnBay</Text>
                <Text style = {styles.headerTextUnder} >Learn By Yourself</Text>
            </View>
           
            <TextBlock headerText = 'What The App Does' mainText = 'Provides the most objective and structured books’ selections, so you do not waste days researching for the best books on each topic and then structuring them, we do it instead of you'/>
            <TextBlock headerText = 'Contact Us' email = 'learnbayapp@gmail.com' mainText = 'If you have any problems, qestions, or suggestions write us on this email, we will answer as soon as possible'/>
                
            <Button 
                type="solid" 
                buttonStyle = {styles.question}
                icon={
                    <Icon
                    name="times-circle"
                    size={45}
                    color="#0E1B26"
                    onPress={() => navigation.navigate('MainScreen')}
                    type = 'font-awesome-5'
                    />  }
            />

        </View>
    )       
}



const baseStyles = StyleSheet.create({
    screen: {
        paddingTop: 40, 
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        alignItems: "center"
    },
  
    question: {
        marginTop: 5,
        backgroundColor : '#F2F2F2',
        alignSelf: "center",
        textAlign: "center"
    },
    textContainer: {
        alignItems: "center",
        
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
   
    howText : {
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
        marginBottom: 0,
    },
    step: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 10,
        fontSize: 17,
        fontFamily: 'montserrat-regular',
        textAlign: "center"
    },
    howBlock: {
        alignItems: "center",
        width: 304,
        height: 205,
        backgroundColor: '#0E1B26',
        borderRadius: 15,
        marginTop: 25
    },
    container: {
        width: '80%',
        alignItems: "center",
        justifyContent: "center"
    }
})

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        textContainer: {
            marginTop: 5
        },
        headerTextAbove: {
            fontSize:40
        },
        headerTextUnder: {
            fontSize:17
        },
        howBlock:{
            width: 304,
            height: 246,
            marginTop: 25  
        },
        step: {
            marginBottom: 12,
            marginTop: 12,
            fontSize: 20,
        },
        howText : {
            fontSize: 21 ,
            marginTop: 15, 

        },
        line: {
            marginTop: 8,
            marginBottom: 3,
        },
        question: {
            marginTop: 15
        },
    })
)

export default HelpScreen