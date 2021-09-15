import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import HeaderForTopic from '../../../components/HeaderForTopic';
import BookTopicScreen from '../../../components/BookTopicScreen';
import PointTopic from '../../../components/PointTopic';

const SoftMarketingTopicScreen = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'MarketingSubTopicScreen'/>    

                <Text style = {styles.headerTextStyle}>Soft Marketing</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'Core principles of the new era of marketing'/> 
                            <PointTopic pointText = 'How to compel information and make people to remember it'/> 
                            <PointTopic pointText = 'How to use word of mouth to growth your company'/> 
                            <PointTopic pointText = 'How to acquire trust of the customers'/> 
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                        <BookTopicScreen text = 'This is Marketing.  Seth Godin' number = '1' navigation = {navigation} navPoint = 'ThisIsMarketing'  eventName = 'This Is Marketing'/>
                        <BookTopicScreen text = 'The Language of Trust Michael Maslanskiy' number = '2' navigation = {navigation} navPoint = 'TheLanguageOfTrust' eventName = 'The Language Of Trust'/>
                        <BookTopicScreen text = 'Contagious. Jonah Berger' number = '3' navigation = {navigation} navPoint = 'Contagious' eventName = 'Contagious'/>
                        <BookTopicScreen text = 'Made to stick. Chip Heath' number = '4' navigation = {navigation} navPoint = 'MadeToStick' eventName = 'Made to stick'/>
                    </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


export default SoftMarketingTopicScreen

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
