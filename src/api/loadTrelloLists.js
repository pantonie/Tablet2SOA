import axios from 'axios';

class loadTrelloListsApi {
    static loadLists (reduxState){
        const url = reduxState.apiSettings.trello+'/lists';
        return axios.get(url);
    }
    static loadList (reduxState, id){
        const url = reduxState.apiSettings.trello+'/list/'+id;
        return axios.get(url);
    }
}

export default loadTrelloListsApi;