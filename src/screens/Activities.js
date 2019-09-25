import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Activities extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode={'contain'}
                    style={styles.image}
                    source={require('../assets/images/Bitmap.png')} />
                <Text style={styles.header}>Add Activities</Text>
                <Text style={styles.description}>Add your clients activities here and Aidy will keep track of all. You will no longer miss a single client task or forget an activity.</Text>
                <View />
                <View style={styles.dividerTop} />
                <TouchableOpacity><Text style={styles.button}>Add Task</Text></TouchableOpacity>
                <View style={styles.dividerTop} />
                <TouchableOpacity><Text style={styles.button}>Add Showing</Text></TouchableOpacity>
                <View style={styles.dividerTop} />
                <TouchableOpacity><Text style={styles.button}>Add Offer</Text></TouchableOpacity>
                <View style={styles.dividerTop} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: 'helvatica-neue',
        marginTop: 60.5
    },
    image: {
        marginLeft: 100
    },
    header:{
        textAlign:'center',
        fontSize:24,
        marginTop:20
    },
    description:{
        textAlign:'center',
        fontSize:14,
        color:'#9B9B9B',
        marginBottom:38,
        marginHorizontal:75
    },
    dividerTop: {
        height: 1,
        backgroundColor: '#D9D9D9',
    },
    button:{
        textAlign:'center',
        fontSize:17,
        lineHeight:20,
        color:'#4A90E2',
        marginVertical:5
    }
});