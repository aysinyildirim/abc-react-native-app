import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Files extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}><Text style={styles.buttonAdd}>Add file</Text></TouchableOpacity>
                <Text style={styles.title}> Dec. 31th - Friday </Text>
                <View style={styles.documents}>
                    <Image style={styles.image} source={require('../assets/images/Document.png')} />
                    <Text style={styles.text}>Yer gösterme belgesi - Ev id : 215</Text>
                    <View style={styles.buttonDelete}>
                        <TouchableOpacity><Text style={styles.button}>delete</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.dividerTop, styles.marginTop16]} />
                <Text style={styles.title}> Dec. 31th - Friday </Text>
                <View style={styles.documents}>
                    <Image style={styles.image} source={require('../assets/images/Identity.png')} />
                    <Text style={styles.text}>Kimlik belgesi</Text>
                    <View style={styles.buttonDelete}>
                        <TouchableOpacity><Text style={styles.button}>delete</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.dividerTopOpacity, styles.marginTop6, styles.marginBottom]} />
                <View style={styles.documents}>
                    <Image style={styles.image} source={require('../assets/images/Document.png')} />
                    <Text style={styles.text}>Yer gösterme belgesi - Ev id : 78</Text>
                    <View style={styles.buttonDelete}>
                        <TouchableOpacity><Text style={styles.button}>delete</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.dividerTopOpacity, styles.marginTop6, styles.marginBottom]} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: 'helvatica-neue',
        marginTop: 31.5
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 22,
        marginBottom: 16
    },
    documents: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 60,
        height: 80,
        marginLeft: 25
    },
    text: {
        flex: 1,
        marginLeft: 18,
        fontSize: 14
    },
    dividerTop: {
        height: 1,
        backgroundColor: '#B2B2B2',
        marginBottom: 18
    },
    dividerTopOpacity: {
        height: 1,
        backgroundColor: '#B2B2B2',
        width: '90%',
        marginLeft: 16,
        opacity: 0.25
    },
    buttonAdd: {
        textAlign: 'right',
        fontSize: 14,
        lineHeight: 16,
        color: '#4A90E2',
        marginRight: 23
    },
    buttonDelete: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    button: {
        textAlign: 'right',
        fontSize: 14,
        lineHeight: 16,
        color: '#4A90E2',
        marginRight: 23
    },
    marginTop16: {
        marginTop: 16
    },
    marginTop6: {
        marginTop: 6
    },
    marginBottom: {
        marginBottom: 17
    }
});
