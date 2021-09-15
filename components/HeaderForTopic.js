import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { Icon } from 'react-native-elements'



const HeaderForTopic = ({navigation, navPoint}) => {
    return (
        <View style = {styles.iconContainer}> 
            <Icon
            name = "caret-left"
            color = '#0E1B26'
            type = 'font-awesome-5'
            size = {40}
            onPress={() => navigation.navigate(navPoint)}
            /> 
            <Icon 
            name = "home"
            color = '#0E1B26'
            type = 'font-awesome-5'
            size = {28}
            onPress={() => navigation.navigate('MainScreen')}
            />         
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default HeaderForTopic