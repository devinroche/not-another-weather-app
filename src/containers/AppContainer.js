import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getWeather } from '../redux/reducer';
import { getWeekForecast } from '../redux/week';
import PropTypes from 'prop-types';
import DayContainer from './DayContainer';
import ButtonContainer from './ButtonContainer';

class AppContainer extends Component {
    componentDidMount() {
        const { getCurrWeather, getWeekWeather } = this.props;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                getCurrWeather(position.coords.latitude, position.coords.longitude);
                getWeekWeather(position.coords.latitude, position.coords.longitude);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <DayContainer style={{ flex: 2 }} />
                <ButtonContainer style={{ flex: 1 }} navigation={navigation} />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    day: state.day,
    week: state.week,
});

const mapDispatchToProps = {
    getCurrWeather: getWeather,
    getWeekWeather: getWeekForecast,
};

AppContainer.propTypes = {
    getCurrWeather: PropTypes.func.isRequired,
    getWeekWeather: PropTypes.func.isRequired,
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
