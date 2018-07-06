import React from 'react';
import { View } from 'react-native';
import Body from './Body';

const Day = props => (
    <View style={{ flex: 1 }}>
        <Body {...props} />
    </View>
);
export default Day;
