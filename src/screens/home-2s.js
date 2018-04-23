import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation'

class Home2S extends Component {

    render(){
        return(

                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Services')}>
                        <Image source={require('../assets/images/2s.png')}/>
                    </TouchableOpacity>
                </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});

export default withNavigation(Home2S)