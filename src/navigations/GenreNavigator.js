import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {GenreScreen} from "../screens/GenreScreen";
import {GenreMovieScreen} from "../screens/GenreMovieScreen";



const Stack = createStackNavigator()

export const GenreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={GenreScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Genre" component={GenreMovieScreen}/>
        </Stack.Navigator>
    )
}
