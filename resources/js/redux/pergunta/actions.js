import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchPerguntas = (filters = {}) => ({
    type: types.FETCH_PERGUNTAS,
    payload: axios.get(
        `${window.location.origin}/api/pergunta?${stringify(filters, {
            arrayFormat: "index"
        })}`
    )
});
