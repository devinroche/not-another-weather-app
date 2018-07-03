import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonContainer from '../containers/ButtonContainer';
import BarChartExample from './Graph';

class DisplayWeek extends Component {
    render(){
        const { week } = this.props
        const dateStore = {}
        week.list.map(el => {
            const time = new Date(el.dt * 1000).getDate()
            return dateStore[time] ? dateStore[time].push(el.main.temp) : dateStore[time] = [el.main.temp]
        })
        const finalArr = []
        for(field in dateStore){
            let sortedArr = dateStore[field].sort((a,b) => a-b)
            finalArr.push({
                // x: field,
                y: Math.round(sortedArr[sortedArr.length-1] - sortedArr[0]),
                x: Math.round(sortedArr[sortedArr.length-1] + sortedArr[0])/2
            })
        }

        return (
            <View style={styles.bottom}>
                <BarChartExample data={finalArr}/>
            </View>
        )
    }
}
  
  export default DisplayWeek

  const styles = StyleSheet.create({
    small: {
        fontFamily: 'sfMedium',
        fontSize: 48,
        color: '#2c3e50'
    },
    bottom: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'flex-start',
    }
  });
  