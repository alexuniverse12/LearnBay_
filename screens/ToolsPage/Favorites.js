import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Linking,Dimensions} from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import Firebase from '../../config/Firebase';
import BookFavorites from '../../components/BookFavorites'
import {useNetInfo} from "@react-native-community/netinfo";


const Favorites = ({navigation})=> {
    const [book, setBook] = useState([])
    const userId = Firebase.auth().currentUser.uid;
    const netInfo = useNetInfo().isInternetReachable;

        useEffect(()=>{
            Firebase.firestore().collection(`users/${userId}/favorites`).onSnapshot((snapshot)=> {
                setBook(snapshot.docs.map(doc => doc.data()))
            })

        }, [])


    if (netInfo) {
        return (
        <View style = {styles.screen}>
            <Text style = {styles.titleStyle}> Your Favorites </Text>
            <View style = {styles.container}> 
                <ScrollView style = {{width: '100%'}} showsVerticalScrollIndicator = {false}> 
                {book.map(each => (
                <BookFavorites text ={each.title} navPoint = {each.navPoint} navigation = {navigation} eventName = {each.eventName} key = {each.eventName} />
                ))}
                </ScrollView>
            </View>
 
        </View>
    )} else {
        return (
            <View style = {styles.screen}>
            <Text style = {styles.titleStyle}> Your Favorites </Text>
            <Text style = {styles.conectionLost}> Check Your Internet </Text>
            
 
            </View>
        )
    }
}

export default Favorites 

const baseStyles = StyleSheet.create({
    screen: {
      backgroundColor: '#f2f2f2',
      paddingTop:50.,
      alignItems:"center",
      width: '100%'
      

    },
    titleStyle:{
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30
    },
    conectionLost: {
        fontSize: 15,
        marginTop: 120,
        color: '#C0C0C0'
    },
    container: {
        alignItems:"center",
        width: '80%',
        marginBottom: 60,
        paddingBottom: 60
    }

  }) 
  
  const styles = createStyles(
    baseStyles, 
  
    minHeight(700, {
      screen: {
        paddingTop: 57
      },
      titleStyle: {
          fontSize: 33
      }
    })
  )
  