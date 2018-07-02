import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Header extends Component {
    render(){
        console.log(this.props)
        const { weather } = this.props
        return (
            <View style={styles.statusBar} >
                <View style={{flex: 1, backgroundColor: 'rebeccapurple'}}><Text>status bar placeholder</Text></View>
                <View style={{flex: 3, flexDirection: 'row'}}>
                    <View style={{flex: 3}}>
                        <Text style={styles.small}> {weather.weather[0].main}</Text>
                        <Text style={styles.small}> Wind: {weather.wind.deg}, {weather.wind.speed}</Text>
                        <Text style={styles.small}> Humidity: {weather.main.humidity}</Text>
                        <Text style={styles.small}> {weather.main.temp_min} - {weather.main.temp_max} </Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text>img</Text>
                    </View>
                </View>
            </View>
        )
    }
}
  
  export default Header

  const styles = StyleSheet.create({
    small: {
        fontFamily: 'vt323',
        fontSize: 36
    },
    statusBar: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
  });
  