import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./SearchAndDetailNavigator";
import {TopRatedNavigator} from "./TopRatedNavigator";
import {TrendingNavigator} from "./TrendingNavigator";
import {GenreNavigator} from "../navigations/GenreNavigator";
import { Ionicons } from '@expo/vector-icons';


const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        <TabNavigator.Navigator     
        style={{ backgroundColor:'black' }} 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home-sharp'
                  : 'md-home-outline';
              } 
              if (route.name === 'Top Rated') {
                iconName = focused
                  ? 'star'
                  : 'star-outline';
              }if (route.name === 'Trending') {
                iconName = focused
                  ? 'trending-up'
                  : 'trending-up-outline';
              } else if (route.name === 'Search') {
                iconName = focused ? 'search-circle' : 'search-circle-outline';
              }
              return <Ionicons name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#B5A90F',
            inactiveTintColor: 'white',
            activeBackgroundColor: '#B00020',
            inactiveBackgroundColor: '#B00020'

          }}>
            <TabNavigator.Screen name="Home" component={GenreNavigator} />
            <TabNavigator.Screen name="Search" component={SearchAndDetailNavigator} />
            <TabNavigator.Screen name="Top Rated" component={TopRatedNavigator} />
            <TabNavigator.Screen name="Trending" component={TrendingNavigator} />

        </TabNavigator.Navigator>
    )
}
