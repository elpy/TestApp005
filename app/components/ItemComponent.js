import React, { PureComponent } from 'react'
import { View, Text} from 'react-native'


export default class ItemComponent extends PureComponent {
    render() {
        const { item } = this.props
        return (
            <View style={{marginLeft: 5}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{ item[0] }</Text>
                <View style={{marginLeft: 7}}>
                    <Text>{ 'last: ' + item[1].last }</Text>
                    <Text>{ 'highestBid: ' + item[1].highestBid }</Text>
                    <Text>{ 'percentChange: ' + item[1].percentChange }</Text>
                </View>
            </View>
        )
    }
}