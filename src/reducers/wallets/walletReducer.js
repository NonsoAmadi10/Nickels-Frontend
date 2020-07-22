import { GET_WALLET, UPDATE_WALLET, WALLET_FAILED } from '../../actions/wallets/types';

const initialState = {
    loading: true,
    data: {}
}

const walletReducer = (state = initialState, action) => {

    const { payload, type } = action;

    switch (type) {
        case GET_WALLET:
        case UPDATE_WALLET:
            return {
                ...state,
                loading: false,
                data: payload
            }

        case WALLET_FAILED:
        default:
            return state;
    }


}

export default walletReducer;