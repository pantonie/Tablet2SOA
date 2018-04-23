import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import Input from '../components/input';
import SongsList from '../components/songsList'

const mapStateToProps = function(state){
    return {
        songs: state.songs
    }
};

class Music extends Component{

    static navigationOptions = {
        title: 'Music'
    };

    playSong = (id) => {
        Alert.alert(id);
    };

    musicRequest = (text) => {
        Alert.alert(`you requested ${text}`)
    };

    render(){
        return(
            <View style={styles.container}>
                <Input
                    placeholder={'type song name or artist name'}
                    onSubmitEditing={this.musicRequest}
                />
                <SongsList
                    list={this.props.songs}
                    playSong={this.playSong}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(withNavigation(Music));
//export default withNavigation(Music);

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})