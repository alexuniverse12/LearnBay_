import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import { useGlobalState } from '../globalState/globalState'

const BookTopicScreenTest = ({text,number,navigation,navPoint, eventName, whyToRead,whatToLearn, nameOfBook, nameOfAuthor, linkForAmazon, noteForBook}) => {
    const [what, setWhat] = useGlobalState('what');
    const [why, setWhy] = useGlobalState('why');
    const [bookName, setBookName] = useGlobalState('bookName');
    const [authorName, setAuthorName] = useGlobalState('authorName');
    const [eventNameAmplitude, setEventNameAmplitude] = useGlobalState('eventNameAmplitude');
    const [titleForFavorites, setTitleForFavorites] = useGlobalState('titleForFavorites');
    const [navPointForFavorites, setNavPointForFavorites] = useGlobalState('navPointForFavorites');
    const [amazonLink, setAmazonLink] = useGlobalState('amazonLink');
    const [note, setNote] = useGlobalState('note');


    return (
        <TouchableOpacity style = {styles.book}  onPress = {async () => { 
  
            await setBookName(nameOfBook) 
            await setAuthorName(nameOfAuthor)
            await setWhat(whatToLearn)
            await setWhy(whyToRead) 
            await setEventNameAmplitude(eventName) 
            await setNavPointForFavorites(navPoint) 
            await setTitleForFavorites(text) 
            await setAmazonLink(linkForAmazon)
            await setNote(noteForBook)

            Amplitude.logEvent(eventName)
            navigation.navigate('GeneralBookScreen')} }>
            <View style = {styles.containerBook}> 
                <View style = {styles.number}> 
                    <Text style = {styles.nmbStyle}>{number}</Text> 
                </View>
                <View > 
                    <Text style = {styles.bookName}>{text}</Text> 
                </View>
            </View>
        </TouchableOpacity>
    )
}

const baseStyles = StyleSheet.create({
    book: {
        width: '100%',
        height: 70,
        backgroundColor: '#0E1B26',
        borderRadius: 15,
        marginBottom: 40
    },
    containerBook: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        width: '85%',
        height: '100%',
        alignItems: "center",
        marginLeft: 11,     
    },
    number: {
        width: 31,
        height: 31,
        borderRadius: 100,
        backgroundColor: '#C4F2F2',
        textAlign: "center",
        alignItems:  "center",
        justifyContent: "center",
        

        
    },
    bookName: {
        fontSize: 24,
        marginLeft: 10,
        marginRight: 5,
        color: '#F2F2F2'
    },
    nmbStyle: {
        color:'#0E1B26',
        fontFamily: 'roboto-bold',
        fontSize: 22,
        textAlign: "center",
        
    },
    
})

const styles = createStyles(
    baseStyles, 

    minHeight(700, {       
        book: {
            height: 78
        },
        bookName: {
            fontSize: 24,
            marginLeft: 11,
        },
        number: {
            width: 35,
            height: 35,
        },
        containerBook: {
            marginLeft: 15
        },
        nmbStyle: {
            fontSize: 22 
        },    
    })
)

export default BookTopicScreenTest