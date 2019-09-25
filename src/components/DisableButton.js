import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class DisableButton extends Component {
    render() {
        return (
            <TouchableOpacity disabled={true} style={[this.props.style, styles.button, (this.props.type == "disabledButton") ? styles.disable : styles.blanked]}>
                <Text style={(this.props.type == "disabledButton") ? styles.disableText : styles.blankedText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#9B9B9B',
        fontFamily: 'Helvatica Neue',
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 5,
        height: 27,
        flexDirection:'row',
    },
    blanked: {
        backgroundColor: '#FFFFFF'
    },
    blankedText: {
        color: '#9B9B9B'
    },
    disableText: {
        color: '#FFFFFF'
    },
    disable: {
        backgroundColor: '#9B9B9B'
    }
});
