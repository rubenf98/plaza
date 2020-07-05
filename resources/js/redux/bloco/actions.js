import { types } from "./types";
import axios from "axios";

export const fetchBlocos = (page = 1, filters = {}) => ({
    type: types.FETCH_BLOCOS,
    payload: axios.get(`${window.location.origin}/api/users`),
});

export const fetchBlocoSelector = (filters = {}) => ({
    type: types.FETCH_BLOCO_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/blocos`),
});

export const fetchBloco = (filters = {}, id) => ({
    type: types.FETCH_BLOCO,
    payload: axios.get(`${window.location.origin}/api/users/${id}`),
});

export const deleteBloco = id => ({
    type: types.DELETE_BLOCO,
    payload: axios.delete(`${window.location.origin}/api/users/${id}`),
});

export const createBloco = data => ({
    type: types.CREATE_BLOCO,
    payload: axios.post(`${window.location.origin}/api/users`, data),
});

export const updateBloco = (id, data) => ({
    type: types.UPDATE_BLOCO,
    payload: axios.put(`${window.location.origin}/api/users/${id}`, data),
});

