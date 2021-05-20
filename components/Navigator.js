import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from 'react-native-vector-icons'

const Tab = createBottomTabNavigator();

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="mainPage"
                        component={items}
                        options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-home" color={color} size={size} />)

                        }}
                    />

                    <Tab.Screen
                        name="login"
                        component={StackInTab}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="list-outline" color={color} size={size} />)
                            
                        }}

                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}
