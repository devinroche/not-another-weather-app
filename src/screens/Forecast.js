import React from 'react';
import { View } from 'react-native';
import WeekContainer from '../containers/WeekContainer';

// class Forecast extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <WeekContainer />
//             </View>
//         );
//     }
// }

const Forecast = () => (
    <View style={{ flex: 1 }}>
        <WeekContainer />
    </View>
);

export default Forecast;
