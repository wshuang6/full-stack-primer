const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
const fetchCheesesSuccess = (cheeses) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
const fetchCheesesError = (error) => ({
    type: FETCH_CHEESES_ERROR,
    error
})

export const fetchCheeses = () =>
    dispatch => {
        dispatch(fetchCheesesRequest());
        console.log('hi');
        return fetch('/api/cheeses')
        .then((res) => {
            console.log(res);
            dispatch(fetchCheesesSuccess(res));
        })
        .catch((err)=> {
            dispatch(fetchCheesesError(err));
        })
    }