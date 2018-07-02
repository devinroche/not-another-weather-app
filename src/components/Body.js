import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Body extends Component {
    render(){
        console.log(this.props)
        const { weather } = this.props
        return (
            <View style={styles.mid}>
                <Text style={styles.header}>{weather.main.temp}&#176;F</Text> 
            </View>
        )
    }
}
  
  export default Body

  const styles = StyleSheet.create({
    header: {
      fontFamily: 'vt323',
      fontSize: 64
    },
    mid: {
        flex: 2,
        backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  