import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
    render() {
        const { day } = this.props;
        return (
            <View style={styles.statusBar}>
                <View style={{ flex: 1, backgroundColor: 'rebeccapurple' }}>
                    <Text />
                </View>
                <View style={{ flex: 3, flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                        <Text style={styles.small}>
                            {day.weather.weather[0].main}
                        </Text>
                        <Text style={styles.small}>
                            Wind: {day.weather.wind.deg} {day.weather.wind.speed}
                        </Text>
                        <Text style={styles.small}>
                            {' '}
                                Humidity:
                            {day.weather.main.humidity}
                        </Text>
                        <Text style={styles.small}>
                            {' '}
                            {day.weather.main.temp_min}
                            {' '}
-
                            {' '}
                            {day.weather.main.temp_max}
                            {' '}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>
                            img
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    small: {
        fontFamily: 'vt323',
        fontSize: 24,
    },
    statusBar: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
});
