import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
    current: [],
    selector: [],
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_CIRCULARES}_PENDING`:
        case `${types.FETCH_CIRCULAR}_REJECTED`:
            return {
                ...state,
                loading: true
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