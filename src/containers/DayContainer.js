import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Day from '../components/Day';

// class DayContainer extends Component {
//     render() {
//         const { day } = this.props;
//         return (
//             <View style={{ flex: 3 }}>
//                 {day.weather.main !== undefined ? <Day {...this.props} /> : ''}
//             </View>
//         );
//     }
// }

const DayContainer = (props) => {
    const { day } = props;
    return (
        <View style={{ flex: 3 }}>
            {day.weather.main !== undefined ? <Day {props} /> : ''}
        </View>
    )
}

const mapStateToProps = state => ({
    day: state.day,
});

export default connect(mapStateToProps)(DayContainer);
