import React, { Component } from 'react'
import { View, 
    ActivityIndicator, 
    StyleSheet, 
    Text, 
    Dimensions, 
    StatusBar 
} from 'react-native'
import { Constants } from 'expo'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

export default Loader = props => {
    return (
        <View style={{flex: 1}}>
            <StatusBar networkActivityIndicatorVisible={props.isLoading} />
            { props.children }
            {
                props.isLoading && 
                props.showIndicator &&
                <View style={styles.container}>
                    <ActivityIndicator size='large' />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: screenWidth, 
        height: screenHeight - Constants.statusBarHeight, 
        backgroundColor: 'rgba(0,0,0,0)'
    }
})