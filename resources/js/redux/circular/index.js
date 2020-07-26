import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
    selector: [],
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_CIRCULARES}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_CIRCULARES}_REJECTED`:
            return {
                ...state,
                loading: false,
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