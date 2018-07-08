import { combineReducers } from 'redux'
import * as actionTypes from '../actions/actionTypes.js'

function adviceList(state = [], action) {
    switch (action.type) {
    case actionTypes.GET_ADVICE_SUCCESS:
        return action.response
    default:
        return state
    }
}
function noticeList(state = [], action) {
    switch (action.type) {
    case actionTypes.GET_NOTICE_SUCCESS:
        return action.response
    default:
        return state
    }
}

let home = combineReducers({
    adviceList,
    noticeList
})

export default home
