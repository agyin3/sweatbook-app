import React from 'react'
import { 
    View, 
    StyleSheet, 
    Text, 
    Dimensions, 
    TouchableOpacity 
} from 'react-native'
import { TopBar } from './TopBar'
import { setExerciseModalVisibilty } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'

const { width } = Dimensions.get('window')

export const CurrentWorkout = () => {
    const ui = useSelector(({ui}) => ui.exerciseModal)
    const dispatch = useDispatch()
    return(
        <LinearGradient 
          style={styles.container}
          colors={['#65C7F7', '#054A91']}
        >
            <TopBar style={styles.topBar}>
                <Text style={styles.heroText}>
                    Current Workout
                </Text>
            </TopBar>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>
                    add some exercises
                </Text>
                <TouchableOpacity onPress={() => dispatch(setExerciseModalVisibilty(!ui))}>
                    <Text style={styles.addButton}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30
      },
      topBar: {
        borderBottomColor: '#fff',
        borderBottomWidth: 3,
        width: width,
        alignItems: "center",
        justifyContent: 'center',
        flex: 0.1
      },
      heroText: {
        fontSize: 30,
        marginBottom: 10
      },
      textContainer: {
        flex: 0.8
      },
      mainText: {
        fontSize: 45,
        textAlign: 'center'
      },
      addButton: {
        textAlign: 'center',
        fontSize: 90
      }
})