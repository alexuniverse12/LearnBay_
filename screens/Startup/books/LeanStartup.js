import React from 'react';
import { View, Text, StyleSheet, Linking,Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import TextBlockBlack from '../../../components/TextBlockBlack';
import HeaderForBook from '../../../components/HeaderForBook';
import * as Amplitude from 'expo-analytics-amplitude';
Amplitude.initialize('dbe507db7ce720eec932d27693aebed0')
import AddFavorite from '../../../components/AddFavorite';
import Carousel from 'react-native-banner-carousel';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';

const BannerWidth = Dimensions.get('window').width;
const BtnWidth = Dimensions.get('window').width*0.85

const LeanStartup = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <View style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Lean Startup</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Eric Rice</Text>
                    <AddFavorite title='Lean Startup. Eric Rice' navPoint = 'LeanStartup' eventName='Lean Startup via Favorites'/>
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
                            <TextBlockBlack headerText = 'What You Will Learn'  mainText = 'The book will teach you how to understand in which direction to lead your startup and not to spend months on features that no one will need. Also, what metrics to look at a startup.'/>
                            <TextBlockBlack headerText = 'Why To Read'  mainText = 'Lean Startup will help you to avoid the widespread mistakes that unexperienced entrepreneurs could make while creating something new. Thus, you will save months of work and a bunch of money'/>
                            <TextBlockBlack headerText = 'Who Should Read'  mainText = 'The book will be useful for novices who wants to become acquainted with general concepts of any startup. Also, Not all ideas from the book could be applied to a hardware startup.'/>

                        </Carousel>  
                    </View>  
                    
                        
                        <Button title = 'Amazon' titleStyle ={styles.BtnTitle}  buttonStyle = {styles.btn} onPress = {()=>  { 
                            Amplitude.logEvent('Lean Startup Amazon')
                            Linking.openURL('https://amzn.to/3iH1yMr')
                            }} /> 
                </View>
            </View>
        </View>
    )
}

export default LeanStartup

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
        
     
        btn: {
            height:44,
            width: BtnWidth,
            borderRadius: 10,
            backgroundColor: '#F2F2F2',
            alignSelf:"center",
            padding: 0,
            marginTop: 20,
            marginBottom: 30
        },
        BtnTitle: {
            color: '#0E1B26',
            textAlign: "center",
            fontWeight: 'bold',  
            fontSize: 22
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