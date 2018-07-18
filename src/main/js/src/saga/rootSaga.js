/**
 * Created by cpoopc on 2016/11/17.
 */
import { take, put, call, fork, race, cancelled } from 'redux-saga/effects'
import { delay, takeEvery, eventChannel, END } from 'redux-saga'
import * as actionTypes from '../actions/actionTypes.js'
import * as authSaga from './authSaga'
import * as exampleSaga from './exampleSaga.js'
import * as homeSaga from './homeSaga.js'
import * as appraisalSaga from './appraisalSaga'

export default function* rootSaga() {
    yield takeEvery(actionTypes.LOGIN_REQUEST, mapPayload(authSaga.login))
    yield takeEvery(actionTypes.GET_EXAMPLES_REQUEST, mapPayload(exampleSaga.getExamples))
    yield takeEvery(actionTypes.GET_ADVICE_REQUEST, mapPayload(homeSaga.getAdvice))
    yield takeEvery(actionTypes.GET_NOTICE_REQUEST, mapPayload(homeSaga.getNotice))
    yield takeEvery(actionTypes.GET_HOT_PRODUCT_REQUEST, mapPayload(homeSaga.getHotProduct))
    yield takeEvery(actionTypes.GET_OPERATOR_REQUEST, mapPayload(homeSaga.getOperator))
    yield takeEvery(actionTypes.GET_MAIN_PRODUCT_REQUEST, mapPayload(homeSaga.getMainProduct))
    yield takeEvery(actionTypes.SET_APPRAISAL_REQUEST, mapPayload(appraisalSaga.setAppraisal))
}

/**
 * 提取action.payload
 * saga层直接接触参数,便于saga复用
 * @param func
 * @returns {mapFunc}
 */
function mapPayload(func) {
    return function* mapFunc(action) {
        return yield func.call(this, action.payload)
    }
}
