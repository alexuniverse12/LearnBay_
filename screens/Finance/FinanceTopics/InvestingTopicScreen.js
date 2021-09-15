import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from 'react-native-gesture-handler';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import HeaderForTopic from '../../../components/HeaderForTopic';
import BookTopicScreen from '../../../components/BookTopicScreen';
import BookTopicScreenTest from '../../../components/BookTopicScreenTest';
import PointTopic from '../../../components/PointTopic';

const InvestingTopicScreen = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'FinanceSubTopicScreen'/>    

                <Text style = {styles.headerTextStyle}>Investing</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'How to deal with your personal finances'/> 
                            <PointTopic pointText = 'What investment tools are available'/> 
                            <PointTopic pointText = 'How to properly invest in long-term'/> 
                            <PointTopic pointText = 'How to analyze companies before investing in them'/> 
                            <PointTopic pointText = 'What investment principles are used by the richest people on the planet including Warren Buffett'/> 
                    
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                        <BookTopicScreenTest
                        text = 'The Simple Path to Wealth. JL Collins'
                        number = '1' 
                        navigation = {navigation}  
                        navPoint = 'InvestingTopicScreen' 
                        linkForAmazon = 'https://amzn.to/2Gziy9a' 
                        eventName = 'Investing Topic Screen via The Simple Path to Wealth. JL Collins from Favorites' 
                        whatToLearn = 'The book is a simple introduction in investing and building wealth. The author explicitly lays out core practices and principles of personal finances and investing' 
                        whyToRead = 'If you want to take control of your financial life and want to start investing, then this book is a great choice for you.' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'The Simple Path to Wealth' 
                        nameOfAuthor='JL Collins' 

                        />
                        <BookTopicScreenTest
                        text = 'A Random Walk Down Wall Street. Burton. G Malkiel'
                        number = '2' 
                        navigation = {navigation}  
                        navPoint = 'InvestingTopicScreen' 
                        linkForAmazon = 'https://amzn.to/2EVjBzR' 
                        eventName = 'Investing Topic Screen via A Random Walk Down Wall Street. Burton. G Malkiel' 
                        whatToLearn = 'The book tells about the available investment options and introduces the terminology for non-professionals' 
                        whyToRead = 'If you want to dive into the world of investing and understand all range of investment opportunities, and If you are serious about getting your investments in order, then this is an absolute must-read book' 
                        noteForBook = 'Easy to read'
                        nameOfBook = 'A Random Walk Down Wall Street' 
                        nameOfAuthor='Burton. G Malkiel ' 
                        />
                        <BookTopicScreenTest
                        text = 'The Little Book of Common Sense Investing. John C. Bogle'
                        number = '3' 
                        navigation = {navigation}  
                        navPoint = 'InvestingTopicScreen' 
                        linkForAmazon = 'https://amzn.to/2SlrxgP' 
                        eventName = 'Investing Topic Screen via The Little Book of Common Sense Investing. John C. Bogle' 
                        whatToLearn = 'The book describes the simplest and most effective investment strategy for building wealth over the long term. The author uses simple concepts to help the reader to understand how to get good investment returns by sitting back and letting the market to work for you' 
                        whyToRead = 'If you need an excellent guidance before investing for the long-term without financial adviser whose fees will take a big portion of the returns/gains, then you have to read the book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'The Little Book of Common Sense Investing' 
                        nameOfAuthor='John C. Bogle' 
                        />
                        <BookTopicScreenTest
                        text = 'One Up On Wall Street. Peter Lynch'
                        number = '4' 
                        navigation = {navigation}  
                        navPoint = 'InvestingTopicScreen' 
                        linkForAmazon = 'https://amzn.to/3l7inkw' 
                        eventName = 'Investing Topic Screen via One Up On Wall Street. Peter Lynch ' 
                        whatToLearn = 'Lynch offers easy-to-follow advice for sorting out the long shots from the no-shots by reviewing a company’s financial statements and knowing which numbers really count. He offers guidelines for investing in cyclical, turnaround, and fast-growing companies' 
                        whyToRead = 'If you want to invest in individual stocks and want to be able to select the best portfolio of securities and recognize a royal flush from a hands down folding move, then this book is the right way to go' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'One Up On Wall Street' 
                        nameOfAuthor='Peter Lynch' 
                        />
                        <BookTopicScreenTest
                        text = 'The Intelligent Investor. Benjamin Graham'
                        number = '5' 
                        navigation = {navigation}  
                        navPoint = 'InvestingTopicScreen' 
                        linkForAmazon = 'https://amzn.to/2GpvI9d' 
                        eventName = 'Investing Topic Screen via The Intelligent Investor. Benjamin Graham' 
                        whatToLearn = 'Benjamin Graham’s objective was to provide an investment policy book for the ordinary investor. He succeeded in putting seemingly hard concepts into terms that could be understood and, more importantly, implemented by the average investor' 
                        whyToRead = 'The typical investor has a tendency to “follow the market” when they should be employing portfolio risk management strategies. To avoid that you have to read Graham’s alternative based on fundamental stock analysis' 
                        noteForBook = 'Warren Buffett’s recommendation. I and other readers absolutely do not recommend to read it before the suggested books in the topic. Instead, read others to understand basics and then dive into this treasure'
                        nameOfBook = 'The Intelligent Investor' 
                        nameOfAuthor='Benjamin Graham' 
                        />
                    </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


export default InvestingTopicScreen

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
