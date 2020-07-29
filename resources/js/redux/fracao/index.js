import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_FRACAOS}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_FRACAOS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_FRACAOS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };
        default:
            return state
    }
}