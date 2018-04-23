import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'

class Login extends Component{
    render(){
        return(
            <View>
                <Text>Login component</Text>
            </View>
        )
    }
}

export default withNavigation(Login);
