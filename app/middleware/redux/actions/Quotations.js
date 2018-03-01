export const FETCH_QUOTATIONS_REQUEST = 'fetchQuotationsRequest'
export const IS_QUOTATIONS_FETCHING = 'isQuotationsFetching'
export const QUOTATIONS_FETCHED = 'quotationsFetched'
export const QUOTATIONS_FETCH_FAILED = 'quotationsFetchFailed'

export default fetch = () => {
    return {
        type: FETCH_QUOTATIONS_REQUEST
    }
}

export const isFetching = () => {
    return {
        type: IS_QUOTATIONS_FETCHING
    }
}

export const fetched = (items) => {
    return {
        type: QUOTATIONS_FETCHED,
        payload: items
    }
}

export const fetchFailed = (error) => {
    return {
        type: QUOTATIONS_FETCH_FAILED,
        payload: error
    }
}