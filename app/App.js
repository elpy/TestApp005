import React, { Component } from 'react'
import {
    Platform,
    StyleSheet
} from 'react-native'
import { Provider } from 'react-redux'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import store from './middleware/redux'
import AboutScreen from './containers/About'
import QuotationsScreen from './containers/Quotations'


const Navigation = TabNavigator({
    About: { screen: AboutScreen },
    Quotations: { screen: QuotationsScreen }
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 13 },
        style: { justifyContent: 'center', alignItems: 'center' }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state
            let iconName
            if (routeName === 'About') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`
            } else if (routeName === 'Quotations') {
                iconName = `ios-options${focused ? '' : '-outline'}`
            }
    
            return <Ionicons name={iconName} size={25} color={tintColor} />
        }
    })
})

export default class App extends Component {
    state = { currentScreen: null }

    render() {
        return (
            <Provider store={store}>
                <Navigation 
                    screenProps={{ currentScreen: this.state.currentScreen }}
                    onNavigationStateChange={(prevState, currentState) => {
                        if (prevState.index !== currentState.index) {
                            this.setState({ currentScreen: currentState.index === 0 ? 'About' : 'Quotations' })
                        }
                    }}
                />
            </Provider>
        )
    }
}





