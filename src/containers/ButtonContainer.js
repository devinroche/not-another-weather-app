import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux'
import {boxContent} from './../components/NavButtons/config';
import Box from './../components/NavButtons/Box'

class ButtonContainer extends Component {
    render(){
        const { week } = this.props
        return (
            <View style={styles.container}>
                {
                    week.week.cod === '200' ? boxContent.map((el, idx) => {
                        return <Box values={el} key={idx} navigation={this.props.navigation} />
                    }) : ''
                }
            </View>
        )
    }
}
  

const mapStateToProps = state => {
    return {
        week: state.week
    };
};

export default connect(mapStateToProps)(ButtonContainer)

const styles = StyleSheet.create({
    header: {
        fontSize: 64
    },
    container: {
        flex: 4, 
        flexDirection: 'row', 
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    }
});