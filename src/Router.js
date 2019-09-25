import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './screens/Main';
import { YellowBox } from 'react-native';

const HomeStack = createStackNavigator({
    Main: {
        screen: Main,
    }
});

export default createAppContainer(HomeStack);

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);