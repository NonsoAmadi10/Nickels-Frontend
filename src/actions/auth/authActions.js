import { REGISTER_SUCCESS, REGISTER_FAILED, LOADING, LOGIN_SUCCESS, LOGIN_FAILED, USER_LOADED } from './types.js';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { push } from 'connected-react-router'
import cogoToast from 'cogo-toast'

axios.defaults.baseURL = 'http://localhost:8000/api/v1'

const setLoading =()=> async dispatch => dispatch({
	type: LOADING
})

const loadUser = async (token)=> {
	 	const {username} = await jwtDecode(token);

	 	return username; 	
}


const loginUser =(data) =>async dispatch => {
	try{
		const logUser = await axios.post('/auth/login', data);
		if(logUser.data) {
			dispatch({
				type: LOGIN_SUCCESS,
				status: "okay"
			});

			const user = await loadUser(logUser.data.user.token);
			
			dispatch({
	 		type: USER_LOADED,
	 		payload: user
	 	}); 

	 	cogoToast.success(`Welcome Back ${user}!`)

	 	dispatch(push('/dashboard'))
}

return;
		
	}catch(err){
		if(err){
			dispatch({
				type: LOGIN_FAILED
			})
			cogoToast.error('Invalid User Credentials')
			dispatch(push('/'))
		}
	}



}

const registerUser = (data) => async dispatch => {

	

	try {
		await setLoading();
		const sendRequest = await axios.post('/auth/register', data)

		cogoToast.success('Registration Success! Kindly Login');

		await dispatch({
			type: REGISTER_SUCCESS,
			status: "okay"
		})

		 dispatch(push(`/login?username=${sendRequest.data.user.username}`))

	} catch (err) {
		
			if(err.response.status === 400) {
				const { username } = err.response.data.user;

				username.forEach((message) => cogoToast.error(message))

				dispatch({
					type: REGISTER_FAILED
				})

				dispatch(push('/'));
			};

			if (err.response.status === 409){
				const { error } = err.response.data.user;
				cogoToast.error(error)
				dispatch({
					type: REGISTER_FAILED
				})
				dispatch(push('/'))
			}


				dispatch({
					type: REGISTER_FAILED
				})
				cogoToast.error('Server Error! Please try again');
				return push('/')

	}
}

export {
	registerUser,
	loginUser
}