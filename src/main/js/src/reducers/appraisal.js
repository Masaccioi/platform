import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'

function setAppraisalFlag(state = [], action) {
    switch (action.type) {
    case actionTypes.SET_APPRAISAL_SUCCESS:
    case actionTypes.SET_APPRAISAL_FAILURE:
        return action.response
    default:
        return state
    }
}

let appraisal = combineReducers({
    setAppraisalFlag
})

export default appraisal
