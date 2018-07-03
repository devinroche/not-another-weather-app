import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getWeather} from './../redux/reducer';
import {getWeekForcast} from './../redux/week';

import DayContainer from './DayContainer';
import WeekContainer from './WeekContainer';

class AppContainer extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.getWeather(position.coords.latitude, position.coords.longitude)
                this.props.getWeekForcast(position.coords.latitude, position.coords.longitude)
            },
            (error) => this.setState({ error: error.message }),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    render(){
        return (
            <View style={{flex: 1}}>
                <DayContainer style={{flex: 2}}/>
                <WeekContainer style={{flex: 1}}/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        day: state.day,
        week: state.week
    };
};

const mapDispatchToProps = {
    getWeather,
    getWeekForcast
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
