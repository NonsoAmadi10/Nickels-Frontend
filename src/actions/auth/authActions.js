import { REGISTER_SUCCESS, REGISTER_FAILED, LOADING } from './types.js';
import axios from 'axios';
import { push } from 'connected-react-router'
import cogoToast from 'cogo-toast'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'

const setLoading =()=> async dispatch => dispatch({
	type: LOADING
})

const registerUser = (data) => async dispatch => {

	

	try {
		await setLoading();
		const sendRequest = await axios.post('/auth/register', data)

		cogoToast.success('Registration Success! Kindly Login');

		await dispatch({
			type: REGISTER_SUCCESS,
			payload: "okay"
		})

		 dispatch(push('/dashboard'))

	} catch (err) {
		console.log(err)
		
			if(err.response.status === 400) {
				const { username } = err.response.data.user;

				username.forEach((message) => cogoToast.error(message))

				dispatch({
					type: REGISTER_FAILED
				})

				return push('/');
			};

			if (err.response.status === 409){
				const { error } = err.response.data.user;
				cogoToast.error(error)
				dispatch({
					type: REGISTER_FAILED
				})
				return push('/')
			}


				dispatch({
					type: REGISTER_FAILED
				})
				cogoToast.error('Server Error! Please try again');
				return push('/')

	}
}

export {
	registerUser
}