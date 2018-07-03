import React from 'react';
import { Text, View } from 'react-native';
import AppContainer from './../containers/AppContainer';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <AppContainer {...this.props}/>
        </View>
      );
    }
}

export default HomeScreen

  