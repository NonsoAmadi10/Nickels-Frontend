import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import auth from './auth/authReducer';
import wallet from './wallets/walletReducer';


export default function connectedReducer(history) {
    return combineReducers({
        auth,
        wallet,
        router: connectRouter(history)
    })
}