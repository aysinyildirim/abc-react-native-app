import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class MainInfoOject extends Component {
    render() {
        return (
            <TouchableOpacity style={[this.props.style, styles.info]}>
                <Text style={styles.number}>{this.props.number}</Text>
                <Text style={styles.title}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    info: {
        flex: 1,        
        alignItems: "center",
        justifyContent: "flex-start"
    },
    title: {
        color: '#9B9B9B',
        fontFamily: 'Helvatica Neue',
        fontSize: 13
    },
    number: {
        color: '#000000',
        lineHeight: 20,
        fontFamily: 'Helvatica Neue',
        fontSize: 20
    }
});