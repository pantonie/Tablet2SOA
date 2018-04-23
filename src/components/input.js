import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

class Input extends Component {
    state = {
        text: '',
    };

    onChangeText = (text) => this.setState({text});

    onSubmit = () => {
        const {onSubmitEditing} = this.props;
        const {text} = this.state;

        if (!text) return;

        onSubmitEditing(text);
        this.setState({text: ''});
    };

    render(){
        const {placeholder} = this.props;
        const {text} = this.state;

        return(
            <View style={styles.container}>
                <SearchBar
                    containerStyle={styles.container}
                    onChangeText={this.onChangeText}
                    value={text}
                    placeholder={placeholder}
                    platform='android'
                    lightTheme
                    inputStyle={styles.input}
                    onSubmitEditing={this.onSubmit}
                    icon = {{ color: '#3B6693', name: 'search' }}
                    //icon={<Icon name={'play'} size={30} color='#cf022b' style={styles.icon}/>}


                />
            </View>

        )
    }
};

const styles=StyleSheet.create({
    input: {
        //paddingLeft: 45,
        height: 40,
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: 'white',
        paddingLeft: 15
        //margin: 10
    }
});

export default Input;