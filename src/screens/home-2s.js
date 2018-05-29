import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        calendar: state.calendar
    }
};


class Home2S extends Component {

    constructor(props) {
        super(props);
    }


    regularHome = () => (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Services')}>
                <Image source={require('../assets/images/2s.png')}/>
            </TouchableOpacity>
        </View>
    );

    bithdayHome = (hero) => (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Services')}>
               <Text>Name: {hero.name+' '+hero.surname}</Text>
            </TouchableOpacity>
        </View>
    )

    render() {

        const hero = this.props.calendar.find(event => event.date == '10.04');
        return (
            hero ? this.bithdayHome(hero) : this.regularHome();
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

export default connect(mapStateToProps)(withNavigation(Home2S))