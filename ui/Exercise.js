import React from 'react'
import {
    Text,
    StyleSheet,
    View
} from 'react-native'

export const Exercise = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 3,
        height: 40
    }
})