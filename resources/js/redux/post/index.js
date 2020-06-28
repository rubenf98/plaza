import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
    hasErrors: false,
}

export default function postsReducer(state = initialState, action) {
    switch (action.type) {
        case `${types.FETCH_POSTS}_PENDING`:
            return {
                ...state,
                loading: true
            };

        case `${types.FETCH_POSTS}_REJECTED`:
            return {
                ...state,
                loading: false
            };

        case `${types.FETCH_POSTS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        default:
            return state
    }
}