import { types } from "./types";
import axios from "axios";

export const fetchUsers = (page = 1, filters = {}) => ({
    type: types.FETCH_USERS,
    payload: axios.get(`${window.location.origin}/api/users`),
});

export const fetchUser = (filters = {}, id) => ({
    type: types.FETCH_USER_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/users/${id}`),
});

export const deleteUser = id => ({
    type: types.DELETE_USER,
    payload: axios.delete(`${window.location.origin}/api/users/${id}`),
});

export const createUser = data => ({
    type: types.CREATE_USER,
    payload: axios.post(`${window.location.origin}/api/users`, data),
});

export const updateUser = (id, data) => ({
    type: types.UPDATE_USER,
    payload: axios.put(`${window.location.origin}/api/users/${id}`, data),
});

