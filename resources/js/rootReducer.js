import { combineReducers } from 'redux'

import bloco from './redux/bloco'
import circular from './redux/circular'
import fracao from './redux/fracao'
import user from './redux/user'
import auth from './redux/auth'
import notification from './redux/notification'
import arquivo from './redux/arquivo'
import servicoTipos from './redux/servicoTipos'
import perguntaTipos from './redux/perguntaTipos'
import pergunta from './redux/pergunta'
import contact from './redux/contact'

const rootReducer = combineReducers({
    bloco,
    circular,
    fracao,
    user,
    auth,
    notification,
    arquivo,
    servicoTipos,
    perguntaTipos,
    pergunta,
    contact
})

export default rootReducer