import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'

function result(state = [], action) {
    switch (action.type) {
    // case actionTypes.SET_APPRAISAL_SUCCESS:
    //     return action.response
    default:
        return state
    }
}

let appraisal = combineReducers({
    result
})

export default appraisal
