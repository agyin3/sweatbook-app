import React, { useState } from 'react'
import {
    View,
    Modal,
    Text,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faArrowDown, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { TopBar } from './TopBar'
import { setExerciseModalVisibilty } from '../actions/actions'

const { height, width } = Dimensions.get('window')
export const AppModal = () => {
    const visible = useSelector(({ ui }) => ui.exerciseModal)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleChange = e => {
        setSearch(e.target.value)
    }
    return (
            <Modal
                animationType='slide'
                visible={visible}
            >
                <TopBar style={styles.topBar}>
                    <View style={styles.inputContainer}>
                        <View style={styles.iconContainer}>
                        <FontAwesomeIcon style={styles.inputIcon} size={20} icon={faSearch} />
                        </View>
                        <TextInput 
                            style={styles.modalInput} 
                            placeholder='Search' 
                            onChange={handleChange} 
                            value={search}
                        />
                    </View>
                    <FontAwesomeIcon
                            icon={faChevronDown} 
                            size={25}
                            onPress={() => dispatch(setExerciseModalVisibilty(!visible))} 
                    />
                </TopBar>
            </Modal>
    )
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        flex: 0.1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15
    },
    inputContainer: {
        flex: 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalInput: {
        flex: 1,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        height: 35,
        color: '#fff',
        backgroundColor: '#000',
        paddingLeft: 15,
    },
    inputIcon: {
        color: '#fff',
    },
    iconContainer: {
        height: 35,
        backgroundColor: '#000',
        paddingLeft: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})