/**
 * Created by hjx on 7/31/2017.
 */
import * as actionTypes from './actionTypes.js'

export function setAppraisal(payload) {
    return {
        type: actionTypes.SET_APPRAISAL_REQUEST,
        payload
    }
}
