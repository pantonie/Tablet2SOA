import loadTrelloListsApi from '../api/loadTrelloLists'
import * as types from "./actionTypes";

function loadTrelloListsSuccess (data) {
    return {type: types.LOAD_TRELLO_LISTS_SUCCESS, data}
}
function loadTrelloListSuccess (data, id) {
    let list = {};
    list.data = data;
    list.id = id;
    return {type: types.LOAD_TRELLO_LIST_SUCCESS, list}
}

export function loadTrelloLists(){
    return function(dispatch, getState){
        return loadTrelloListsApi.loadLists(getState()).then(data => {
            dispatch(loadTrelloListsSuccess(data.data));
        }).catch(error => {
            throw(error);
        })
    }
}

export function loadTrelloList(id){
    return function (dispatch, getState){
        return loadTrelloListsApi.loadList(getState(), id).then(data => {
            dispatch(loadTrelloListSuccess(data.data, id));
        }).catch(error => {
            trow(error);
        })
    }
}

