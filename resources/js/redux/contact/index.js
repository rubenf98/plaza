import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_CONTACTS}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_CONTACTS}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.FETCH_CONTACTS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };


        case `${types.CREATE_CONTACT}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${types.CREATE_CONTACT}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${types.CREATE_CONTACT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };

        default:
            return state
    }
}