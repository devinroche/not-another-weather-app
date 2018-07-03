import React from 'react';
import { Text, View } from 'react-native';
import WeekContainer from '../containers/WeekContainer';

class Forcast extends React.Component {
    render() {
      return (
        <View style={{flex: 1}}>
          <WeekContainer />
        </View>
      );
    }
}

export default Forcast

  