import React, { useState, useEffect } from 'react';
import {TextInput, View,StyleSheet,Text, TouchableWithoutFeedback, Keyboard, Linking } from 'react-native';
import { Formik } from 'formik';
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import Firebase from '../../config/Firebase';
import * as Yup from 'yup'
import { useGlobalState } from '../../globalState/globalState'


const DismissKeyboard = ({children})=> (
  <TouchableWithoutFeedback onPress = {()=> Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export const Signup = ({navigation}) => {

    const SignupSchema = Yup.object().shape({
        password: Yup.string()
          .min(6, 'The password must contain at least 6 signs. ')
          .max(50, 'Too Long! ')
          .required('Enter the password please. '),
        email: Yup.string()
          .email('Invalid email. ')
          .required('Enter the email please. ')
      });


      const [initializing, setInitializing] = useGlobalState('init');
      const [user, setUser] = useGlobalState('userState');
      const [emailUsed, setEmailUsed] = useState(false)
      const [connectionLost, setConnectionLost] = useState(false)

      function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);



    return (
    <DismissKeyboard> 
      <View style = {styles.screen}> 
        <Text style = {styles.title}>LearnBay</Text>
        <Text style = {styles.titleWelcome}><Text style = {styles.welcomeWord}>Welcome,{"\n"}</Text>sign up and get all features or skip</Text>
        <Formik
          initialValues={{ email: '', password: '', }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            Firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {

                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                setEmailUsed(true)
                }

                if (error.code !== 'auth/email-already-in-use') {
                setEmailUsed(false)
                }

                if (error.code === 'auth/network-request-failed') {
                console.log('no internet');
                setConnectionLost(true)
                }

                if (error.code !== 'auth/network-request-failed') {
                setConnectionLost(false)
                }



            });;
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values,errors,touched  }) => ( 
            <View> 
              <View style = {styles.inputContainer}>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder= 'email'
                  style = {styles.input}
                />
              
                
                <Text style = {styles.inputNotif}>{errors.email && touched.email ? `${errors.email}` : null}</Text>

                
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="password"
                  style = {styles.input}
                  secureTextEntry = {true}                
                />

                
                <Text style = {styles.inputNotif}>{errors.password && touched.password ? errors.password : null}{emailUsed ? 'That email address is already in use. ': null }{connectionLost ? 'Check your internet. ': null }</Text>
              </View> 
              
              <View style = {styles.btnContainer}> 
                <Button type="solid" 
                  titleStyle = {styles.btnTitleStyle}
                  buttonStyle = {styles.btn} 
                  onPress={handleSubmit} 
                  title="Sign Up"
                />
                <Button type="solid" 
                  titleStyle = {styles.btnTitleStyle}
                  buttonStyle = {styles.btn} 
                  onPress={() => {
                    Firebase.auth()
                    .signInAnonymously()
                    .then(() => {
                      console.log('User signed in anonymously');
                    })
                    .catch((error) => {
                      if (error.code === 'auth/network-request-failed') {
                        console.log('no internet');
                        setConnectionLost(true)
                      }

                      if (error.code !== 'auth/network-request-failed') {
                        setConnectionLost(false)
                      }
                    })
                  }}
                  title="Skip"
                />
              </View>
            </View>
          )}
        </Formik>
        <View style = {styles.privacyContainer}> 
          <Text style = {styles.privacy}>By pressing Sign Up, you are indicating that you have read and agree to the <Text style = {{color: "#f2f2f2"}} onPress = {()=> Linking.openURL('https://learnbay.flycricket.io/privacy.html')}>Privacy Policy</Text>.</Text> 
        </View>
        <View style = {styles.loginContainer}>
            <Text style = {styles.loginTxt}>Have an account?</Text>
            <Text style = {styles.login} onPress={() => navigation.navigate('Login')}>  Login</Text>
        </View> 
      </View>
    </DismissKeyboard>
    
    )
};



const baseStyles = StyleSheet.create({
  screen: {
      paddingTop: 50, 
      width: '100%',
      height: '100%',
      backgroundColor: '#0E1B26',
      paddingBottom: 30,
      flexDirection: "column",
      paddingHorizontal: 30
  },
  textSt: {
    color: 'blue',
  },
  title: { 
    color: '#f2f2f2',
    fontSize: 30,
    fontFamily: 'roboto-regular',
    marginBottom: 25
  },
  titleWelcome: { 
    color: '#A4B0BF',
    fontSize: 30,
    fontFamily: 'roboto-regular',
    marginBottom: 35,
    lineHeight: 40,
    
  },
  welcomeWord: {
    color: '#f2f2f2',
    fontFamily: 'roboto-regular',
  },
  inputContainer: {
    marginRight:20,
    marginBottom:10
  },
  input: {
    width: '100%',
    height: 41,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 3,
    paddingLeft:8,
    paddingRight:4
  },
  btn: {
    width: 122,
    height:40, 
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    padding: 0,
    margin: 0
  },  
  btnTitleStyle: {
    color: '#0E1B26',
    fontSize: 23,
    fontFamily: 'roboto-regular',
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 100
  },
  loginTxt: {
    fontSize: 20,
    fontFamily: 'roboto-regular',
    color: '#f2f2f2'
  },
  login: {
    fontSize: 20,
    fontFamily: 'roboto-regular',
    color: '#C4F2F2'
  },
  inputNotif: {
    color: '#f2f2f2',
    marginBottom: 9,
    marginTop: 3
  },
  privacy: {
    color: '#A4B0BF'
  },
  privacyContainer: {
    marginTop: 20
  }

}) 

const styles = createStyles(
  baseStyles, 

  minHeight(700, {
    titleWelcome: { 
      color: '#A4B0BF',
      fontSize: 30,
      fontFamily: 'roboto-regular',
      marginBottom: 40,
      lineHeight: 45,
      
    },
  })
)
