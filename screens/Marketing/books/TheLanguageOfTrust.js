import React from 'react';
import { View, Text, StyleSheet, Linking,Dimensions } from 'react-native';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import AddFavorite from '../../../components/AddFavorite';
import Carousel from 'react-native-banner-carousel';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import { ScrollView } from 'react-native-gesture-handler';

const BannerWidth = Dimensions.get('window').width;

const TheLanguageOfTrust = ({navigation}) => {
    return ( 
        <ScrollView style = {styles.screen}>
            <View style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>The Language of Trust</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Michael Maslanskiy</Text>
                    <AddFavorite title='The Language of Trust. Michael Maslanskiy' navPoint = 'TheLanguageOfTrust' eventName='The Language of Trust via Favorites'/>
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
                            <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'The Author debunks many myths associated with how to properly advertise, and subsequently sell, ideas, products, and even yourself in the "Post-Trust Era" using modern case studies and experiences from his own life.'/>
                            <TextBlockBlack headerText = 'Why To Read'  mainText = 'If you are a person who wants to acquire trust of the customers who listen less and question more, then you have to read this book.'/>
                        
                        </Carousel>  
                    </View>    
                    
                        
                        <ButtonAmazon eventName = 'the language of trust Amazon' AmazonLink = 'https://amzn.to/32DkYMz'/> 
                </View>
            </View>
        </ScrollView>
    )
}

export default TheLanguageOfTrust

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