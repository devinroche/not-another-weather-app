import React from 'react';
import { View } from 'react-native';
import DisplayWeek from './DisplayWeek';

const Week = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DisplayWeek {...props} />
        </View>
    );
}

export default Week;
