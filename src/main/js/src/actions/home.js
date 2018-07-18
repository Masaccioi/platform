/**
 * Created by hjx on 7/31/2017.
 */
import * as actionTypes from './actionTypes.js'

export function getNotice(payload) {
    return {
        type: actionTypes.GET_NOTICE_REQUEST,
        payload
    }
}

export function getAdvice(payload) {
    return {
        type: actionTypes.GET_ADVICE_REQUEST,
        payload
    }
}

export function getHotProduct(payload) {
    return {
        type: actionTypes.GET_HOT_PRODUCT_REQUEST,
        payload
    }
}

export function getOperator(payload) {
    return {
        type: actionTypes.GET_OPERATOR_REQUEST,
        payload
    }
}

export function getMainProduct(payload) {
    return {
        type: actionTypes.GET_MAIN_PRODUCT_REQUEST,
        payload
    }
}
