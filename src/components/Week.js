import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Footer from './Footer';
import Header from './Header'
import Body from './Body'

class Week extends Component {
    render(){
        return (
            <View style={{flex: 1}}>
                <Footer {...this.props.day}/>
            </View>
        )
    }
}
  
export default Week
  