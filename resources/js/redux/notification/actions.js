import { types } from './types';

export const success = (message, description) => ({
    type: types.SUCCESS,
    payload: content = { message, description },
});

export const error = (message, description) => ({
    type: types.ERROR,
    payload: content = { message, description },
});

export const reset = () => ({
    type: types.RESET,
    payload: "teste",
});