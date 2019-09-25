import React, { Component } from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default class PropertyDetailsObject extends Component {
    render() {
        return (
            <View style={[this.props.style, styles.info]}>
                <Text style={styles.text}>{this.props.close}</Text>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {     
        flex: 1,        
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        textAlign:'center',
        color: '#4A4A4A',
        fontFamily: 'Helvatica Neue',
        fontSize: 16,
        lineHeight:21
    }
});