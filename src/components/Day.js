import React, { Component } from 'react';
import { View } from 'react-native';
import Body from './Body';

// class Day extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <Body {...this.props} />
//             </View>
//         );
//     }
// }

const Day = props => (
    <View style={{ flex: 1 }}>
        <Body {...this.props} />
    </View>
);
export default Day;
