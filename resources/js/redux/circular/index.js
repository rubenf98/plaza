import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
    current: [],
    tags: [],
    loadingTags: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_CIRCULARES}_PENDING`:

            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_CIRCULAR}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.FETCH_CIRCULAR_TAGS}_PENDING`:
            return {
                ...state,
                loadingTags: true
            };

        case `${types.FETCH_CIRCULAR_TAGS}_REJECTED`:
            return {
                ...state,
                loadingTags: false
            };

        case `${types.FETCH_CIRCULAR_TAGS}_FULFILLED`:
            return {
                ...state,
                loadingTags: false,
                tags: action.payload.data,
            };

        case `${types.FETCH_CIRCULARES}_REJECTED`:
        case `${types.FETCH_CIRCULAR}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_CIRCULAR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };
        case `${types.FETCH_CIRCULARES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };
        default:
            return state
    }
}