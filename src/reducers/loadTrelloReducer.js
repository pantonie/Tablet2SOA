import * as types from '../actions/actionTypes';
import initialState from '../store/InitialState';

export default function loadTrelloReducer (state = initialState.trello, action){
    switch (action.type) {
        case types.LOAD_TRELLO_LISTS_SUCCESS:
            return Object.assign({}, state, {lists: action.data});
        case types.LOAD_TRELLO_LIST_SUCCESS:
            let cards = [];
            if (state.cards.filter(item => item.id == action.list.id).length == 0 || state.cards.length == 0){
                let list = {};
                list.id = action.list.id;
                list.type = 'cards';
                list.data = action.list.data;
                let add = [];
                add.push(list);
                //console.log(add);
                cards = [...state.cards, ...add];

            } else {
                cards = state.cards;
            }
            //console.log(Object.assign({}, state, {cards: cards}));
            return Object.assign({}, state, {'cards': cards});
        default:
            return state;
    }
}