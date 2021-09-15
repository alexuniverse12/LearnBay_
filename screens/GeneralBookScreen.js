import React from 'react';
import { View, Text, StyleSheet, Linking,Dimensions } from 'react-native';
import TextBlockBlack from '../components/TextBlockBlack';
import HeaderForBook from '../components/HeaderForBook';
import ButtonAmazon from '../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import AddFavorite from '../components/AddFavorite';
import Carousel from 'react-native-banner-carousel';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import { useGlobalState } from '../globalState/globalState'
import { ScrollView } from 'react-native-gesture-handler';


const BannerWidth = Dimensions.get('window').width;

const GeneralBookScreen = ({navigation}) => {
    const [bookName, setBookName] = useGlobalState('bookName');
    console.log(bookName)

    const [authorName, setAuthorName] = useGlobalState('authorName');
    console.log(authorName)

    const [what, setWhat] = useGlobalState('what');
    console.log(what)

    const [why, setWhy] = useGlobalState('why');
    console.log(why)

    const [eventNameAmplitude, setEventNameAmplitude] = useGlobalState('eventNameAmplitude');
    console.log(eventNameAmplitude)

    const [titleForFavorites, setTitleForFavorites] = useGlobalState('titleForFavorites');
    console.log(titleForFavorites)
    
    const [navPointForFavorites, setNavPointForFavorites] = useGlobalState('navPointForFavorites');
    console.log(navPointForFavorites)

    const [amazonLink, setAmazonLink] = useGlobalState('amazonLink');
    console.log(amazonLink)

    const [note, setNote] = useGlobalState('note');
    console.log(note)

    const renderItem = () => {
        return (
            <TextBlockBlack headerText = 'What You Will Learn'  mainText = {what} />
        )
    } 

    const BLockWidth = Dimensions.get('window').width*0.85;

    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>{bookName}</Text>
                    <Text style = {styles.headerAuthorTextStyle}>{authorName}</Text>
                    <AddFavorite title={titleForFavorites} navPoint = {navPointForFavorites} eventName={`${eventNameAmplitude} via Favorites`}/>

                    <View  style = {styles.carouselHeight} > 
                        <Carousel
                        useNativeDriver = {true}
                        autoplay = {false}
                        index={0}
                        pageSize= {BannerWidth}
                        pageIndicatorOffset = {23.5}
                        pageIndicatorStyle = {styles.pageIndicatorStyle}
                        activePageIndicatorStyle = {styles.activePageIndicatorStyle}
                        >       
                            <TextBlockBlack headerText = 'What You Will Learn'  mainText = {what} />
                            <TextBlockBlack headerText = 'Why To Read'  mainText = {why}/>
                            <TextBlockBlack headerText = 'Note'  mainText = {note}/>
                        
                        </Carousel>  
                    </View>           
                    <ButtonAmazon eventName = {`${eventNameAmplitude} Amazon`} AmazonLink = {amazonLink}/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default GeneralBookScreen

const baseStyles = StyleSheet.create(
    {
        screen: { 
            width: '100%',
            height: '100%',
            backgroundColor: '#0E1B26',
        }, 
        container: {
            width: '90%',
            height: '100%',
            backgroundColor: '#0E1B26',
            alignSelf: "center",
            marginTop: 30,
        },
        align: {
            alignItems:"center",
            flex: 1
        },
        iconContainer: {
            flexDirection: 'row',
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            marginTop: 10
        },
        headerTextStyle : {
            color: '#F2F2F2',
            fontFamily: 'montserrat-regular',
            fontSize: 30,
            textAlign: "center",
            marginBottom: 15
        },
        headerAuthorTextStyle: {
            color: '#F2F2F2',
            fontFamily: 'montserrat-regular',
            textAlign: "center",
            fontSize: 20,
            marginBottom: 7
        },
        carouselHeight: {
            height: 270
        },
        pageIndicatorStyle: {
            backgroundColor: '#C4F2F2',
            width:13, 
            height:13,
            borderRadius: 100,
            borderWidth: 2,
            
        },
        activePageIndicatorStyle: {
            borderColor: '#C4F2F2', 
            backgroundColor: '#0E1B26', 
            borderWidth: 2, 
            width:13, 
            height:13, 
            borderRadius: 100
        }
    }
)

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        carouselHeight: {
            height: 317
        },
        pageIndicatorStyle: {
            width:15, 
            height:15
        },
        activePageIndicatorStyle: {
            borderWidth: 2, 
            width:15, 
            height:15, 
        }
    })
)