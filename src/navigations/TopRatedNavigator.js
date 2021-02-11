import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {TopRatedScreen} from "../screens/TopRatedScreen";
import {TopRatedDetailScreen} from "../screens/TopRatedDetailScreen";



const Stack = createStackNavigator()

export const TopRatedNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TopRated" component={TopRatedScreen} options={{headerShown: false}}/>
            <Stack.Screen name="TopRatedDetail" component={TopRatedDetailScreen}/>
        </Stack.Navigator>
    )
}
