import React from 'react';
import {
    View, Text, Animated, StyleSheet, Easing,
} from 'react-native';
import {
    VictoryAxis, VictoryArea, VictoryChart, VictoryBar, VictoryCandlestick, VictoryStack, VictoryLabel, VictoryTheme,
} from 'victory-native';
import { G } from 'react-native-svg';


// class BarChartExample extends React.PureComponent {

//     render() {
//         console.log(this.props.data.map(el => {
//             return {x: el.x.toString(), y: el.y}
//         }))
//         return (
//             <VictoryChart domainPadding={{ x: 25 }}>
//                 <VictoryBar
//                     categories={{
//                         x: this.props.data.map(el => el.x.toString())
//                     }}
//                     style={{ data: { fill: "#c43a31" } }}
//                     data={this.props.data.map(el => {
//                         return {x: el.x.toString(), y: el.y}
//                     })}
//                 />
//             </VictoryChart>
//         )
//     }

// }

// export default BarChartExample

const days = {
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
    7: 'Sun',
};

// class BarChartExample extends React.Component {
//     constructor() {
//         super();
//         const width = { pts: 30 };
//         this.state = {
//             pts: new Animated.Value(width.pts),
//             //   ast: new Animated.Value(width.ast),
//             //   reb: new Animated.Value(width.reb)
//         };
//     }

//     handeleAnimation() {
//         const timing = Animated.timing;
//         const width = { pts: 90 };
//         const indicators = ['pts'];
//         Animated.parallel(indicators.map(item => timing(this.state[item], { toValue: width[item] }))).start();
//     }

//     render() {
//         const { pts } = this.state;

//         return (
//             <View>
//                 {pts
//               && <Animated.View style={[styles.bar, styles.points, { width: pts }]} />
//                 }
//                 <Text onPress={this.handeleAnimation.bind(this)}>
// Button


//                 </Text>
//             </View>
//         );
//     }
// }

const BarChartExample = (props) => {
    return (
        <Text>hi</Text>
    )
}
export default BarChartExample;
