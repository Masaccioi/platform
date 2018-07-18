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
function hotProductList(state = [], action) {
    switch (action.type) {
    case actionTypes.GET_HOT_PRODUCT_SUCCESS:
    case actionTypes.GET_MAIN_PRODUCT_SUCCESS:
        return action.response
    default:
        return state
    }
}
function operator(state = [], action) {
    switch (action.type) {
    case actionTypes.GET_OPERATOR_SUCCESS:
        return action.response
    default:
        return state
    }
}
let home = combineReducers({
    adviceList,
    noticeList,
    hotProductList,
    operator
})

export default home
