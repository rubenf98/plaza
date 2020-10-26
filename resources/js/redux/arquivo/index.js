import { types } from "./types";

export const initialState = {
    data: [],
    meta: {},
    loading: false,
    dataTipos: [],
    loadingTipos: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.FETCH_ARQUIVOS}_PENDING`:
            return {
                ...state,
                loading: true,

            };
        case `${types.FETCH_ARQUIVOS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${types.FETCH_ARQUIVOS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta
            };

        case `${types.FETCH_ARQUIVO_TIPOS}_PENDING`:
            return {
                ...state,
                loadingTipos: true,

            };
        case `${types.FETCH_ARQUIVO_TIPOS}_REJECTED`:
            return {
                ...state,
                loadingTipos: false,
            };
        case `${types.FETCH_ARQUIVO_TIPOS}_FULFILLED`:
            return {
                ...state,
                loadingTipos: false,
                dataTipos: action.payload.data.data,
            };


        case `${types.CREATE_ARQUIVO}_PENDING`:
            return {
                ...state,
                loading: true
            };
        case `${types.CREATE_ARQUIVO}_REJECTED`:
            return {
                ...state,
                loading: false,
            };
        case `${types.CREATE_ARQUIVO}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [action.payload.data.data, ...state.data]
            };
        default:
            return state
    }
}