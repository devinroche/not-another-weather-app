import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import boxContent from '../components/NavButtons/config';
import Box from '../components/NavButtons/Box';

const ButtonContainer = (props) => {
    const { week, navigation } = props;
    return (
        <View style={styles.container}>
            { week.week.cod === '200'
                ? boxContent.map((el, idx) => <Box values={el} key={idx} navigation={navigation} />)
                : ''
            }
        </View>
    );
};

const mapStateToProps = state => ({
    week: state.week,
});

export default connect(mapStateToProps)(ButtonContainer);

const styles = StyleSheet.create({
    container: {
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

ButtonContainer.propTypes = {
    week: PropTypes.object.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
