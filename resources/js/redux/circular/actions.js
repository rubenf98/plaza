import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchCirculares = (page = 1, filters = {}) => ({
    type: types.FETCH_CIRCULARES,
    payload: axios.get(
        `${window.location.origin}/api/circular?${stringify(filters, {
            arrayFormat: "index"
        })}&page=${page}`
    )
});

export const fetchCircular = (filters = {}, id) => ({
    type: types.FETCH_CIRCULAR,
    payload: axios.get(`${window.location.origin}/api/circular/${id}`),
});

export const deleteCircular = id => ({
    type: types.DELETE_CIRCULAR,
    payload: axios.delete(`${window.location.origin}/api/circular/${id}`),
});

export const createCircular = data => ({
    type: types.CREATE_CIRCULAR,
    payload: axios.post(`${window.location.origin}/api/circular`, data),
});

export const updateCircular = (id, data) => ({
    type: types.UPDATE_CIRCULAR,
    payload: axios.put(`${window.location.origin}/api/circular/${id}`, data),
});

