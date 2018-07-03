import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Day from '../components/Day'

class DayContainer extends Component {
    render(){
        const { day } = this.props
        return (
            <View style={{flex: 3}}>
                {day.weather.main !== undefined ? <Day {...this.props} /> : ""}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        day: state.day,
    };
};

export default connect(mapStateToProps)(DayContainer);