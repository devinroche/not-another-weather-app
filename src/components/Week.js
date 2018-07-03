import React, {Component} from 'react';
import {View} from 'react-native';
import Footer from './Footer';

class Week extends Component {
    render(){
        return (
            <View style={{flex: 1}}>
                <Footer {...this.props}/>
            </View>
        )
    }
}

export default Week
