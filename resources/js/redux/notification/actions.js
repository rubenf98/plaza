import { types } from './types';

export const success = (message, description) => ({
    type: types.SUCCESS,
    payload: { message, description },
});

export const error = (message, description) => ({
    type: types.ERROR,
    payload: { message, description },
});

export const reset = () => ({
    type: types.RESET,
    payload: "teste",
});