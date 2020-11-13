import { types } from "./types";

export const initialState = {
    data: [],
    currentFracaos: [],
    loading: false,
    loadingCurrentFracaos: true,
    loadingFetchingFracaos: true,
    first: null,
    last: null,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_FRACAOS}_PENDING`:
        case `${types.FETCH_FRACAO}_PENDING`:
        case `${types.UPDATE_FRACAO}_PENDING`:
        case `${types.UPDATE_FRACAOS}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${types.FETCH_FRACAO}_REJECTED`:
        case `${types.UPDATE_FRACAO}_REJECTED`:
        case `${types.UPDATE_FRACAOS}_REJECTED`:
        case `${types.FETCH_FRACAOS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_FIRST_AND_LAST_QUOTA}_FULFILLED`:
            return {
                ...state,
                loading: false,
                first: action.payload.data.first,
                last: action.payload.data.last,
            };

        case `${types.FETCH_FRACAOS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };
        case `${types.UPDATE_FRACAO}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map((record, index) =>
                    record.id === action.payload.data.data.id
                        ? action.payload.data.data
                        : record
                )
            };

        case `${types.UPDATE_FRACAOS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map((record, index) =>
                    record.id === action.payload.data.data.id
                        ? action.payload.data.data
                        : record
                )

            };
        case `${types.FETCH_FRACAO}_FULFILLED`:
            return {
                ...state,
                loading: false,
                currentFracaos: [...state.currentFracaos, action.payload.data.data],
            };

        case types.RESET_CURRENT_FRACAOS:
            return {
                ...state,
                currentFracaos: [],
                loadingCurrentFracaos: false,
            };

        case types.SET_CURRENT_FRACAOS:
            return {
                ...state,
                loadingCurrentFracaos: true,
            };
        case types.FINISH_CURRENT_FRACAOS:
            return {
                ...state,
                loadingCurrentFracaos: false,
            };

        case types.FETCH_CURRENT_FRACAOS:
            return {
                ...state,
                loadingFetchingFracaos: true,
            };
        case types.FINISH_FETCH_CURRENT_FRACAOS:
            return {
                ...state,
                loadingFetchingFracaos: false,
            };


        default:
            return state
    }
}