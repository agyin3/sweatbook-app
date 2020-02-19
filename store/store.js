import { createStore, applyMiddleware } from 'redux'
import { thunk } from 'thunk'
import { reducer } from '../reducers/reducers.js'

export const store = createStore(reducer, applyMiddleware(thunk))