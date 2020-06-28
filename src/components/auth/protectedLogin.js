import React, {useEffect} from 'react';
import queryString from 'query-string';
import LoginForm from './LoginForm';
import cogoToast from 'cogo-toast';
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'



function ProtectedLogin() {

	const dispatch = useDispatch()

	useEffect(() => {
		checkQuery()
	})

	const checkQuery =()=> {
		const {username} = queryString.parse(window.location.search)
			if (!username){
				cogoToast.error('You are unauthorized to do this! Please Signup')
				dispatch(push('/'))
			}

			return;
		
	}
	return (

		<div className="d-flex flex-column justify-content-center align-items-center  h-75 w-100 p-4 ">

			<h2 className="mt-3 border-bottom-1 pb-3 mb-3 font-weight-normal"> Sign In </h2>

			
			<LoginForm  className="w-100"/>
		</div>
	)
}



export default ProtectedLogin;