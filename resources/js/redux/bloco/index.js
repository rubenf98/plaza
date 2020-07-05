import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
    selector: [],
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_BLOCO_SELECTOR}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_BLOCO_SELECTOR}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_BLOCO_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data
            };
        default:
            return state
    }
}