import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Feather';

class SongsList extends Component {

    renderSong = (song) => {
        const {playSong} = this.props;
        return (
            <ListItem
                key={song.id}
                title={song.name}
                subtitle={song.artist}
                leftIcon={<Icon name={'play'} size={30} color='#cf022b' style={styles.icon}/>}
                onPress={() => playSong(song.id.toString())}
                hideChevron
            />

        )
    };

    render() {
        const {list} = this.props;
        return (
            <View>
                {list.map(this.renderSong)}
            </View>
        )
    }
};

export default SongsList

const styles = StyleSheet.create({
    song: {
        backgroundColor: 'whitesmoke',
        marginBottom: 15,
        padding: 15
    },
    icon: {
        padding: 15,
        paddingRight: 30
    }
});

