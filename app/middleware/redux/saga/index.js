import { takeLatest } from 'redux-saga/effects'

import { FETCH_QUOTATIONS_REQUEST } from '../actions/Quotations'
import fetchQuotationsSaga from './Quotations'


function * sagaWatcher() {
    yield [
        takeLatest(FETCH_QUOTATIONS_REQUEST, fetchQuotationsSaga)
    ]
}

export default sagaWatcher
