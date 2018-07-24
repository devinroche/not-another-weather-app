import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';
import Chart from './Graph';


class DisplayWeek extends Component {
    render() {
        const { week } = this.props;
        const dateStore = {};
        week.list.map((el) => {
            const time = new Date(el.dt * 1000).getDate();
            const retVal = dateStore[time] ? dateStore[time].push(el.main.temp) : dateStore[time] = [el.main.temp];
            return retVal;
        });
        const finalArr = [];
        for (const field in dateStore) {
            const sortedArr = dateStore[field].sort((a, b) => a - b);
            finalArr.push({
                x: Math.round(sortedArr[sortedArr.length - 1] + sortedArr[0]) / 2,
                y: Math.round(sortedArr[sortedArr.length - 1]),
            });
        }
        return (
            <View>
                <Text style={styles.subheader}>
                    Weekly Forecast
                </Text>
                <View style={styles.bottom}>
                    <LinearGradient colors={['#ffdbf0', '#EFB1D6']} style={styles.gradientContainer}>
                        <Chart data={finalArr} />
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

export default DisplayWeek;

const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 40,
        shadowColor: '#7f8c8d',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.37,
        shadowRadius: 5,
    },
    gradientContainer: {
        alignItems: 'center',
        width: '90%',
        height: '50%',
    },
    subheader: {
        fontFamily: 'sfMedium',
        fontSize: 24,
        color: '#2c3e50',
        padding: 20,
        alignItems: 'flex-start',
    },
});


DisplayWeek.propTypes = {
    week: PropTypes.object.isRequired,
};
