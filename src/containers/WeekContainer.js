import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Week from '../components/Week';

const WeekContainer = (props) => {
    const { week } = props;
    return (
        <View style={{ flex: 4 }}>
            {week.week.cod === '200' ? <Week {...week} /> : ''}
        </View>
    );
};

const mapStateToProps = state => ({
    week: state.week,
});

export default connect(mapStateToProps)(WeekContainer);

WeekContainer.propTypes = {
    week: PropTypes.object.isRequired,
};
