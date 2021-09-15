import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';


const HeaderSubTopic = ({navigation}) => {
    return (
    <View style = {styles.head}> 
        <View style = {styles.header}> 
            <View> 
                <Icon 
                    name = "caret-left"
                    color = '#0E1B26'
                    type = 'font-awesome-5'
                    size = {45}
                    onPress={() => navigation.navigate('MainScreen')}
                /> 
            </View>
            
            <View> 
                <Icon 
                    name = "caret-right"
                    color = '#F2F2F2'
                    type = 'font-awesome-5'
                    size = {40}
                /> 
            </View>
        </View>

        <View style = {styles.textContainer}> 
            <Text style = {styles.headerTextAbove} >LearnBay</Text>
            <Text style = {styles.headerTextUnder} >Learn By Yourself</Text>
        </View>
            
    </View> 
    )
}



const baseStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '90%',
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf:"center"
    }, 
    head: {
        width: '100%',
        margin: 0,
        padding: 0
    } ,
    textContainer: {
        marginTop: 10,
        alignItems: "center",
        alignSelf: "center"
        
    },
    headerTextAbove: {
        color: '#0E1B26',
        fontSize: 36 ,
        fontFamily: 'montserrat-regular'   
    },
    headerTextUnder: {
        color: '#A4B0BF',
        fontSize: 15,
        fontFamily: 'roboto-regular' 
    },

})   

const styles = createStyles(
    baseStyles, 

    minHeight(700, {
        textContainer: {
        
        },
        headerTextAbove: {
            fontSize:40
        },
        headerTextUnder: {
            fontSize:17
        },
        
    })
)

export default HeaderSubTopic