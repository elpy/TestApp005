import { call, put } from 'redux-saga/effects'
import { fromJS } from 'immutable'

import { isFetching, fetched, fetchFailed, fetch } from '../actions/Quotations'
import api from '../../api'

function * fetchQuotationsSaga() {
    yield put(isFetching())

    try {
        const response = yield call(api.fetchQuotations)
        const data = fromJS(response.data)
        yield put(fetched(Array.from(data)))
    }
    catch(error) {
        yield put(fetchFailed(error))
    }
}

export default fetchQuotationsSaga