import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AbcButton from '../components/AbcButton';
import Tabs from '../components/Tabs';
import ShowMore from '../screens/ShowMore';
import MainInfoObject from '../components/MainInfoObject';
import Slideshow from 'react-native-image-slider-show';
import { Avatar, Badge, Icon as IconElement } from 'react-native-elements';

export default class Main extends Component {

    static navigationOptions = {
        headerLeft: (
            <IconElement
                containerStyle={{ paddingLeft: 10 }}
                type="ionicon"
                name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            />
        ),
        headerRight: (
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: 120 }}>
                <IconElement type="ionicon" name={Platform.OS === "ios" ? "ios-share" : "md-share"} />
                <IconElement type="ionicon" name={Platform.OS === "ios" ? "ios-add" : "md-add"} />
                <IconElement type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} />
            </View>
        )
    };

    render() {
        return (
            <ScrollView ref="scrollView">
                <View style={styles.container}>
                    <View style={styles.iconGroup}>
                        <Icon style={[styles.icon, styles.iconRightBorder]} name="phone" color='#4A90E2'> Call</Icon>
                        <Icon style={[styles.icon, styles.iconRightBorder]} name="comments" color='#4A90E2'> Message</Icon>
                        <Icon style={styles.icon} name="envelope" color='#4A90E2'> E-mail</Icon>
                    </View>
                    <View style={styles.dividerLight} />
                    <View style={styles.notificationText}>
                        <Text style={styles.textLight}>2 months 7 days to end contact </Text>
                    </View>
                    <View style={styles.dividerLine} />
                    <View style={profile.profile}>
                        <Avatar rounded size='large' source={require('../assets/images/Oval.png')} />
                        <View style={profile.right}>
                            <View style={profile.info}>
                                <MainInfoObject title="Sent" number="25" />
                                <MainInfoObject title="Showing" number="8" />
                                <MainInfoObject title="Offer" number="3" />
                            </View>
                            <View style={profile.buttons}>
                                <AbcButton text="Add Showing" style={[profile.rightMargin, profile.button]} type="blank" />
                                <AbcButton style={profile.button} text="Show Matchings" type="solid" />
                                <Badge
                                    status="error"
                                    value="9"
                                    containerStyle={{ position: 'absolute', top: -7, right: -7 }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.aboutText}>
                        <Icon style={styles.iconText} name="home"> Property of Jeremy Walsh</Icon>
                        <Text style={styles.numberText}>€165.000</Text>
                    </View>
                    <View style={styles.dividerTop} />
                    <View>
                        <Text style={styles.saleText}>{'{Status}'} | For {'{Selling Type}'} | {'{Propert Type}'} </Text>
                        <View style={styles.dividerTopOpacity} />
                        <Text style={styles.saleText}>{'{Room}'} | {'{SurfaceArea}'} | {'{Bahtroom}'} | {'{SelectedAnqitutiy}'} </Text>
                        <View style={styles.dividerTopOpacity} />
                    </View>
                    <ShowMore />
                    <View style={styles.dividerTop} />
                    <View style={styles.tags}>
                        <Text style={[styles.tag, profile.leftMargin, profile.rightMargin]}>#sample tag 1</Text>
                        <Text style={[styles.tag, profile.rightMargin]}>#sample tag 2</Text>
                        <Text style={[styles.tag, profile.rightMargin]}>#oldhome</Text>
                        <TouchableOpacity><Text style={[styles.tagButton, profile.rightMargin]}> ...edit tags</Text></TouchableOpacity>
                    </View>
                    <Slideshow
                        dataSource={[
                            {
                                url: require('../assets/images/Rectangle.png'),
                                position: 'bottom',
                                caption: <Icon style={styles.sliderIcon} size={28} name="map-marker"></Icon>
                            },
                            { url: require('../assets/images/Rectangle.png') }
                        ]} />
                    <Tabs />
                </View>
            </ScrollView>
        );
    }
}

const profile = StyleSheet.create({
    profile: {
        padding: 16,
        flexDirection: 'row'
    },
    right: {
        flexDirection: 'column',
        flex: 1
    },
    info: {
        flexDirection: 'row'
    },
    buttons: {
        marginTop: 9,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        flex: 0.46,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightMargin: {
        marginRight: 5
    },
    leftMargin: {
        marginLeft: 15
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: 'helvatica-neue'
    },
    dividerTop: {
        height: 1,
        backgroundColor: '#AFAFAF'
    },
    dividerTopOpacity: {
        height: 1,
        backgroundColor: '#AFAFAF',
        width: '90%',
        marginLeft: 16,
        opacity: 0.4
    },
    dividerLine: {
        height: 1,
        backgroundColor: '#B2B2B2',
        opacity: 0.5
    },
    dividerLight: {
        height: 0.5,
        backgroundColor: '#D9D9D9'
    },
    iconGroup: {
        height: 40,
        marginVertical: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16
    },
    iconRightBorder: {
        borderRightWidth: 0.5,
        borderRightColor: '#D9D9D9'
    },
    aboutText: {
        flexDirection: 'row',
        height: 25,
        marginVertical: 4
    },
    iconText: {
        flexDirection: 'row',
        textAlignVertical: "center",
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 15,
        fontSize: 16,
        color: '#262626'
    },
    numberText: {
        flex: 1,
        flexDirection: 'row',
        textAlignVertical: "center",
        textAlign: 'right',
        fontWeight: 'bold',
        marginRight: 11,
        fontSize: 16,
        color: '#262626'
    },
    saleText: {
        flexDirection: 'row',
        textAlignVertical: "center",
        textAlign: 'left',
        lineHeight: 16,
        marginLeft: 16,
        marginVertical: 8,
        fontSize: 14,
        color: '#4A4A4A'
    },
    notificationText: {
        marginHorizontal: 14,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profileInfo: {
        padding: 16,
        flexDirection: 'row'
    },
    textLight: {
        color: '#9B9B9B'
    },
    tags: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tag: {
        flex: 1,
        color: '#4A4A4A',
        backgroundColor: '#D8D8D8',
        borderRadius: 1.7,
        fontSize: 13.6,
        marginVertical: 15
    },
    tagButton: {
        color: '#4A90E2',
        fontSize: 13.6,
        marginVertical: 15
    },
    iconHeader: {
        paddingLeft: 10
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: 120
    },
    sliderIcon: {
        backgroundColor: '#fff'
    }
});