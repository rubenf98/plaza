import { types } from "./types";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { history } from "../../routes";
import { success } from "../../redux/notification/actions";

export const login = data => {
    return (dispatch) => {
        const response = dispatch({
            type: types.LOGIN,
            payload: axios.post(`${window.location.origin}/api/login`, data)
        })

        response.then((res) => {
            const token = res.value.data.access_token;
            const login = res.value.data.login;
            localStorage.setItem("token", token);
            setAuthorizationToken(token);
            login ? history.push("/login/first") : history.push("/");
        })
    }
};

export const register = data => {
    return (dispatch) => {
        const response = dispatch({
            type: types.REGISTER,
            payload: axios.post(`${window.location.origin}/api/register`, data)
        })

        response.then((res) => {
            dispatch(success("Conta criada", res.value.data.message));
        })
    }
};

export const me = () => ({
    type: types.ME,
    payload: axios.get(`${window.location.origin}/api/me`)
});

export const updateMe = data => {
    return (dispatch) => {
        const response = dispatch({
            type: types.UPDATE_ME,
            payload: axios.put(`${window.location.origin}/api/me`, data)
        })

        response.then((res) => {
            history.push("/");
        })
    }
};

export function loginSuccess(token) {
    return {
        type: types.LOGIN_SUCCESS, payload: token
    };
}

export const logout = data => {
    return (dispatch) => {
        const response = dispatch({
            type: types.LOGOUT,
            payload: axios.post(`${window.location.origin}/api/logout`, data)
        })

        response.then((res) => {
            resetToken();
        })
    }
};

export function refreshAuthorizationToken(token) {
    return dispatch => {
        return axios.get({
            url: `${window.location.origin}/api/refresh`,
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                const token = res.data.data.access_token;
                localStorage.setItem("token", token);
                setAuthorizationToken(token);
                dispatch(loginSuccess(jwtDecode(token)));
            })
            .catch(err => {
                resetToken();
            });
    };
}

export function setAuthorizationToken(token) {
    token ?
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        :
        delete axios.defaults.headers.common["Authorization"];
}

export function resetToken() {
    localStorage.removeItem("token");
    setAuthorizationToken(false);
}