import getDayMonth from '../helpers/composeDate';

export default initialState = {
    greeting: 'Hello 2S lab!',
    songs: [
        {name: 'SomeSong', id: 123, artist: 'Name of artist here'},
        {name: 'Another Song', id: 124, artist: 'Name of another artist here'}
        ],
    apiSettings:
        {
            calendar: 'http://10.30.200.101:1337/calendar',
            music: 'http://127.0.0.1/',
            trello: 'http://10.30.200.101:3001'
        },
    calendar: [],
    trello: {
        lists: [],
        cards: []
    },
    today: getDayMonth()
}