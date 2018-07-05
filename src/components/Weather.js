import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header';
import Body from './Body';

class Weather extends Component {
    render() {
        const {day} = this.props
        return (
            <View style={{ flex: 1 }}>
                <Header {day} />
                <Body {day} />
            </View>
        );
    }
}

export default Weather;
