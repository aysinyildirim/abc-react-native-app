import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class AbcButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style, styles.button, (this.props.type == "solid") ? styles.solid : styles.blank]}>
                <Text style={(this.props.type == "solid") ? styles.solidText : styles.blankText}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        borderColor: '#4A90E2',
        fontFamily: 'Helvatica Neue',
        fontSize: 14,
        borderWidth: 1,
        borderRadius: 5,
        height: 27,
        flexDirection:'row',
    },
    blank: {
        backgroundColor: '#ffffff'
    },
    blankText: {
        color: '#4A90E2'
    },
    solidText: {
        color: '#ffffff'
    },
    solid: {
        backgroundColor: '#4A90E2'
    }
});
