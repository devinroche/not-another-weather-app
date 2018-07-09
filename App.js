import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Font } from 'expo';
import AppContainer from './src/containers/AppContainer';
import HomeScreen from './src/screens/Home'
import { createStackNavigator } from 'react-navigation';
import Forecast from './src/screens/Forecast'

export default class App extends React.Component {
  componentDidMount(){
    Font.loadAsync({
      "vt323": require('./assets/fonts/VT323-Regular.ttf'),
      "sfBlack": require('./assets/fonts/SF-Pro-Display-Black.otf'),
      "sfLight": require('./assets/fonts/SF-Pro-Display-Light.otf'),
      "sfMedium": require('./assets/fonts/SF-Pro-Display-Medium.otf'),
      "sfRegular": require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    })

  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const Navigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Forecast: { screen: Forecast },
},{
    initialRouteName: 'Home',
});
