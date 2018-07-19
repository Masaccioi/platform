/**
 * Created by hjx on 7/25/2017.
 */
import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import global from './global.js'

export default combineReducers({
    router: routerStateReducer,
    global
})
