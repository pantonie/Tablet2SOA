import axios from 'axios';

function loadSongs {
    static loadSongsByName (reduxState, name) {
        const url = reduxState.ip + `music/${name}`;
        return axios.get(url);
    }

}

export default loadSongs;