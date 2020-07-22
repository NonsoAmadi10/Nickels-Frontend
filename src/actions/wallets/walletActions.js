import { GET_WALLET, WALLET_FAILED } from './types';
import axios from 'axios';
import { push } from 'connected-react-router'
import cogoToast from 'cogo-toast';

axios.defaults.baseURL = 'https://nickelsbackend.herokuapp.com/api/v1';

//axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

const getWallet = () => async dispatch => {
    try {

        const getMyWallet = await axios.get('/wallets');
        if (getMyWallet.data) {
            dispatch({
                type: GET_WALLET,
                payload: getMyWallet.data[0]
            });

            cogoToast.success('wallet fetched successfully');
        }

        return;
    } catch (err) {
        console.log(err)
        if (err) {
            dispatch({
                type: WALLET_FAILED
            })
            cogoToast.error('Invalid User Credentials! Log In Please')
            dispatch(push('/'))
        }
    }
}


export { getWallet };