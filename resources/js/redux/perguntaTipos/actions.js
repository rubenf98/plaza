import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchPerguntaTipos = (filters = {}) => ({
    type: types.FETCH_PERGUNTA_TIPOS,
    payload: axios.get(
        `${window.location.origin}/api/pergunta-tipos?${stringify(filters, {
            arrayFormat: "index"
        })}`
    )
});
