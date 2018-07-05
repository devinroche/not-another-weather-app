import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// class Body extends Component {
//     render() {
//         const { day } = this.props;
//         return (
//           <View style={[styles.mid]}>
//               <Text style={styles.header}>
//                   {Math.round(day.weather.main.temp)}
// &#176;
//                 </Text>
//                 <Text style={styles.subheader}>
//                     {day.weather.weather[0].main}
//             </Text>
//             </View>
//         );
//     }
// }

const Body = (props) => {
    const { day } = props;
    return (
        <View style={[styles.mid]}>
            <Text style={styles.header}>
                {Math.round(day.weather.main.temp)}&#176;
            </Text>

            <Text style={styles.subheader}>
                {day.weather.weather[0].main}
            </Text>
        </View>
    );
};

export default Body;

const styles = StyleSheet.create({
    header: {
        fontFamily: 'sfBlack',
        fontSize: 80,
        color: '#2c3e50',
        textAlign: 'center',
    },
    mid: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subheader: {
        fontFamily: 'sfMedium',
        fontSize: 36,
        color: '#2c3e50',
    },
});
