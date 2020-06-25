import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import auth from './auth/authReducer';


export default function connectedReducer(history) {
    return combineReducers({
        auth,
        router: connectRouter(history)
    })
}