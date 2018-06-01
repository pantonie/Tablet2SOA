export default function(events){

    var year = (new Date()).getFullYear();
    var calendar = {};

    const birthday = {
        customStyles: {
            container: {
                backgroundColor: '#ef7d00',
            },
            text: {
                color: '#cf022b',
                fontWeight: 'bold'
            },
        },
    };

    console.log('events: ', events);


    for (var i = 0; i<events.length; i++){
        let day = events[i].date.split('.')[0];
        let month = events[i].date.split('.')[1];
        if(events[i].eventType = 'birthday'){
            calendar[year-1 + '-' + month + '-' + day] = birthday;
            calendar[year + '-' + month + '-' + day] = birthday;
            calendar[year+1 + '-' + month + '-' + day] = birthday;
        } else {
            calendar[year+1 + '-' + month + '-' + day] = '';
        }

    }
    return calendar;

}