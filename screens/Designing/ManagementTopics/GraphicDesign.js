import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import HeaderForTopic from '../../../components/HeaderForTopic';
import BookTopicScreen from '../../../components/BookTopicScreen';
import PointTopic from '../../../components/PointTopic';

const GraphicDesign = ({navigation}) => {
    return (
        <View style = {styles.screen}>
            <View style = {styles.container}> 

                <HeaderForTopic navigation = {navigation} navPoint = 'DesignSubTopicScreen'/>    

                <Text style = {styles.headerTextStyle}>Graphic Design</Text>

                <View style = {styles.subContainer}> 

                    <View style = {styles.whiteBlock}> 
                        <Text style = {styles.headText}>What You Will Learn</Text>
                        <View style= {styles.line}> 
                        </View> 
                        <ScrollView style = {styles.ul} showsVerticalScrollIndicator = {false}> 
                            <PointTopic pointText = 'Basics of graphic design '/> 
                            <PointTopic pointText = 'How to create a brand identity and logo for your business'/> 
                            <PointTopic pointText = 'How to use fonts properly'/> 
                        </ScrollView>
                    </View>

                    <View> 
                        <Text style = {styles.whereText}>Where To Learn</Text>
                        <View style= {styles.lineBottom}>
                        </View>
                    </View> 
                    
                    
                    <ScrollView style = {styles.booksContainer} showsVerticalScrollIndicator = {false}>
                        <BookTopicScreen text = 'Graphic Design the New Basics. E. Lupton' number = '1' navigation = {navigation} navPoint = 'GraphicDesignTheNewBasics'  eventName = 'Graphic Design the New Basics'/>
                        <BookTopicScreen text = 'Logo Design Love. David Airey' number = '2' navigation = {navigation} navPoint = 'LogoDesignLove' eventName = 'Logo Design Love'/>
                        <BookTopicScreen text = 'Logo Modernism. Jens Müller' number = '3' navigation = {navigation} navPoint = 'LogoModernism' eventName = 'Logo Modernism'/>
                        <BookTopicScreen text = 'Type Matters. Jim Williams' number = '4' navigation = {navigation} navPoint = 'TypeMatters' eventName = 'Type Matters'/>
                        <BookTopicScreen text = 'Thinking With Type. Ellen Lupton' number = '5' navigation = {navigation} navPoint = 'ThinkingWithType' eventName = 'Thinking With Type' />
                        <BookTopicScreen text = 'Grid Systems. Josef Müller-Brockmann' number = '6' navigation = {navigation} navPoint = 'GridSystems' eventName = 'Grid Systems'/>
                        <BookTopicScreen text = 'Creating a Brand Identity. C. Slade-Br.' number = '7' navigation = {navigation} navPoint = 'CreatingBrandIdentity' eventName = 'Creating a Brand Identity'/>
                    </ScrollView>
                
                </View>
            </View> 
        </View>
    )
}


export default GraphicDesign

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
