import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Spinner } from 'reactstrap';
import { loginUser } from '../../actions/auth/authActions';
function LoginForm() {

     const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const [loading, setLoading] = useState(false)

    const onSubmit = data => {
        try{
            setLoading(true)
             dispatch(loginUser(data))
        }catch(err){
            setLoading(!loading)
        }

    }
    
    return (
        <div>
        {
            loading ? <div className="d-flex align-items-center justify-content-center flex-column p-3">

                    <Spinner />
                    <p className="text-muted p-2"> Signing you In... </p>
                </div > :


                <Form onSubmit={handleSubmit(onSubmit)}>

            <FormGroup>

                <input name="email" placeholder="Email..." ref={register({ required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} className="w-100 form-control" />
                {errors.email && <p className="text-danger m-auto pt-2"> Please Enter a Valid Email </p>}
            </FormGroup>
            <FormGroup>
                <input name="password" placeholder="Password" ref={register({ required: true })} className="w-100 form-control" />
                {errors.password && <p className="text-danger m-auto pt-2"> Password is required </p>}
            </FormGroup>

            <FormGroup>
                <Button type="submit" className="btn-info w-100 text-center">Login</Button>
            </FormGroup>
        </Form>
        }
        </div>
        
    )
}


export default LoginForm;