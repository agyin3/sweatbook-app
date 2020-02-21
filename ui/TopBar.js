import React from 'react'
import { 
    View, 
    StyleSheet 
} from 'react-native'

export const TopBar = (props) => {
    return(
        <View style={[styles.container, props.style]}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})