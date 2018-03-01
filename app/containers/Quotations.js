import React, { Component, PureComponent } from 'react'
import { View, TouchableOpacity, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Constants } from 'expo'

import Loader from '../components/Loader'
import ItemComponent from '../components/ItemComponent'
import fetch from '../middleware/redux/actions/Quotations'
import { getQuotations } from '../middleware/redux/selectors'

const extractKey = (item) => item[1].id

@connect(
    store => ({ quotations: getQuotations(store) }), 
    ({ fetch })
)
export default class Quotations extends Component {
    componentDidMount() {
        this.props.fetch()
        this.startBackgroundTask()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.screenProps.currentScreen === 'Quotations'
            && nextProps.screenProps.currentScreen === 'About') 
        {
            this.stopBackgroundTask()
        }
            
        if (this.props.screenProps.currentScreen === 'About'
            && nextProps.screenProps.currentScreen === 'Quotations')
        {
            this.startBackgroundTask()
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    startBackgroundTask = () => {
        this.timer = setInterval(() => this.props.fetch(), 5000)
        console.log('task started')
    }

    stopBackgroundTask = () => {
        clearInterval(this.timer)
        console.log('task stopped')
    }

    renderItem = ({item}) => {
        return (<ItemComponent item={item} />)        
    }

    render() {
        const { items, isFetching, error } = this.props.quotations
        const showIndicator = items.length === 0

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Котировки</Text>
                    { isFetching && <ActivityIndicator style={styles.indicator} /> }
                </View>

                {
                    //Обычно я просто вывожу сообщение об ошибке, не скрывая таким образом элементы,
                    //но в требованиях есть не совсем понятный пункт об спец. ячейке с ошибкой
                    !!error && 
                    <Text style={{padding: 10}}>Ошибка</Text>
                }
                {
                    !!error ||
                    <Loader isLoading={isFetching} showIndicator={showIndicator}>
                        <FlatList 
                            ItemSeparatorComponent={ 
                                () => <View style={styles.separator} />
                            }
                            data={items}
                            renderItem={this.renderItem}
                            keyExtractor={extractKey} 
                        />
                    </Loader>  
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: Constants.statusBarHeight
    },
    headerContainer: {
        height: 56, 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        backgroundColor: '#f7f7f7'
    },
    header: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginLeft: 8,
    }, 
    indicator: {
        marginRight: 8
    },
    separator: {
        width: '90%', 
        backgroundColor: '#C8C9C7', 
        height: 0.5, 
        margin: 7
    }
})