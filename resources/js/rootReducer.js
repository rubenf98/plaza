import { combineReducers } from 'redux'

import bloco from './redux/bloco'
import circular from './redux/circular'
import user from './redux/user'
import auth from './redux/auth'
import notification from './redux/notification'

const rootReducer = combineReducers({
    bloco,
    circular,
    user,
    auth,
    notification
})

export default rootReducer