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