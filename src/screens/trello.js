import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'

class Trello extends Component{
    render(){
        return(
            <View>
                <Text>Trello component</Text>
            </View>
        )
    }
}

export default withNavigation(Trello);
