import { createAction } from 'redux-actions'
import * as types from './types.js'

export const setExerciseModalVisibilty = (visible) => dispatch =>  {
    dispatch({type: types.SET_EXERCISE_VISIBILTY, payload: visible})
}