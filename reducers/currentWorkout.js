import * as types from '../actions/actions.js'

export const currentWorkout = (state=[], {type, payload}) => {
    switch (type) {
        case types.FETCH_CURRENT_WORKOUT_COMPLETE:
            return payload
            break;
        case types.ADD_EXERCISE_COMPLETE: 
            return [...state, payload]
            break;
        default:
            return state
            break;
    }
}