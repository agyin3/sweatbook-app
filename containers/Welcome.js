import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import MainSVG from '../assets/MainSVG'

const Welcome = ({startWorkout}) => {
    return(
        <View style={styles.container}>
            <View style={styles.heroContainer}>
                <Text style={styles.heroTitle}>
                    Sweatbook
                </Text>
                <Text style={styles.heroText}>
                    Log Your Fitness
                </Text>
            </View>
            <MainSVG />
            <View>
                <TouchableOpacity style={styles.startButton} onPress={startWorkout}>
                    <LinearGradient colors={['#673AB7', '#512DA8']} style={styles.gradient}>
                        <Text style={styles.buttonText}>Start Workout</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 100
      },
      heroContainer: {
          flex: 0.3,
          justifyContent: 'space-between',
          alignItems: 'center',
      },
    heroTitle: {
        fontSize: 50,
        color: 'blue'
    },
    heroText: {
        fontSize: 25,
    },
    startButton: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    gradient: {
        flex: 1, 
        paddingLeft: 20, 
        paddingRight: 20, 
        borderRadius:8,
        justifyContent: 'center',
        zIndex:-5
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '800',
        backgroundColor: 'transparent',
        color: '#fff'
    }
})

