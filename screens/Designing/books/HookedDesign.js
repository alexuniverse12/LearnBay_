import React from 'react';
import { View, Text, StyleSheet, Linking,Dimensions, ScrollView } from 'react-native';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import ButtonAmazon from '../../../components/ButtonAmazon';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import AddFavorite from '../../../components/AddFavorite';
import Carousel from 'react-native-banner-carousel';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';

const BannerWidth = Dimensions.get('window').width;

const HookedDesign = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <ScrollView style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Hooked</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Nir Eyal</Text>
                    <AddFavorite title='Hooked. Nir Eya' navPoint = 'HookedDesign' eventName='Hooked via Favorites'/>
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
                            <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'This book introduces listeners to the "Hooked Model", a four-step process companies use to build customer habits. In short, how to influence a customer to use your products and services over and over again without relying on ads, promotions'/>
                            <TextBlockBlack headerText = 'Why To Read'  mainText = 'If you want a guide to building products people use because they want to then you should read the book'/>
                        
                        </Carousel>  
                    </View> 
                    
                        
                        <ButtonAmazon eventName = 'Hooked Design Amazon' AmazonLink = 'https://amzn.to/2Ss62Li'/> 
                </View>
            </ScrollView>
        </View>
    )
}

export default HookedDesign

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