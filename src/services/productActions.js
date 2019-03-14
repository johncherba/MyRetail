export function fetchProductsWithRedux() {
    return (dispatch) => {
        dispatch(fetchProductsBegin());
        return fetchProducts().then(([response, json]) => {
            if (response.status === 200) {
                dispatch(fetchProductsSuccess(json))
            } else {
                dispatch(fetchProductsFailure())
            }
        })
    }
}

function fetchProducts() {
    const URL = "http://localhost:9000/api/";
    return fetch(URL, {method: 'GET'})
        .then(handleErrors)
        .then(response => Promise.all([response, response.json()]));
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {products}
});

export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {error}
});