import { combineReducers } from 'redux'

import bloco from './redux/bloco'
import user from './redux/user'
import auth from './redux/auth'
import notification from './redux/notification'

const rootReducer = combineReducers({
    bloco,
    user,
    auth,
    notification
})

export default rootReducer