import React from 'react'
import { 
    SafeAreaView, 
    View, 
    FlatList, 
    StyleSheet, 
    Text 
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Exercise } from './Exercise';

export const ExerciseList = () => {
    const exercises = useSelector(({exercises}) => exercises)

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={exercises}
                renderItem={({ item }) => 
                    <Exercise>
                        <Text>
                            {item.name.toUpperCase()}
                        </Text>
                    </Exercise>
            }
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
    }
})