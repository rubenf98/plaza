import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchFracaos = (filters = {}) => ({
    type: types.FETCH_FRACAOS,
    payload: axios.get(
        `${window.location.origin}/api/fracao?${stringify(filters, {
            arrayFormat: "index"
        })}`
    )
});

export const fetchFracao = id => ({
    type: types.FETCH_FRACAO,
    payload: axios.get(`${window.location.origin}/api/fracao/${id}`)
});

export const updateFracao = (id, data) => ({
    type: types.UPDATE_FRACAO,
    payload: axios.put(`${window.location.origin}/api/fracao/${id}`, data)
});

export const setCurrentFracaos = () => ({
    type: types.SET_CURRENT_FRACAOS
});

export const finishCurrentFracaos = () => ({
    type: types.FINISH_CURRENT_FRACAOS
});

export const resetCurrentFracaos = () => ({
    type: types.RESET_CURRENT_FRACAOS
});
