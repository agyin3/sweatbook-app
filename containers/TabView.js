import React from 'react'
import { Text } from 'react-native'
import ScrollableTabs from 'react-native-scrollable-tab-view'
import { AppModal } from '../ui'
import { CurrentWorkout } from '../ui'

const TabView = () => {
    return(
        <>
        <AppModal />
        <ScrollableTabs tabBarTextStyle={{fontSize: 30}} tabBarPosition='overlayBottom'>
            <CurrentWorkout key='1' tabLabel='+'/>
            <Text key='2' tabLabel='Testing'>Test</Text>
        </ScrollableTabs>
        </>
    )
}

export default TabView