import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './navigators/RootNavigator';

export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigation />
        </NavigationContainer>
    );
}
