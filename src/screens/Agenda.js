import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AbcButton from '../components/AbcButton';
import DisableButton from '../components/DisableButton';
import { Avatar, Badge } from 'react-native-elements';

export default class Agenda extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.clientRequest}> Client Request (1) </Text>
                <View style={styles.dividerTop} />
                <View style={profile.profile}>
                    <Avatar rounded size='small' source={require('../assets/images/Oval-2.png')} style={profile.left} />
                    <View style={profile.right}>
                        <View style={profile.info}>
                            <Text style={styles.nameBold}>Can Erenberk</Text>
                            <Text style={styles.clock}> Yesterday 12:24 pm</Text>
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 5, left: 100 }}
                            />
                        </View>
                        <Text style={styles.request}>Can requested a showing.</Text>
                        <Text style={styles.name}>Can Erenberk</Text>
                        <Text style={styles.description}>Up to €250.000 | Essex, Kesington or Oxfordshire</Text>
                        <View style={profile.buttons}>
                            <AbcButton text="Take Action" style={[profile.rightMargin, profile.button]} type="solid" />
                            <AbcButton style={profile.button} text="Dismiss" />
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitle}>Suggestion (2)</Text>
                <View style={styles.dividerTop} />
                <View style={profile.profile}>
                    <Avatar rounded size='small' source={require('../assets/images/Rectangle-A.png')} style={profile.left} />
                    <View style={profile.right}>
                        <View style={profile.info}>
                            <Text style={styles.nameBold}>ABC</Text>
                            <Text style={styles.clock}> Yesterday 12:24 pm</Text>
                            <Badge
                                status="error"
                                containerStyle={{ position: 'absolute', top: 5, left: 35 }}
                            />
                        </View>
                        <View style={styles.abcText}>
                            <Text style={styles.abcSuggestion} >There are potential new matches for this property if missing information is complete. Wou
                        <Text onPress={() => { }} style={{ color: '#4A90E2' }}>...show more </Text>
                            </Text>
                        </View>
                        <View style={profile.buttons}>
                            <AbcButton text="Take Action" style={[profile.rightMargin, profile.button]} type="solid" />
                            <AbcButton style={profile.button} text="Dismiss" />
                        </View>
                    </View>
                </View>
                <View style={styles.dividerTop} />
                <View style={profile.profile}>
                    <Avatar rounded size='small' source={require('../assets/images/Rectangle-A.png')} style={profile.left} />
                    <View style={profile.right}>
                        <View style={profile.info}>
                            <Text style={styles.nameBold}>ABC</Text>
                            <Text style={styles.clock}> Yesterday 12:24 pm</Text>
                        </View>
                        <Text style={styles.request}>Can liked this property! Would you like to propose a showing?"</Text>
                        <Avatar rounded size='small' source={require('../assets/images/Oval-2.png')} style={[profile.left, profile.top]} />
                        <Text style={styles.nameSuggestion}>Can Erenberk</Text>
                        <Text style={styles.description}>Up to €250.000 | Essex, Kesington or Oxfordshire</Text>
                        <View style={profile.buttons}>
                            <AbcButton text="Take Action" style={[profile.rightMargin, profile.button]} type="solid" />
                            <AbcButton style={profile.button} text="Dismiss" />
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitle}>Snoozed (1)</Text>
                <View style={styles.dividerTop} />
                <View style={profile.profile}>
                    <Avatar rounded size='small' source={require('../assets/images/Rectangle-A.png')} style={profile.left} />
                    <View style={profile.right}>
                        <View style={profile.info}>
                            <Text style={styles.nameBold}>ABC</Text>
                            <Text style={styles.clock}> Snoozed : 12/12/2019</Text>
                        </View>
                        <Text style={styles.abcSuggestion}> Jerremy Walsh 's birthday is tomorrow.' </Text>
                        <View style={profile.buttons}>
                            <AbcButton text="Take Action" style={[profile.rightMargin, profile.button]} type="solid" />
                            <AbcButton style={profile.button} text="Dismiss" />
                        </View>
                    </View>
                </View>
                <Text style={styles.subtitle}>Past (2)</Text>
                <View style={styles.dividerTop} />
                <View style={profile.profile}>
                    <Avatar rounded size='small' source={require('../assets/images/Rectangle-A.png')} style={profile.left} />
                    <View style={profile.right}>
                        <View style={profile.info}>
                            <Text style={styles.nameBold}>ABC</Text>
                        </View>
                        <Text style={styles.request}>Can liked this property! Would you like to propose a showing?"</Text>
                        <Avatar rounded size='small' source={require('../assets/images/Oval-2.png')} style={[profile.left, profile.top]} />
                        <Text style={styles.nameSuggestion}>Can Erenberk</Text>
                        <Text style={styles.description}>Up to €250.000 | Essex, Kesington or Oxfordshire</Text>
                        <View style={profile.buttons}>
                            <DisableButton text="Take Action" style={[profile.rightMargin, profile.button]} type="disabledButton" />
                            <DisableButton style={[profile.button]} text="Dismissed"  />
                            <Text style={profile.date}> 12/12/2019</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dividerTop} />
                <View style={profile.profile}>
                    <Avatar rounded size='small' source={require('../assets/images/Oval-2.png')} style={profile.left} />
                    <View style={profile.right}>
                        <View style={profile.info}>
                            <Text style={styles.nameBold}>Can Erenberk</Text>
                        </View>
                        <Text style={styles.request}>Can requested a showing.</Text>
                        <Text style={styles.name}>Can Erenberk</Text>
                        <Text style={styles.description}>Up to €250.000 | Essex, Kesington or Oxfordshire</Text>
                        <View style={profile.buttons}>
                            <DisableButton text="Take Action" style={[profile.rightMargin, profile.button]} type="disabledButton" />
                            <DisableButton style={[profile.button]} text="Completed" />
                            <Text style={[profile.date, profile.bottomMargin]}> 12/12/2019</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        fontFamily: 'helvatica-neue',
        marginTop: 19.5
    },
    dividerTop: {
        height: 1,
        backgroundColor: '#AFAFAF',
        opacity: 0.4
    },
    nameBold: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 16,
        lineHeight: 19,
        marginTop: 20
    },
    description: {
        fontSize: 14,
        lineHeight: 16,
        color: '#9B9B9B',
        marginTop: 5
    },
    request: {
        flex: 1,
        flexDirection: 'column',
        fontSize: 14
    },
    clock: {
        flex: 1,
        fontSize: 12,
        color: '#9B9B9B',
        textAlign: 'right'
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 30,
        marginBottom: 10
    },
    clientRequest: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: 'bold',
        marginLeft: 16,
       marginBottom: 10
    },
    abcSuggestion: {
        fontSize: 14,
        lineHeight: 17,
        marginTop: 5
    },
    nameSuggestion: {
        fontSize: 16,
        lineHeight: 19,
        marginTop: 10
    }
});

const profile = StyleSheet.create({
    profile: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    left: {
        marginRight: 16,
        borderRadius: 100,
        height: 38,
        width: 38,
        flexDirection: 'column',
        backgroundColor: 'yellow'
    },
    right: {
        flexDirection: 'column',
        flex: 1
    },
    top: {
        marginTop: 20
    },
    info: {
        flexDirection: 'row'
    },
    buttons: {
        marginTop: 20,
        flexDirection: 'row'
    },
    button: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightMargin: {
        marginRight: 5
    },
    date: {
        fontSize: 12,
        color: '#9B9B9B',
        marginTop: 5
    },
    bottomMargin: {
        marginBottom: 144
    }
});