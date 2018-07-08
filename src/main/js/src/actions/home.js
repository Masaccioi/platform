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
