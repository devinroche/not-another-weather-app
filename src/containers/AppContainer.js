import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getWeather} from './../redux/reducer';
import {getWeekForcast} from './../redux/week';

import DayContainer from './DayContainer';
import WeekContainer from './WeekContainer';
import ButtonContainer from './ButtonContainer';

class AppContainer extends Component {
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.props.getWeather(position.coords.latitude, position.coords.longitude)
                this.props.getWeekForcast(position.coords.latitude, position.coords.longitude)
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }
    render(){
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <DayContainer style={{flex: 2}}/>
                <ButtonContainer style={{flex: 1}} navigation={this.props.navigation}/>
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
