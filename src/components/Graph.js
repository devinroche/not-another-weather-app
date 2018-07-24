import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, XAxis, Grid } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';
import * as scale from 'd3-scale';
import PropTypes from 'prop-types';


const Chart = (props) => {
    const { data } = props;
    const plotPts = data.map(el => el.y);
    const labelPts = data.map(el => el.x);
    return (
        <View style={styles.main}>
            <BarChart
                style={{ height: 200, width: 250 }}
                data={ plotPts }
                spacingInner={0.65}
                svg={{
                    fill: '#ffffff',
                }}
                contentInset={{ top: 30, bottom: 10 }}
                gridMin={0}
            />
            <XAxis
                style={{ marginTop: 5 }}
                data={ labelPts }
                formatLabel={ value => `${data[value].y}\u00B0` }
                svg={{ fontSize: 13, fill: 'white' }}
                contentInset={{ left: 10, right: 10 }}

            />
        
        </View>
    );
};
export default Chart;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: 300, 
        paddingTop: 50,
        alignSelf: 'center',
    }
});

Chart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
};
