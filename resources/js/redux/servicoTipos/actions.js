import { types } from "./types";
import { stringify } from "query-string";
import axios from "axios";

export const fetchServicoTipos = (filters = {}) => ({
    type: types.FETCH_SERVICO_TIPOS,
    payload: axios.get(
        `${window.location.origin}/api/servico-tipos?${stringify(filters, {
            arrayFormat: "index"
        })}`
    )
});
