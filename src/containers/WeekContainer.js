import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {getWeather} from './../redux/reducer';
import {getWeekForcast} from './../redux/week';

import Week from '../components/Week'

class WeatherContainer extends Component {
    render(){
        const { week } = this.props
        return (
            <View style={{flex: 1}}>
                {week.list !== undefined ? <Week {...this.props} /> : ""}
            </View>
        )
    }
}
  
  const mapStateToProps = state => {
      console.log(state)
        return {
            week: state.week
        };
  };
  
  const mapDispatchToProps = {
    getWeekForcast
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
  