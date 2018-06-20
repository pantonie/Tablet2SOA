import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableNativeFeedback, Alert} from 'react-native';
import {withNavigation} from 'react-navigation'

class services extends Component {
    static navigationOptions = {
        //header: null,
        title: 'Services'
    };

    constructor(props) {
        super(props);
    }

    openService(name) {
        switch (name) {
            case 'Music':
                Alert.alert(`Ask Dmitry Kulikov when player will be ready :)`);
                break;
            case 'Login':
                Alert.alert('I need fingerprint scanner. Do you have one?');
                break;
            default:
                this.props.navigation.navigate(name);
        }
        //Alert.alert(name);
        //this.props.navigation.navigate(name);
    }

    render() {
        return (
            <View style={styles.outer_container}>
                <View style={styles.inner_container}>
                    <TouchableNativeFeedback onPress={() => this.openService('Music')}>
                        <View style={styles.item}>
                            <Image source={require('../assets/images/ico_music.png')} style={styles.image}
                                   resizeMode="center"/>
                            <Text style={styles.text}>Music</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.openService('Calendar')}>
                        <View style={styles.item}>

                            <Image source={require('../assets/images/ico_calendar.png')} style={styles.image}
                                   resizeMode="center"/>
                            <Text style={styles.text}>Calendar</Text>
                        </View>

                    </TouchableNativeFeedback>
                </View>
                <View style={styles.inner_container}>
                    <TouchableNativeFeedback onPress={() => this.openService('Trello')}>
                        <View style={styles.item}>
                            <Image source={require('../assets/images/ico_trello.png')} style={styles.image}
                                   resizeMode="center"/>
                            <Text style={styles.text}>Trello</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.openService('Login')}>
                        <View style={styles.item}>
                            <Image source={require('../assets/images/ico_fingerprint.png')} style={styles.image}
                                   resizeMode="center"/>
                            <Text style={styles.text}>Login</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outer_container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    inner_container: {
        flex: 2,
        flexDirection: 'row',
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 30
    },
    image: {
        //height: Dimensions.get('window').width / 10,
        //marginBottom: -40,
        flex: 1

    },
    text: {
        marginBottom: 40,
        fontSize: 24

    }
});

export default withNavigation(services);