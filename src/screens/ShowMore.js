import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import PropertyDetailsObject from '../components/PropertyDetailsObject';

export default class ShowMore extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            hide: false,
            changeText: 'Show More Details',
            FlatListItems: [
                { id: '1', value: 'Heating : {Heating Option}' },
                { id: '2', value: 'In Site: Yes | No' },
                { id: '3', value: 'Furnished: Yes | No' },
                { id: '4', value: 'Loan Status: Yes | No' },
                { id: '5', value: 'Min Carpet Area: {MinCarpetArea}' },
                { id: '6', value: 'View Side: {Selection1}, {Selection2}...' },
                { id: '7', value: 'Max Maintenance Fee: {XYZ}{Currency}' },
                { id: '8', value: 'Swap Status: Yes | No' },
                { id: '9', value: 'Using Status: {Selection}' },
                { id: '10', value: 'Description' },
                { id: '11', value: 'Indoor Features: [Selected Feature Name]' },
                { id: '12', value: 'Outdoor Features: [Selected Feature Name]' }
            ]
        };
    }

    ShowComponent = () => {
        if (this.state.show == false) {
            this.setState({ show: true });
        } else {
            this.setState({ show: true });
        }
    };

    HideComponent = () => {
        if (this.state.hide == true) {
            this.setState({ show: true });
        } else {
            this.setState({ show: false });
        }
    };

    ChangeText = () => {
        this.setState({ changeText: 'Edit Property Details' });
    }

    ChangeButton = () => {
        if (this.state.hide == true) {
            this.setState({ changeText: 'Show More Details' });
        } else {
            this.setState({ changeText: 'Show More Details' });
        }
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }} />
        );
    };

    functionCombined() {
        this.ShowComponent();
        this.ChangeText();
    };

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.functionCombined()}><Text style={styles.showButton}>{this.state.changeText}</Text></TouchableOpacity>
                {this.state.show ? (
                    <View style={styles.detail}>
                        <View style={styles.property}>
                            <PropertyDetailsObject title="Partking Lot" close={'{X}'} />
                            <PropertyDetailsObject style={styles.object} title="WC Number" close={'{X}'} />
                        </View>
                        <View style={[styles.dividerTopOpacity, styles.margin15]} />
                        <View style={styles.property}>
                            <PropertyDetailsObject title="Property Floor" close={'{X}'} />
                            <PropertyDetailsObject style={styles.object} title="Total Building Floor" close={'{X}'} />
                        </View>
                        <View style={[styles.dividerTopOpacity, styles.topMargin]} />
                        <View style={styles.MainContainer}>
                            <FlatList
                                data={this.state.FlatListItems}
                                ItemSeparatorComponent={this.FlatListItemSeparator}
                                renderItem={({ item }) => (
                                    <View>
                                        <Text style={styles.item}>  {item.value} </Text>
                                    </View>
                                )}
                            />
                        </View>
                        <TouchableOpacity onPress={() => {
                            this.HideComponent();
                            this.ChangeButton();
                        }} >
                            <Text style={styles.showButton}>Show Less Details</Text></TouchableOpacity>
                    </View>
                ) : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    showButton: {
        textAlign: 'center',
        color: '#4A90E2',
        fontSize: 14,
        marginBottom: 17,
        marginTop: 7
    },
    dividerTopOpacity: {
        height: 1,
        backgroundColor: '#B2B2B2',
        width: '90%',
        marginLeft: 16,
        opacity: 0.25
    },
    property: {
        flexDirection: 'row',
        marginHorizontal: 69
    },
    object: {
        textAlign: 'right',
        marginLeft: 69
    },
    margin15: {
        marginVertical: 15
    },
    topMargin: {
        marginTop: 10
    },
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        marginRight: 10,
        marginBottom: 10
    },
    item: {
        padding: 10,
        fontSize: 14,
        height: 35
    }
});