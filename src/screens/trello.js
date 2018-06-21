import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {List, ListItem, Header, Icon} from 'react-native-elements';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'
import {connect} from 'react-redux';
import {loadTrelloList, setTrelloCurrentList} from "../actions/loadTrelloActions";

const mapStateToProps = state => {
    return {
        trello: state.trello
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onListClick: id => {
            dispatch(loadTrelloList(id));
        }
    }
}


class Trello extends Component{
    static navigationOptions = {
        //header: null,
        title: 'Trello'
    };
    constructor(props){
        super(props);
        this.state = {
            open: '',
            trello: []
        };
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    onClickHandle(id){
        if (!this.props.trello.cards[id]) this.props.onListClick(id);
        if (this.state.open == id)
            this.setState({open: ''})
        else
            this.setState({open: id});

    }

    componentWillMount(){
        this.setState({trello: [...this.props.trello.lists, ...this.props.trello.cards]})
    }
    componentWillReceiveProps(nextProps){
        this.setState({trello: [...nextProps.trello.lists, ...nextProps.trello.cards]});
    }

    render(){

        return(
            <View>
                <Header
                    centerComponent={{text: 'Office improvements trello board', style: {fontSize: 24}}}
                    backgroundColor='white'
                />
            <List>
                <FlatList
                    data={this.state.trello}
                    renderItem={({item})=>{
                        if (this.state.open == item.id && item.type == 'list'){
                            let viewCards = this.state.trello.filter(itm => itm.id == this.state.open && itm.type == 'cards')[0].data;
                            let arr = [];
                            arr[0] = item;
                            arr = [...arr, ...viewCards];

                            return(
                                arr.map((card) => {
                                    if (card.type == 'list') {
                                        return (
                                            <ListItem
                                                title={card.name}
                                                leftIcon = {{name: 'keyboard-arrow-up'}}
                                                onPress={() => this.onClickHandle(card.id)}
                                                hideChevron
                                            />)
                                    } else {
                                    return(
                                        <ListItem
                                            title={
                                                <Text style={{fontSize: 14, color: ''}}>
                                    {card.name}
                                                </Text>
                                            }
                                            subtitle={
                                                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                                                    <Icon name='thumb-up' size={16} color='#ef7d00'/>
                                                    <Text>{'  ' + card.votes}</Text>
                                                </View>
                                            }
                                            containerStyle = {{backgroundColor: '#F1F1F1', paddingLeft: 30  }}
                                            hideChevron
                                        />
                                    )}
                                })
                            )

                        } else if ( this.state.open != item.id && item.type == 'list' ){
                            return(
                                <ListItem
                                    title={item.name}
                                    onPress={() => this.onClickHandle(item.id)}
                                    leftIcon = {{name: 'keyboard-arrow-down'}}
                                    hideChevron
                                />
                            )
                        }
                    }}
                    keyExtractor={(item)=> `${item.id}_${item.type}`}
                 />
            </List>
           </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Trello));
