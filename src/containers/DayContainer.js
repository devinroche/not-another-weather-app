import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getWeather} from './../redux/reducer';
import {getWeekForcast} from './../redux/week';

import Day from '../components/Day'

class WeatherContainer extends Component {
    render(){
        const { day } = this.props
        return (
            <View style={{flex: 1}}>
                {day.weather.main !== undefined ? <Day {...this.props} /> : ""}
            </View>
        )
    }
}
  
  const mapStateToProps = state => {
      console.log(state)
        return {
            day: state.day,
        };
  };
  
  const mapDispatchToProps = {
    getWeather,
    getWeekForcast
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
  