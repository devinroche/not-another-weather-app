import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DisplayWeek from './DisplayWeek';

class Week extends Component {
    render(){
        return (
            <View style={{flex: 1}}>
                <Text>Hi</Text>
                <DisplayWeek {...this.props}/>
            </View>
        )
    }
}

export default Week
