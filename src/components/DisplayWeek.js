import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BarChartExample from './Graph';

class DisplayWeek extends Component {
    render() {
        const { week } = this.props;
        const dateStore = {};
        week.list.map((el) => {
            const time = new Date(el.dt * 1000).getDate();
            return dateStore[time]
                ? dateStore[time].push(el.main.temp)
                : dateStore[time] = [el.main.temp];
        });
        const finalArr = [];
        for (const field in dateStore) {
            const sortedArr = dateStore[field].sort((a, b) => a - b);
            finalArr.push({
                x: Math.round(sortedArr[sortedArr.length - 1] + sortedArr[0]) / 2,
                y: Math.round(sortedArr[sortedArr.length - 1] - sortedArr[0]),
            });
        }

        return (
            <View style={styles.bottom}>
                <BarChartExample data={finalArr} />
            </View>
        );
    }
}

export default DisplayWeek;

const styles = StyleSheet.create({
    bottom: {
        flex: 1,
    },
});
