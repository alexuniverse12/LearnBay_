import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';


const IntroHelpScreen = ({navigation}) => {
    return (
        <View style = {styles.screen}> 
            <View style = {styles.container}> 
                <Text style = {styles.header} >What We Did</Text>
                <View style= {styles.lineUp}>
                </View>
                <View style = {styles.textContainerUp}> 
                <Text style = {styles.text}  > We meticulously processed thousands of reviews and interviewed dozens of professionals to find books that will help you to learn new skills  </Text>
                </View>
            </View> 
            <View style = {styles.howBlock}> 
                
                <Text style = {styles.howText}>What You Should Do</Text>
            
                <View style= {styles.line}> 
                </View>

                <View style = {styles.stepsContainer}> 
                    <Text style= {styles.step}>Choose Topic</Text>
                    <Icon 
                        name = "arrow-down"
                        size = {15}
                        color = '#C4F2F2'
                        type = 'font-awesome-5'
                    />
                    <Text style= {styles.step}>Read</Text>
                    <Icon 
                        name = "arrow-down"
                        size = {15}
                        color = '#C4F2F2'
                        type = 'font-awesome-5'
                    />
                    <Text style= {styles.step}>Apply</Text>
                </View>
            </View>
                
            <Button 
                type="solid" 
                titleStyle = {styles.btnStyle}
                buttonStyle = {styles.btn}
                title = 'START'
                onPress={() => navigation.navigate('MainScreen')}
            />

        </View>
    )       
}



const baseStyles = StyleSheet.create({
    screen: {
        paddingTop: 55, 
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        alignItems: "center"
    },
    btn: {
        width: 130,
        height: 43,
        borderRadius: 23, 
        backgroundColor: '#0E1B26',
        padding: 0,
        marginTop: 20
    },
    btnStyle: {
        color: '#C4F2F2',
        fontFamily: 'roboto-bold',
        fontSize: 24,
        textAlign: "center"
    },
    textContainer: {
        alignItems: "center",
        
    }, 
    container:{
        alignItems: "center",
        width: 304,
        height: 205,
        backgroundColor: '#0E1B26',
        borderRadius: 15,
        marginTop: 25
        
    },  
    header: {
        color: '#C4F2F2',
        textAlign: "center",
        fontSize: 18 ,
        fontFamily: 'montserrat-bold', 
        marginTop: 13, 
        fontWeight: 'bold'
    },
    lineUp: {
        backgroundColor: '#A4B0BF',
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
    textContainerUp: {
        width: '80%',
        alignSelf: "center"
    },
   
    howText : {
        color: '#C4F2F2',
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
        marginBottom: 2,
    },
    step: {
        color: '#F2F2F2',
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
        marginTop: 45,
        marginBottom: 25
    },
    stepsContainer : {
        marginBottom: 50
    }
})

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        screen: {
            paddingTop: 75
        },
        textContainer: {
            marginTop: 40
        },
        container:{
            width: 304,
            height: 246,
            marginTop: 25
        },
        text: {
            fontSize: 19,
            lineHeight: 26
        }, 
        lineUp: {
            marginTop: 9,
            marginBottom: 12,
          
        },
        header: { 
            fontSize: 21 ,
            marginTop: 15, 
        },
        howBlock:{
            width: 304,
            height: 246,
            marginTop: 45  
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

export default IntroHelpScreen