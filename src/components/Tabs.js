import React, { Component } from 'react';
import { StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Badge } from 'react-native-elements';
import Agenda from '../screens/Agenda';
import Activities from '../screens/Activities';
import Files from '../screens/Files';

const FirstRoute = () => (
    <Agenda />
);
const SecondRoute = () => (
    <Activities />
);
const ThirdRoute = () => (
    <Files />
);

export default class Tabs extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Agenda', notif: '9' },
            { key: 'second', title: 'Activities', notif: '2' },
            { key: 'third', title: 'Files', notif: '0' },
        ],
    };

    render() {
        return (
            <TabView
                navigationState={this.state}
                renderScene={SceneMap({
                    first: FirstRoute,
                    second: SecondRoute,
                    third: ThirdRoute,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
                style={styles.container}

                renderTabBar={props =>
                    <TabBar
                        {...props}
                        labelStyle={{ color: '#000' }}
                        indicatorStyle={{ backgroundColor: '#000' }}
                        style={{ backgroundColor: '#fff' }}
                        renderBadge={(props) => {
                            if (props.route.notif > 0)
                                return <Badge
                                    status="error"
                                    value={props.route.notif}
                                    containerStyle={{ position: 'absolute', top: 14, right: 13 }}
                                />;
                        }}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }
});