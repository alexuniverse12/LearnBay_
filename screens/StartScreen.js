import React, { useEffect,  useRef  } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import AsyncStorage from '@react-native-community/async-storage';

const StartScreen  = ({navigation}) => {
    
    const fadeAnim1 = useRef(new Animated.Value(0)).current;
    const fadeAnim2 = useRef(new Animated.Value(0)).current;
    const fadeAnim3 = useRef(new Animated.Value(0)).current;
    const fadeAnim4 = useRef(new Animated.Value(0)).current;
    const fadeAnim5 = useRef(new Animated.Value(0)).current;
   

    const anim = () => {
      
    Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 2000,
        
        
    }).start()
    Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 2000,
        delay: 800,
        useNativeDriver: 'false'
        
    }).start()
    Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 2000,
        delay: 1600,
        useNativeDriver: 'false'
    }).start()
    Animated.timing(fadeAnim4, {
        toValue: 1,
        duration: 2000,
        delay: 2400,
        useNativeDriver: 'false'
    }).start()
    Animated.timing(fadeAnim5, {
        toValue: 1,
        duration: 2000,
        delay: 3000,
        useNativeDriver: 'false'
    }).start()
        
    }

    useEffect(()=> {
        anim()
      })

    return (
        <View style = {styles.screen}> 
            <Animated.Text style = {[styles.text, {opacity: fadeAnim1}]}>Hello</Animated.Text>
            <Animated.Text style = {[styles.text, {opacity: fadeAnim2}]}>This</Animated.Text>
            <Animated.Text style = {[styles.text, {opacity: fadeAnim3}]}>Is</Animated.Text>
            <Animated.Text style = {[styles.text, {opacity: fadeAnim4}]}>LearnBay</Animated.Text>
            <Animated.View style = {{opacity: fadeAnim5}}> 
            <Button title = 'AHEAD' titleStyle = {styles.btnStyle} buttonStyle = {styles.btn} onPress = {async () => {
                 try {
                    await AsyncStorage.setItem('KEY', 'MainScreen')
                    console.log('Data successfully saved')
                    navigation.navigate('IntroHelpScreen')
                } catch (e) {
                    console.log('Failed to save the data to the storage')
                }
            }} />
            </Animated.View>
        </View>
    )
}

const baseStyles = StyleSheet.create({
        screen: {
            height: '100%',
            width: '100%',
            backgroundColor: '#0E1B26',
            alignItems: "center",
            paddingTop: 100
            
        },
        text: {
            fontFamily: 'montserrat-regular',
            fontSize: 36,
            marginBottom: 50,
            color: '#F2F2F2'
        },
        btn: {
            width: 130,
            height: 43,
            borderRadius: 23,
            backgroundColor: '#C4F2F2',
            padding: 0,
            marginTop: 30
        },
        btnStyle: {
            color: '#0E1B26',
            fontFamily: 'roboto-bold',
            fontSize: 24,
            textAlign: "center"
        }
    })

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
      screen: {
          paddingTop: 150
      }  
    })
)

export default StartScreen