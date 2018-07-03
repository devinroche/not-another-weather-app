import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Week from '../components/Week'

class WeekContainer extends Component {
    render(){
        const { week } = this.props
        console.log(week)
        return (
            <View style={{flex: 1}}>
                {week.list && week.list.length > 0 ? <Week {...this.props} /> : ""}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        week: state.week
    };
};

export default connect(mapStateToProps)(WeekContainer);