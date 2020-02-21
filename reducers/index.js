import { ui } from './ui.js'
import { currentWorkout } from './currentWorkout.js'
import { exercises } from './exercises.js'
import { combineReducers } from 'redux'

export default combineReducers({
    exercises,
    ui,
    currentWorkout
})