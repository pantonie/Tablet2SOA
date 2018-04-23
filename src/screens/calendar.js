import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'

class Calendar extends Component{
    render(){
        return(
            <View>
                <Text>Calendar component</Text>
            </View>
        )
    }
}

export default withNavigation(Calendar);
