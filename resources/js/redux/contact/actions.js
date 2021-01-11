import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchContacts = (page = 1, filters = {}) => ({
    type: types.FETCH_CONTACTS,
    payload: axios.get(
        `${window.location.origin}/api/contacts?${stringify(filters, {
            arrayFormat: "index"
        })}&page=${page}`
    )
});

export const createContact = data => ({
    type: types.CREATE_CONTACT,
    payload: axios.post(`${window.location.origin}/api/contacts`, data),
});


