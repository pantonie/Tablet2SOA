import axios from 'axios';

class loadCalendarApi {
    static loadWholeCalendar (reduxState){
        const url = reduxState.apiSettings.calendar+'?limit=500';
        return axios.get(url);
    }
}

export default loadCalendarApi;