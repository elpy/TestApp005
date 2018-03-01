import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default About = props => {
    const { navigation } = props

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity 
                style={{ padding: 20, backgroundColor: '#f7f7f7', borderRadius: 17, borderWidth: 0.5, borderColor: '#C8C9C7' }}
                onPress={() => { navigation.navigate('Quotations') }}>
                <Text style={{color: 'black'}}>К котировкам</Text>
            </TouchableOpacity>
        </View>
    )
}