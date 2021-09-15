import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'



const HeaderForBook = ({navigation}) => {
    return (
        <View style = {styles.iconContainer}> 
            <Icon
            name = "caret-left"
            color = '#F2F2F2'
            type = 'font-awesome-5'
            size = {40}
            onPress={() => navigation.goBack()}
            /> 
            <Icon 
            name = "home"
            color = '#F2F2F2'
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
        marginBottom: 10,
        marginTop: 10
    }
})

export default HeaderForBook