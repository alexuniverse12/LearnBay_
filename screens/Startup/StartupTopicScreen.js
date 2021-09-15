import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from 'react-native-gesture-handler';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import HeaderForTopic from '../../components/HeaderForTopic';
import BookTopicScreen from '../../components/BookTopicScreen';
import PointTopic from '../../components/PointTopic';

const StartupTopicScreen = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'MainScreen'/>    

                <Text style = {styles.headerTextStyle}>Startup</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'The core principles to start your startup and succeed'/> 
                            <PointTopic pointText = 'How and where to find ideas'/> 
                            <PointTopic pointText = 'General concepts of a startup product development'/> 
                            <PointTopic pointText = 'How to get traction to your product'/> 
                            <PointTopic pointText = 'How to create habit forming products '/> 
                            <PointTopic pointText = 'How to make people to adopt your innovation'/> 
                            <PointTopic pointText = 'How to create a prototype of features or products and test them in 5 days '/> 
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                        <BookTopicScreen text = 'Lean Startup. Eric Rice' number = '1' navigation = {navigation} navPoint = 'LeanStartup'  eventName = 'Lean Startup'/>
                        <BookTopicScreen text = 'Traction. Gabriel Weinberg' number = '2' navigation = {navigation} navPoint = 'Traction' eventName = 'Traction'/>
                        <BookTopicScreen text = 'Blue Ocean Strategy. W. Chan Kim' number = '3' navigation = {navigation} navPoint = 'BlueOceanStrategy' eventName = 'Blue Ocean Strategy'/>
                        <BookTopicScreen text = 'Sprint. Jake Knapp' number = '4' navigation = {navigation} navPoint = 'Sprint' eventName = 'Sprint'/>
                        <BookTopicScreen text = 'Crossing The Chasm. Geoffrey A. Moore' number = '5' navigation = {navigation} navPoint = 'CrossingTheChasm' eventName = 'Crossing The Chasm' />
                        <BookTopicScreen text = 'Hooked. Nir Eyal' number = '6' navigation = {navigation} navPoint = 'Hooked' eventName = 'Hooked'/>
                    </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


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

export default StartupTopicScreen