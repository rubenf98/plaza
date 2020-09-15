import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_ORCAMENTOS}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${types.FETCH_ORCAMENTOS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${types.FETCH_ORCAMENTOS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };


        case `${types.CREATE_ORCAMENTO}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${types.CREATE_ORCAMENTO}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${types.CREATE_ORCAMENTO}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };
        default:
            return state
    }
}