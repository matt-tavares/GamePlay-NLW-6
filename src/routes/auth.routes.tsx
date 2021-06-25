import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from "../global/styles/theme";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/Signin";
import { AppointmentsDetails } from "../screens/AppointmentsDetails";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="AppointmentsDetails"
                component={AppointmentsDetails}
            />
        </Navigator>
    )
}