import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchOrcamentos = (filters = {}) => ({
    type: types.FETCH_ORCAMENTOS,
    payload: axios.get(
        `${window.location.origin}/api/orcamentos?${stringify(filters, {
            arrayFormat: "index"
        })}`
    )
});
