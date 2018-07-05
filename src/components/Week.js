import React, { Component } from 'react';
import { View } from 'react-native';
import DisplayWeek from './DisplayWeek';

class Week extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DisplayWeek {...this.props} />
            </View>
        );
    }
}

export default Week;
