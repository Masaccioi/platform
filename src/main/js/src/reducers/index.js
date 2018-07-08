/**
 * Created by hjx on 7/25/2017.
 */
import { routerStateReducer } from 'redux-router'
import { combineReducers } from 'redux'
import i18n from './hor/i18n.js'
import examples from './examples.js'
import home from './home.js'
import global from './global.js'

export default combineReducers({
    router: routerStateReducer,
    global,
    home
})
