import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Header from './Header'
import Body from './Body'

class Weather extends Component {
    render(){
        return (
            <View style={{flex: 1}}>
                <Header {...this.props.day}/>
                <Body {...this.props.day}/>
            </View>
        )
    }
}
  
export default Weather
  