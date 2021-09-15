import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import * as Amplitude from 'expo-analytics-amplitude';
import ToolsButton from '../../components/ToolsButton';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import Firebase from '../../config/Firebase';
import { useGlobalState } from '../../globalState/globalState'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {useNetInfo} from "@react-native-community/netinfo";



const Tools = ({navigation})=> {
    const [initializing, setInitializing] = useGlobalState('init');
      const [user, setUser] = useGlobalState('userState');
      const IsAnonym = Firebase.auth().currentUser.isAnonymous;
      const netInfo = useNetInfo().isInternetReachable;

      function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
    
      useEffect(() => {
        const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    if(IsAnonym && netInfo) {
      return (
        <View style = {styles.screenAnonym}> 
          <Text style = {styles.title}>For Using The Tools</Text>
          <Button title = 'Create Account' buttonStyle={styles.btn} titleStyle = {styles.btnTitleStyle}  onPress = {()=> {
            Firebase.auth().signOut().then(() => console.log('User signed out!'))
            Amplitude.logEvent('An Anonymous User Pressed Create Account')
          }}  /> 
          <Text style = {styles.or}>&</Text>
          <Button title = 'Login' buttonStyle={styles.btn} titleStyle = {styles.btnTitleStyle} onPress = {()=> {
            Firebase.auth().signOut().then(() => console.log('User signed out!'))
            Amplitude.logEvent('An Anonymous User Pressed Login')
          }} />
        </View>
      )
    } else if (netInfo && IsAnonym !== true) {
      return (
        <View style = {styles.screen}>
            <View style = {styles.block}> 
              <FontAwesome5 name="user-alt" size={30} color="black" style = {styles.icon} />
              <ToolsButton btnName = 'Log Out' eventName = 'Log Out'/>
            </View>
            <View style = {styles.block}> 
              <FontAwesome name="bookmark" size={30} color="black" style = {styles.icon}/>
              <ToolsButton btnName = 'Favorites' navPoint = 'Favorites' navigation={navigation} eventName = 'Favorites' />
            </View>
        </View>
    )
    } else {
      return (
        <View> 
          <Text style = {styles.conectionLost}>Provide Internet Access To Use Tools</Text>
        </View>
      )
    }

}

const baseStyles = StyleSheet.create({
  screen: {
    marginTop: 50,
    backgroundColor: '#f2f2f2',
    marginHorizontal:20,
    justifyContent: "center",

  },
  screenAnonym: {
    marginTop: 80,
    backgroundColor: '#f2f2f2',
    alignItems: 'center'
  },
  block: {
    marginBottom:20,
  },
  icon: {
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 70
  },
  or: {
    fontSize:26,
    fontWeight: "bold",
    marginVertical: 30
  },
  btn: {
    height: 56,
    width: 194,
    borderRadius: 13,
    backgroundColor: '#0E1B26'
  },
  btnTitleStyle: {
    color: '#C4F2F2',
    fontSize: 23
  }, 
  conectionLost: {
    fontSize: 15,
    marginTop: 120,
    color: '#C0C0C0',
    textAlign:"center"
},
}) 

const styles = createStyles(
  baseStyles, 

  minHeight(700, {
    screen: {
      marginTop: 70
    }
  })
)



export default Tools 