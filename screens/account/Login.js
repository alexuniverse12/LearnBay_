import React, { useState, useEffect } from 'react';
import {TextInput, View,StyleSheet,Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
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

export const Login = ({navigation}) => {
    const SignupSchema = Yup.object().shape({
        password: Yup.string()
          .required('Enter the password please. '),
        email: Yup.string()
          .email('Invalid email. ')
          .required('Enter the email please. ')
      }); 

    const [initializing, setInitializing] = useGlobalState('init');
    const [user, setUser] = useGlobalState('userState');
    const [userNotFound, setUserNotFound] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
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
        <Text style = {styles.title}>Glad To See You!</Text>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            Firebase.auth().signInWithEmailAndPassword(values.email, values.password).then(() => {
                console.log('User account signed in!');
            })
            .catch(error => {

                if (error.code === 'auth/user-not-found') {
                console.log('no user corresponding to the given email');
                setUserNotFound(true)
                }
                if (error.code !== 'auth/user-not-found') {
                setUserNotFound(false)
                }



                if (error.code === 'auth/wrong-password') {
                console.log('wrong password');
                setWrongPassword(true)
                }

                if (error.code !== 'auth/wrong-password') {
                setWrongPassword(false)
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
                
                <Text style = {styles.inputNotif}>{errors.email && touched.email ? errors.email : null}{userNotFound ? 'No user corresponding to the given email.': null }</Text>
              
                
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder="password"
                  style = {styles.input}
                  secureTextEntry = {true}
                />
                <Text style = {styles.inputNotif}>{errors.password && touched.password ? errors.password : null}{wrongPassword ? 'Wrong password. ': null }{connectionLost ? 'Check your internet. ': null } </Text>
                </View>
                <View style = {styles.btnContainer}> 
                  <Button 
                  onPress={handleSubmit} 
                  title="Login"
                  titleStyle = {styles.btnTitleStyle}
                  buttonStyle = {styles.btn}
                  />
                </View>
            </View>
          )}
        </Formik>
        <View style = {styles.loginContainer}>
            <Text style = {styles.loginTxt}>New user?</Text>
            <Text style = {styles.login} onPress={() => navigation.navigate('Signup')}>  Sign Up</Text>
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
  title: { 
    color: '#f2f2f2',
    fontSize: 30,
    fontFamily: 'roboto-regular',
    marginBottom: 35
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
    marginTop: 30
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

