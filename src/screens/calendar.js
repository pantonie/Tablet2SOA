import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {Component} from 'react';
import {withNavigation} from 'react-navigation'
import {Calendar as CalendarNative, Agenda, CalendarList} from 'react-native-calendars';
import {connect} from 'react-redux';
import composeCalendar from '../helpers/composeCalendar'

const mapStateToProps = state => {
    return {
        events: state.calendar,
    }
};

class Calendar extends Component{
    static navigationOptions = {
        //header: null,
        title: 'Calendar'
    };

    constructor(props){
        super(props);
        this.showDay = this.showDay.bind(this);
    }

    showDay(day){
       var rightDay = (day.day < 10 ? '0' + day.day : day.day) + '.' + (day.month < 10 ? '0' + day.month : day.month);
       var event = this.props.events.find((event) => event.date == rightDay);
       if (event) {
           Alert.alert(`${event.eventType}: ${event.name} ${event.surname}`)
       }
    }

    render(){
        var markedDates = composeCalendar(this.props.events);
        return(
            <CalendarList
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                //onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={12}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={12}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                //showScrollIndicator={true}
                markingType={'custom'}
                markedDates={
                    // {'2018-06-20': {textColor: 'green'},
                    //     '2018-06-25': {startingDay: true, color: '#aa1303'},
                    //     '2018-06-15': {marked: true, dotColor: '#aa1303'},
                    //     '2018-06-16': birthday,
                    //     '2018-06-23': {selected: true, endingDay: true, color: '#cc1222', textColor: 'gray', dotColor: 'green'},
                    //     '2018-06-21': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                    // }
                    markedDates
                }
                onDayPress = {(day) => {this.showDay(day) }}
                firstDay={1}

    />

        )
    }
}

export default connect(mapStateToProps)(withNavigation(Calendar));
