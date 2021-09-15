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

const Traction = ({navigation}) => {
    return ( 
        <View style = {styles.screen}>
            <View style = {styles.container} showsVerticalScrollIndicator = {false}> 
            
                <HeaderForBook navigation={navigation}/> 
              
                <View style = {styles.align}>  
                    <Text style = {styles.headerTextStyle}>Traction</Text>
                    <Text style = {styles.headerAuthorTextStyle}>Gabriel Weinberg</Text>
                    <AddFavorite title='Traction. Gabriel Weinberg' navPoint = 'Traction' eventName='Traction via Favorites'/>
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
                            <TextBlockBlack headerText = 'What You Will Learn'  mainText = '“Traction” will tell you about 19 marketing channels with the real-world examples. Also, the author explains a structure of choosing the right strategy for your business.'/>
                            <TextBlockBlack headerText = 'Why To Read'  mainText = 'A lot of startups with excellent products fail due to absence of knowledge of traction strategies, or just because they do not take them seriously that is a mistake. If you will read this book, you will be able to avoid that consequence. (if you have a great product of course)'/>
                            <TextBlockBlack headerText = 'Who Should Read'  mainText = 'If you are not a marketing master and want to acquire a lot of very structured and useful information to get customers, then this book will be a good choice for you and yours startup.'/>
                    
                        </Carousel>  
                    </View>                    
                        
                        <Button title = 'Amazon' titleStyle ={styles.BtnTitle}  buttonStyle = {styles.btn} onPress = {()=> {
                            Amplitude.logEvent('Traction Amazon')
                            Linking.openURL('https://amzn.to/2ZOHGjf')
                            }} /> 
                </View>
            </View>
        </View>
    )
}

export default Traction

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