import React from 'react';
import {
    View, Text, StyleSheet, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';

const Box = (props) => {
    const { values, navigation } = props;
    return (
        <TouchableHighlight
            style={[styles.container, { overflow: 'hidden' }]}
            activeOpacity={1}
            underlayColor="white"
            onPress={() => navigation.navigate('Forecast')}
        >
            <View style={styles.container}>
                <LinearGradient colors={values.colors} style={styles.gradientContainer}>
                    <Text style={styles.header}>
                        {values.title}
                    </Text>
                </LinearGradient>
            </View>
        </TouchableHighlight>
    );
};

export default Box;

const styles = StyleSheet.create({
    header: {
        fontFamily: 'sfLight',
        fontSize: 24,
        color: '#ffffff',
    },
    container: {
        width: 160,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
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
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});

Box.propTypes = {
    values: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
};
