/**
 * Created by hjx on 7/31/2017.
 */
import { put, take, call, select } from 'redux-saga/effects'
import { decamelizeKeys, camelizeKeys } from 'humps'
import * as actionTypes from '../actions/actionTypes.js'
import homeService from '../services/homeService'

export function* getNotice(payload) {
    try {
        const { page = 1, pageSize = 10 } = payload
        let response = yield homeService.getNotice(page, pageSize)
        if(response.code === '200') {
            yield put({
                type: actionTypes.GET_NOTICE_SUCCESS,
                response: response && response.data
            })
        } else {
            throw response.message
        }
    } catch (error) {
        yield put({ type: actionTypes.GET_NOTICE_FAILURE, error })
    }
}

export function* getAdvice(payload) {
    try {
        const { page = 1, pageSize = 10 } = payload        
        let response = yield homeService.getAdvice(page, pageSize)
        if(response.code === '200') {
            yield put({
                type: actionTypes.GET_ADVICE_SUCCESS,
                response: response && response.data
            })
        } else {
            throw response.message
        }
    } catch (error) {
        yield put({ type: actionTypes.GET_ADVICE_FAILURE, error })
    }
}

