import { types } from "./types";

const initialState = {
    data: [],
    meta: {},
    loading: false,
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_USER}_PENDING`:
        case `${types.FETCH_USERS}_PENDING`:
        case `${types.FETCH_USER}_PENDING`:
        case `${types.UPDATE_USER}_PENDING`:
        case `${types.CREATE_USER}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.DELETE_USER}_REJECTED`:
        case `${types.FETCH_USERS}_REJECTED`:
        case `${types.FETCH_USER}_REJECTED`:
        case `${types.UPDATE_USER}_REJECTED`:
        case `${types.CREATE_USER}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.FETCH_USERS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };

        case `${types.FETCH_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data
            };

        case `${types.DELETE_USER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    user => user.id !== action.meta.id
                )
            };

        case `${types.CREATE_USER}_FULFILLED`:
            return {
                ...state,
                data: [action.payload.data.data, ...state.data]
            };

        case `${types.UPDATE_USER}_FULFILLED`:
            return {
                ...state,
                data: state.data.map(
                    (user, index) =>
                        user.id === action.payload.data.data.id
                            ? action.payload.data.data
                            : user
                )
            };

        default:
            return state;
    }
};
