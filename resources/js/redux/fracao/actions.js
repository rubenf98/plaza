import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";
import { download } from "../../helper";

export const fetchFracaos = (filters = {}) => ({
    type: types.FETCH_FRACAOS,
    payload: axios.get(
        `${window.location.origin}/api/fracao?${stringify(filters, {
            arrayFormat: "index"
        })}`
    )
});

export const fetchFirstAndLastQuota = () => ({
    type: types.FETCH_FIRST_AND_LAST_QUOTA,
    payload: axios.get(
        `${window.location.origin}/api/quota/first-and-last`
    )
});

export const fetchFracao = (id, filters = {}) => ({
    type: types.FETCH_FRACAO,
    payload: axios.get(`${window.location.origin}/api/fracao/${id}?${stringify(filters, {
        arrayFormat: "index"
    })}`)
});

export const updateFracaos = (data) => ({
    type: types.UPDATE_FRACAOS,
    payload: axios.put(`${window.location.origin}/api/fracao`, data)
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

export const finishFetchCurrentFracaos = () => ({
    type: types.FINISH_FETCH_CURRENT_FRACAOS
});

export const fetchCurrentFracaos = () => ({
    type: types.FETCH_CURRENT_FRACAOS
});

export const downloadQuotas = (filters = {}) => ({
    
    type: types.DOWNLOAD_QUOTAS,
    payload: axios({
        url: `${window.location.origin}/api/download/quotas?${stringify(filters, {
            arrayFormat: "index"
        })}`,
        method: "GET",
        responseType: "blob",
    }).then(
        response => {
            download(response, 'bloco_' + filters.bloco + '.xlsx')
        },
        error => {
            return error.data;
        }
    ),
    meta: { globalError: true }
});
