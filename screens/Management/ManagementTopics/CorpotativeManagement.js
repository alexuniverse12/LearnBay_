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

const CorporativeManagement = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'ManagementSubTopicScreen'/>    

                <Text style = {styles.headerTextStyle}>Team Management</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'How to make a culture in your company that allows to thrive'/> 
                            <PointTopic pointText = 'How to create a high-performance team '/> 
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                        <BookTopicScreenTest
                        text = 'Powerful. Patty McCord'
                        number = '1' 
                        navigation = {navigation}  
                        navPoint = 'CorporativeManagement' 
                        linkForAmazon = 'https://amzn.to/35M89BP' 
                        eventName = 'Team Management Topic Screen via Powerful. Patty McCord from Favorites' 
                        whatToLearn = 'The book shares the philosophy that is relevant to the one who wants to build a highly effective organization' 
                        whyToRead = 'If you’re looking for a passionate, pleasantly irreverent, contrarian perspective on building a high-performance team, you should read it' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Powerful' 
                        nameOfAuthor='Patty McCord' 
                        />
                        <BookTopicScreenTest
                        text = 'Culture Code. Daniel Coyle'
                        number = '2' 
                        navigation = {navigation}  
                        navPoint = 'CorporativeManagement' 
                        linkForAmazon = 'https://amzn.to/2FVGxis' 
                        eventName = 'Team Management Topic Screen via Culture Code. Daniel Coyle from favorites' 
                        whatToLearn = 'The author unlocks the secrets of highly successful groups and provides the tools to build a cohesive, motivated culture in a company.' 
                        whyToRead = 'If you want to make your teams work better and produce higher profits – read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Culture Code' 
                        nameOfAuthor='Daniel Coyle' 
                        />
                        {/* <BookTopicScreen text = 'Culture Code. Daniel Coyle' number = '1' navigation = {navigation} navPoint = 'CultureCode'  eventName = 'Culture Code'/>
                        <BookTopicScreen text = 'Powerful. Patty McCord' number = '2' navigation = {navigation} navPoint = 'Powerful' eventName = 'Powerful'/> */}
                          </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


export default CorporativeManagement

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
