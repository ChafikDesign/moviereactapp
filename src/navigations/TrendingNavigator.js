import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {TrendingScreen} from "../screens/TrendingScreen";
import {TrendingDetailScreen} from "../screens/TrendingDetailScreen";



const Stack = createStackNavigator()

export const TrendingNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Trending" component={TrendingScreen} options={{headerShown: false}}/>
            <Stack.Screen name="TrendingDetail" component={TrendingDetailScreen}/>
        </Stack.Navigator>
    )
}
