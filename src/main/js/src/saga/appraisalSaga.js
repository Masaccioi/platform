/**
 * Created by hjx on 7/31/2017.
 */
import { put, take, call, select } from 'redux-saga/effects'
import * as actionTypes from '../actions/actionTypes.js'
import AppraisalService from '../services/appraisalService.js'

export function* setAppraisal(options = {}) {
    try {      
        let response = yield AppraisalService.setAppraisal(options)
        if(response.code === '200') {
            yield put({
                type: actionTypes.SET_APPRAISAL_SUCCESS,
                response: 2
            })
        } else {
            throw response.message
        }
    } catch (error) {
        yield put({ type: actionTypes.SET_APPRAISAL_FAILURE, error, response: 1 })
    }
}

