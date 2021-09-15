import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createStyles, maxHeight, minHeight } from 'react-native-media-queries';
import BookForSubTopic from '../../components/BookForSubTopic'
import HeaderSubTopic from '../../components/HeaderSubTopic';

const MarketingSubTopicScreen = ({navigation}) => {
    return (
        <View style = {styles.screen}>
           
            <HeaderSubTopic navigation =  {navigation} />
            
            <View style = {styles.container}> 
                <BookForSubTopic text = 'Soft Marketing' navPoint = 'SoftMarketingTopicScreen' navigation = {navigation} eventName = 'soft marketing' /> 
                <BookForSubTopic text = 'Copywriting' navPoint = 'CopywritingMarketingTopicScreen' navigation = {navigation} eventName = 'copywriting' /> 
            </View>
          
        </View>
    )
}


const baseStyles = StyleSheet.create({
    screen: {
        paddingTop: 45, 
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        backgroundColor: '#F2F2F2',
        alignItems: "center",
    },
    container: {
        alignSelf: 'center',
        height: '100%',
        width: '90%' ,
        
        alignItems: "center",
    }, 
 
  
})   

const styles = createStyles(
    baseStyles, 

   
)

export default MarketingSubTopicScreen