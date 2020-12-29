import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchArquivos = (page = 1, filters = {}) => ({
    type: types.FETCH_ARQUIVOS,
    payload: axios.get(
        `${window.location.origin}/api/arquivos?${stringify(filters, {
            arrayFormat: "index"
        })}&page=${page}`
    )
});

export const fetchArquivosTipos = (page = 1, filters = {}) => ({
    type: types.FETCH_ARQUIVO_TIPOS,
    payload: axios.get(`${window.location.origin}/api/arquivo-tipos`)
});

export const createArquivo = data => ({
    type: types.CREATE_ARQUIVO,
    payload: axios.post(`${window.location.origin}/api/arquivos`, data),
});

export const deleteArquivo = (id) => ({
    type: types.DELETE_ARQUIVO,
    payload: axios.delete(`${window.location.origin}/api/arquivos/${id}`),
    meta: { id }
});

