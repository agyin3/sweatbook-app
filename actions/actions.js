import * as types from './types.js'

export const setExerciseModalVisibilty = (visible) => dispatch =>  {
    dispatch({type: types.SET_EXERCISE_VISIBILTY, payload: visible})
}

export const filterExercises = (filter) => dispatch => {
    console.log(filter)
    dispatch({type: types.FILTER_EXERCISES, payload: filter})
}