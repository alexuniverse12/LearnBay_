import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from 'react-native-gesture-handler';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import HeaderForTopic from '../../../components/HeaderForTopic';
// import BookTopicScreen from '../../../components/BookTopicScreen';
import BookTopicScreenTest from '../../../components/BookTopicScreenTest';
import PointTopic from '../../../components/PointTopic';

const ProductManagement = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'ManagementSubTopicScreen'/>    

                <Text style = {styles.headerTextStyle}>Product Management</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'How to create a product people use'/> 
                            <PointTopic pointText = 'What and how to measure to make your product thrive'/> 
                            <PointTopic pointText = 'How to expand your innovative product into the mainstream'/>
                            <PointTopic pointText = 'How to develop a product people love'/>  
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                    <BookTopicScreenTest
                        text = 'Inspired. Marty Cagan'
                        number = '1' 
                        navigation = {navigation}  
                        navPoint = 'ProductManagement' 
                        linkForAmazon = 'https://amzn.to/3mD29RC' 
                        eventName = 'Product Management Topic Screen via Inspired. Marty Cagan from Favorites' 
                        whatToLearn = 'Marty Cagan provides a master class in how to structure and staff a vibrant and successful product organization and how to discover and deliver technology products that your customers will love' 
                        whyToRead = 'This book will be useful for you, if you want to design, develop, and deploy the products that have earned the love of literally billions of people around the world' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Inspired' 
                        nameOfAuthor='Marty Cagan' 
                        /> 
                        <BookTopicScreenTest
                        text = 'Hooked. Nir Eyal'
                        number = '2' 
                        navigation = {navigation}  
                        navPoint = 'ProductManagement' 
                        linkForAmazon = 'https://amzn.to/3iFUPlT' 
                        eventName = 'Product Management Topic Screen via Hooked. Nir Eyal from favorites' 
                        whatToLearn = 'This book introduces listeners to the "Hooked Model", a four-step process companies use to build customer habits. In short, how to influence a customer to use your products and services over and over again without relying on ads, promotions' 
                        whyToRead = 'If you want a guide to building products people use because they want to then you should read the book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Hooked' 
                        nameOfAuthor='Nir Eyal' 
                        />
                        <BookTopicScreenTest
                        text = 'Crossing The Chasm. Geoffrey A. Moore'
                        number = '3' 
                        navigation = {navigation}  
                        navPoint = 'ProductManagement' 
                        linkForAmazon = 'https://amzn.to/3iB2JwZ' 
                        eventName = 'Product Management Topic Screen via Crossing The Chasm. Geoffrey A. Moore from Favorites' 
                        whatToLearn = 'The book provides a lucid, updated account about what is involved in successfully introducing and getting mainstream acceptance of disruptive innovations in high tech related businesses' 
                        whyToRead = 'If you want the majority of people to adopt your innovation, then this book is your choice' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Crossing The Chasm' 
                        nameOfAuthor='Geoffrey A. Moore' 
                        />
                        <BookTopicScreenTest
                        text = 'Measure What Matters. John Doerr'
                        number = '4' 
                        navigation = {navigation}  
                        navPoint = 'ProductManagement' 
                        linkForAmazon = 'https://amzn.to/32K90kz' 
                        eventName = 'Product Management Topic Screen via Measure What Matters. John Doerr from favorites' 
                        whatToLearn = 'Legendary venture capitalist John Doerr reveals how the goal-setting system of Objectives and Key Results (OKRs) can help any organization thrive' 
                        whyToRead = 'In order to understand what makes Silicon Valley tick, you should read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Measure What Matters' 
                        nameOfAuthor='John Doerr' 
                        />
                        <BookTopicScreenTest
                        text = 'Naked Statistics. Charles Wheelan'
                        number = '5' 
                        navigation = {navigation}  
                        navPoint = 'ProductManagement' 
                        linkForAmazon = 'https://amzn.to/2H6XCXo' 
                        eventName = 'Product Management Topic Screen via Naked Statistics. Charles Wheelan from favorites' 
                        whatToLearn = 'Wheelan explains the basics concepts in statistics, from probability to regression' 
                        whyToRead = 'To understand metrics of your products and understand what they mean, you should read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Naked Statistics' 
                        nameOfAuthor='Charles Wheelan' 
                        />
                        {/* <BookTopicScreen text = 'Inspired. Marty Cagan' number = '1' navigation = {navigation} navPoint = 'Inspired'  eventName = 'Inspired'/>
                        <BookTopicScreen text = 'Hooked. Nir Eyal' number = '2' navigation = {navigation} navPoint = 'HookedManagement' eventName = 'HookedManagement'/>
                        <BookTopicScreen text = 'Crossing The Chasm. Geoffrey A. Moore' number = '3' navigation = {navigation} navPoint = 'CrossingTheChasmManagement' eventName = 'Crossing The Chasm Management'/>
                        <BookTopicScreen text = 'Measure What Matters. John Doerr' number = '4' navigation = {navigation} navPoint = 'MeasureWhatMatters' eventName = 'Measure What Matters'/>
                        <BookTopicScreen text = 'Naked Statistics. Charles Wheelan' number = '5' navigation = {navigation} navPoint = 'NakedStatistics' eventName = 'Naked Statistics' /> */}
                    </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


export default ProductManagement

const baseStyles = StyleSheet.create({
    screen: { 
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F2F2',
    }, 
    container: {
        width: '90%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        alignSelf: "center",
        marginTop: 30
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTextStyle : {
        color: '#0E1B26',
        fontFamily: 'montserrat-regular',
        fontSize: 30,
        textAlign: "center"
    },
    line: {
        width: 70,
        height: 2,
        backgroundColor: '#C4F2F2',
        marginTop: 10,
        marginBottom: 10,
    },
    lineBottom: {
        width: 70,
        height: 2,
        backgroundColor: '#A4B0BF',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center"
    },
    whiteBlock : { 
        width: '100%',
        height: 172,
        borderRadius:10,
        borderWidth: 0 ,
        backgroundColor: '#0E1B26',
        marginTop:35,
        justifyContent: "flex-start",
        alignItems: "center" , 
        marginBottom: 25
    },
    headText: {
        textAlign:"center",
        marginTop: 10,
        fontSize: 18,
        fontFamily: 'roboto-bold',
        color: '#F2F2F2'
    },
 
    ul: {
        alignSelf: "center",
        color:'#F2F2F2',
        width: '90%',
    },
    subContainer: {
        alignItems: "center",
        flex:1
    }, 
    booksContainer: {
        width: '95%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        marginTop: 23,
    },
    whereText: {
        color: '#0E1B26',
        fontSize: 18,
        fontFamily: 'roboto-bold'
    },
    
})

const styles = createStyles(
    baseStyles, 

    minHeight(700, {       
        whiteBlock: {
            height: 195
        },
        whereText: {
            fontSize: 20
        },
        headText: {
            marginTop: 11,
            fontSize: 20,
        },
          
    })
)
