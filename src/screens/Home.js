import React from 'react';
import { View } from 'react-native';
import AppContainer from '../containers/AppContainer';

// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
//                 <AppContainer {...this.props} />
//             </View>
//         );
//     }
// }

const HomeScreen = props => (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        <AppContainer {...props} />
    </View>
);

export default HomeScreen;
