import React, {Component} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text, ImageBackground, Dimensions, Alert } from 'react-native';
import {withNavigation} from 'react-navigation';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        calendar: state.calendar,
        today: state.today
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

    birthdayHome = (hero) => (
        <View style={styles.hbcontainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Services')}>
               <ImageBackground source={require('../assets/images/hbday.png')} style={{width: '100%', height: '100%'}}>
                    <Text style={styles.congrats}>{hero.name+' '+hero.surname+'!!!'}</Text>
               </ImageBackground>
            </TouchableOpacity>
        </View>
    )

    render() {
        const hero = this.props.calendar.find(event => event.date == this.props.today);
        return (
            hero ? this.birthdayHome(hero) : this.regularHome()
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    hbcontainer: {
        flex: 1,

    },
    congrats:{
        transform: [{translateY: Dimensions.get('window').height * 0.6}, {translateX: Dimensions.get('window').width * 0.1}],
        fontFamily: 'IndieFlower',
        fontSize: 90,
        color: '#8b4dd6'
    }
});

export default connect(mapStateToProps)(withNavigation(Home2S))