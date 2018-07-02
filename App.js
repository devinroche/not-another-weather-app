import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Font } from 'expo';
import AppContainer from './src/containers/AppContainer';


export default class App extends React.Component {
  componentDidMount(){
    Font.loadAsync({
      "vt323": require('./assets/fonts/VT323-Regular.ttf'),
    })
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}