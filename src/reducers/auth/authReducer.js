import { REGISTER_FAILED, USER_LOADED, REGISTER_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOADING } from '../../actions/auth/types';

const initialState = {
    token: localStorage.getItem("token"),
    loading: false,
    user: null,
    isAuthenticated: null,
    status: null
}

const isEmpty = (value) => {
    let re = /^$/g;
    return re.test(value)
}

export default function authReducer(state = initialState, action) {
    const { payload, type, status } = action;

    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: status || 'okay'
            }

        case LOADING: 
            return {
                ...state,
                loading: true
            }

        case USER_LOADED:
            localStorage.setItem("token", payload.token)
            return {
                ...state,
                user: payload,
                isAuthenticated: !isEmpty(action.payload),
                loading: false,
            }

        case LOGIN_FAILED:
        case REGISTER_FAILED:
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }

        default:
            return state
    }
}