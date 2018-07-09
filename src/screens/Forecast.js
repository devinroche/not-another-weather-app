import React from 'react';
import { View } from 'react-native';
import WeekContainer from '../containers/WeekContainer';

const Forecast = () => (
    <View style={{ flex: 1,  backgroundColor: '#ffffff' }}>
        <WeekContainer />
    </View>
);

export default Forecast;
