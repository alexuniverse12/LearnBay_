import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Linking, Scr, Alert   } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import { useGlobalState } from '../globalState/globalState'
import {useNetInfo} from "@react-native-community/netinfo";
import Firebase from '../config/Firebase';
const AddFavorite = ({title, navPoint,eventName})=> {
    const userId = Firebase.auth().currentUser.uid;
    const newReference = Firebase.firestore().collection(`users/${userId}/favorites`).doc(title);
    const [doc,setDoc] = useState()
    const netInfo = useNetInfo().isInternetReachable;
    const IsAnonym = Firebase.auth().currentUser.isAnonymous;

    const verifyData = () => {
        newReference.get().then((snapshot => {
            console.log(snapshot.exists)
            console.log('test1')
            setDoc(snapshot.exists)
        }))
    }

    useEffect(()=>{
            newReference.get().then((snapshot => {
            console.log(snapshot.exists)
            console.log('test1')
            setDoc(snapshot.exists)
        })) 
    })
    return (
        <Button
            icon={
                <Icon
                name="heart-circle" 
                size={45}
                color= {doc? '#C4F2F2': '#f2f2f2'} 
                type='material-community'
                backgroundColor ='#0E1B26'
                />
            }
            buttonStyle = {{backgroundColor: '#0E1B26', marginTop: 12}}
            onPress = { async () => {
                
                await verifyData()

                if(doc !== true && netInfo === true && IsAnonym !== true){
                    newReference
                    .set({
                        title:title,
                        navPoint: navPoint,
                        eventName: eventName
                    }).then(() => console.log('Data updated.'));
                } else if (netInfo === true && IsAnonym !== true) {
                    newReference.delete().then(()=> {console.log('book deleted')})
                } else if (IsAnonym){
                    Alert.alert('Sign Up To Add The Favorites')
                } else {
                    Alert.alert('Check Your Internet')
                }
                }}
            

        />
    )
}

export default AddFavorite