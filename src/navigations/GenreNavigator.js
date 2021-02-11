import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {GenreScreen} from "../screens/GenreScreen";
import {GenreMovieScreen} from "../screens/GenreMovieScreen";
import {GenreDetailScreen} from "../screens/GenreDetailScreen";



const Stack = createStackNavigator()

export const GenreNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={GenreScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Genre" component={GenreMovieScreen}/>
            <Stack.Screen name="Detail" component={GenreDetailScreen}/>
        </Stack.Navigator>
    )
}
