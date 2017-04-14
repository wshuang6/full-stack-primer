import {
    FETCH_CHEESE_REQUEST,
    FETCH_CHEESE_SUCCESS,
    FETCH_CHEESE_ERROR
} from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default (state=initialState, action) => {
    if(action.type === FETCH_CHEESE_REQUEST) {
        return {
            ...state,
            loading: true,
            error: null
        }
    }

    if(action.type === FETCH_CHEESE_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            cheeses: action.cheeses
        }
    }

    if(action.type === FETCH_CHEESE_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }

    return state;
}

