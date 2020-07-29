import { combineReducers } from 'redux'

import bloco from './redux/bloco'
import circular from './redux/circular'
import fracao from './redux/fracao'
import user from './redux/user'
import auth from './redux/auth'
import notification from './redux/notification'

const rootReducer = combineReducers({
    bloco,
    circular,
    fracao,
    user,
    auth,
    notification
})

export default rootReducer