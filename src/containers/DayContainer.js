import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Day from '../components/Day';

const DayContainer = (props) => {
    const { day } = props;
    return (
        <View style={{ flex: 3 }}>
            {day.weather.main !== undefined ? <Day {...props} /> : ''}
        </View>
    );
};

const mapStateToProps = state => ({
    day: state.day,
});

export default connect(mapStateToProps)(DayContainer);

DayContainer.propTypes = {
    day: PropTypes.object.isRequired,
};
