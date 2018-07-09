import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import * as scale from 'd3-scale'
import PropTypes from 'prop-types';


const Chart = (props) => {
    const { data } = props;
    const Labels = ({ x, y, bandwidth, data }) => (
        data.map((value, index) => (
            <Text
                key={ index }
                x={ x(index) + (bandwidth / 2) }
                y={ 190 }
                fontSize={ 12 }
                fill={ 'black' }
                alignmentBaseline={ 'middle' }
                textAnchor={ 'middle' }
            >
                {value}&#176;
            </Text>
        ))
    )
    return (
        <View style={styles.main}>
            <BarChart
                style={{ height: 200, width: 250 }}
                data={ data.map(el => el.y) }
                spacingInner={0.5}
                svg={{
                    fill: 'rgb(134, 65, 244)',
                }}
                contentInset={{ top: 30, bottom: 30 }}
                gridMin={0}
            />
            {/* <Labels/> */}
            <XAxis
                style={{ marginTop: 10 }}
                data={ data }
                scale={scale.scaleBand}
                formatLabel={ value => `${data[value].y}\u00B0` }
                labelStyle={{color: 'black'}}
            />
            {/* </BarChart> */}
        </View>
    );
};
export default Chart;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        height: 200, 
        padding: 20,
    }
});

Chart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)).isRequired,
};
