import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Week from '../components/Week';

// class WeekContainer extends Component {
//     render() {
//         const { week } = this.props;
//         return (
//             <View style={{ flex: 4 }}>
//                 {week.week.cod === '200' ? <Week {...this.props.week} /> : ''}
//             </View>
//         );
//     }
// }

const WeekContainer = (props) => {
    const { week } = props;
    return (
        <View style={{ flex: 4 }}>
            {week.week.cod === '200' ? <Week {...props.week} /> : ''}
        </View>
    );
};

const mapStateToProps = state => ({
    week: state.week,
});

export default connect(mapStateToProps)(WeekContainer);
