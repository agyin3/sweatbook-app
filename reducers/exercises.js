import * as types from '../actions/types'
import { exercises as initialState } from '../initialState.js'

export const exercises = (state=initialState, {type, payload}) => {
    switch (type) {
        case types.FILTER_EXERCISES:
            console.log(payload)
            const newArray = initialState.filter(item => item.name.toLowerCase().includes(payload.toLowerCase()))
            return [...newArray]
            break;
        default:
            break;
    }
    return state
}