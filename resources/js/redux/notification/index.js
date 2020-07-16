import { types } from './types';

export const initialState = {
    hasContent: false,
    content: {
        type: null,
        message: null,
        description: null,
    },
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SUCCESS:
            return {
                hasContent: true,
                content: {
                    type: 'success',
                    message: action.payload.message,
                    description: action.payload.description
                }
            };

        case types.ERROR:
            return {
                hasContent: true,
                content: {
                    type: 'error',
                    message: action.payload.message,
                    description: action.payload.description
                }
            };
        case types.RESET:
            return {
                hasContent: false,
                content: {
                    type: null,
                    message: null,
                    description: null,
                }

            };
        default:
            return state
    }
}