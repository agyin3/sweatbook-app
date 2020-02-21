import * as types from '../actions/types'

export const ui = (state=initialState, {type, payload}) => {
    switch (type) {
        case types.SET_EXERCISE_VISIBILTY:
            console.log('action', payload)
            return {
                exerciseModal: payload
            }
        default:
            return state
    }
}

const initialState = {
    exerciseModal: false
}

