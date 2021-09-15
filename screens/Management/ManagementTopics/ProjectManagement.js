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

const ProjectManagement = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'ManagementSubTopicScreen'/>    

                <Text style = {styles.headerTextStyle}>Project  Management</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'How to manage any software development '/> 
                            <PointTopic pointText = 'How to manage a manufacture'/> 
                            <PointTopic pointText = 'Strategy that lets you an ability to answer to the most critical questions '/> 
                            <PointTopic pointText = 'Productivity methodology for the business and life'/> 
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                    <BookTopicScreenTest
                        text = 'Learning Agile. Andrew Stellman'
                        number = '1' 
                        navigation = {navigation}  
                        navPoint = 'ProjectManagement' 
                        linkForAmazon = 'https://amzn.to/2RCBTsy' 
                        eventName = 'Project Management Topic Screen via Learning Agile from Favorites' 
                        whatToLearn = 'Anrdew Stellman will explain the core principles of agile and will sort the main methodologies out' 
                        whyToRead = 'If you want to take your process of a software development to the next level and improve efficiency, then you should definitely read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Learning Agile' 
                        nameOfAuthor='Andrew Stellman' 
                        /> 
                        <BookTopicScreenTest
                        text = 'Scrum. Jeff Sutherland'
                        number = '2' 
                        navigation = {navigation}  
                        navPoint = 'ProjectManagement' 
                        linkForAmazon = 'https://amzn.to/3cp3xTz' 
                        eventName = 'Project Management Topic Screen via Scrum. Jeff Sutherland from favorites' 
                        whatToLearn = 'Jeff Sutherland, one of scrum’s founders, explains the scrum methodology in detail' 
                        whyToRead = 'If you want to be able do the management strategy that allows Amazon to launch a new feature on its website every day, then you should read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Scrum' 
                        nameOfAuthor='Jeff Sutherland' 
                        />
                        <BookTopicScreenTest
                        text = 'Kanban. Eric Brechner'
                        number = '3' 
                        navigation = {navigation}  
                        navPoint = 'ProjectManagement' 
                        linkForAmazon = 'https://amzn.to/2RDxA07' 
                        eventName = 'Project Management Topic Screen via Kanban. Eric Brechner from Favorites' 
                        whatToLearn = 'Everything is trite here – the book explains in detail what Kanban is and how to use it' 
                        whyToRead = 'If you do want to have an alternative to scrum methodology and understand what is better for you, you have to read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Kanban' 
                        nameOfAuthor='Eric Brechner' 
                        />
                        <BookTopicScreenTest
                        text = 'Lean Production. Pascal Dennis'
                        number = '4' 
                        navigation = {navigation}  
                        navPoint = 'ProjectManagement' 
                        linkForAmazon = 'https://amzn.to/2ZTppBf' 
                        eventName = 'Project Management Topic Screen via Lean Production. Pascal Dennis from favorites' 
                        whatToLearn = 'The book gives a clear overview of the structure and tools of the Lean production system' 
                        whyToRead = 'To understand the principles of lean management on manufacture' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Lean Production' 
                        nameOfAuthor='Pascal Dennis' 
                        />
                        <BookTopicScreenTest
                        text = 'Sprint. Jake Knapp'
                        number = '5' 
                        navigation = {navigation}  
                        navPoint = 'ProjectManagement' 
                        linkForAmazon = 'https://amzn.to/3hHmZLY' 
                        eventName = 'Project Management Topic Screen via Sprint. Jake Knapp from favorites' 
                        whatToLearn = 'The author will teach you how to move from an idea of your product to a prototype within five days' 
                        whyToRead = 'If you want a practical guide to answering critical questions for your business, then you should read this book' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Sprint' 
                        nameOfAuthor='Jake Knapp' 
                        />
                        <BookTopicScreenTest
                        text = 'Getting Things Done. David Allen'
                        number = '6' 
                        navigation = {navigation}  
                        navPoint = 'ProjectManagement' 
                        linkForAmazon = 'https://amzn.to/35R9iYU' 
                        eventName = 'Project Management Topic Screen via Getting Things Done. David Allen from favorites' 
                        whatToLearn = 'The author will explain a productivity methodology based on a few deceptively simple concepts' 
                        whyToRead = 'To be able to manage business or life tasks in the most effective way. To save a lot of time and be 10 times more productive' 
                        noteForBook = 'Nothing Special'
                        nameOfBook = 'Getting Things Done' 
                        nameOfAuthor='David Allen' 
                        />
                        {/* <BookTopicScreen text = 'Learning Agile. Andrew Stellman' number = '1' navigation = {navigation} navPoint = 'LearningAgile'  eventName = 'Learning Agile'/>
                        <BookTopicScreen text = 'Scrum. Jeff Sutherland' number = '2' navigation = {navigation} navPoint = 'Scrum' eventName = 'Scrum'/>
                        <BookTopicScreen text = 'Kanban. Eric Brechner' number = '3' navigation = {navigation} navPoint = 'Kanban' eventName = 'Kanban'/>
                        <BookTopicScreen text = 'Lean Production. Pascal Dennis' number = '4' navigation = {navigation} navPoint = 'LeanProductionSimplified' eventName = 'Lean Production Simplified'/>
                        <BookTopicScreen text = 'Sprint. Jake Knapp' number = '5' navigation = {navigation} navPoint = 'SprintManagement' eventName = 'SprintManagement' />
                        <BookTopicScreen text = 'Getting Things Done. David Allen' number = '6' navigation = {navigation} navPoint = 'GettingThingsDone' eventName = 'Getting Things Done'/> */}
                    </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


export default ProjectManagement

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
