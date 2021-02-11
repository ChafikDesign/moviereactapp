import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {GenreScreen} from "../screens/GenreScreen";
import {MainBottomNavigator} from "./MainBottomNavigator";
import {DetailScreen} from "../screens/DetailScreen";

const Stack = createStackNavigator();

export const LaunchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={GenreScreen} options={{headerShown: false}} />
            <Stack.Screen name="Recherche" component={MainBottomNavigator} />
            <Stack.Screen name="Latest" component={DetailScreen} />
        </Stack.Navigator>
    )
}
