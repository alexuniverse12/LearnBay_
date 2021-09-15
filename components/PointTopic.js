import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Button } from 'react-native-elements';
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from 'react-native-gesture-handler';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';

const PointTopic = ({pointText}) => {
    return (
    <View style = {styles.dotAndText}> 
        <View style = {styles.dotStyle}> 
        </View>
        
        <Text style = {styles.bottomTextStyle}>{pointText}</Text>
    </View>
    )
}


const baseStyles = StyleSheet.create({
    dotAndText : {
        flexDirection: 'row',
        color:'#F2F2F2',
        justifyContent: "flex-start",
        alignItems: "flex-start",  
        marginBottom: 5,
        marginLeft:0,
        width: '87%'
        
        
    },
    bottomTextStyle: {
        color:'#F2F2F2',
        fontSize: 18,
        lineHeight: 25,
        alignSelf: "center"
    },
    dotStyle: {
        width: 9,
        height: 9, 
        backgroundColor: '#C4F2F2',
        borderRadius: 50,
        marginRight: 9,
        marginTop: 10,  
       
    },
 
    
})

const styles = createStyles(
    baseStyles, 

    minHeight(700, {       
        bottomTextStyle: {
            fontSize: 20,
            lineHeight: 27,
        },
        dotStyle: {
            width: 10,
            height: 10, 
            marginRight: 12
        
        },
    })
)

export default PointTopic