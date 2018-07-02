import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Footer extends Component {
    render(){
        console.log(this.props)
        const { weather } = this.props
        return (
            <View style={styles.bottom}>
                <Text style={styles.small}>footer</Text> 
            </View>
        )
    }
}
  
  export default Footer

  const styles = StyleSheet.create({
    small: {
        fontFamily: 'vt323',
        fontSize: 48
    },
    bottom: {
        flex: 1,
        backgroundColor: 'rebeccapurple',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
  });
  