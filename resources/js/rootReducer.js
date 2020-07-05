import { combineReducers } from 'redux'

import bloco from './redux/bloco'
import user from './redux/user'
import auth from './redux/auth'

const rootReducer = combineReducers({
    bloco,
    user,
    auth
})

export default rootReducer