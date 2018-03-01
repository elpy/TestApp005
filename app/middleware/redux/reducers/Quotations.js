import { Map } from 'immutable'
import { 
    FETCH_QUOTATIONS_REQUEST, 
    IS_QUOTATIONS_FETCHING, 
    QUOTATIONS_FETCHED, 
    QUOTATIONS_FETCH_FAILED 
} from '../actions/Quotations'


const initialState = Map({
    items: [],
    isFetching: false,
    fetched: false,
    error: null
})

export default quotationsReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_QUOTATIONS_REQUEST:
            return state.merge({ isFetching: false, fetched: false, error: null })

        case IS_QUOTATIONS_FETCHING:
            return state.merge({ isFetching: true })

        case QUOTATIONS_FETCHED:
            return state.merge({ isFetching: false, fetched: true, items: action.payload })

        case QUOTATIONS_FETCH_FAILED:
            return state.merge({ isFetching: false, error: action.payload })
        
        default: return state
    }
}