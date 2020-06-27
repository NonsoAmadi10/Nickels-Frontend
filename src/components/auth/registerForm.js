import React, {useState} from 'react';
import { useDispatch} from 'react-redux'
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from 'reactstrap';
import { registerUser } from '../../actions/auth/authActions';
import { Spinner } from 'reactstrap'
const RegisterForm = (props) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();

    const [loading, setLoading] = useState(false)

    const onSubmit = data => {
        try{
            setLoading(true)
             dispatch(registerUser(data))
        }catch(err){
            setLoading(!loading)
        }

    }
    return (

        <div>

            {
                loading ? <div className="d-flex align-items-center justify-content-center flex-column p-3">

                    <Spinner />
                    <p className="text-muted"> Creating Your account ... </p>
                </div > :
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <FormGroup>

                            <input name="email" placeholder="Email..." ref={register({ required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} className="w-100 form-control" />
                            {errors.email && <p className="text-danger"> Please Enter a Valid Email </p>}
                        </FormGroup>

                        <FormGroup>

                            <input name="username" placeholder="Username" ref={register({ required: true, pattern: /^\w+$/gi })} className="w-100 form-control" />
                            {errors.email && <p className="text-danger m-auto pt-2"> Username must be alphanumeric </p>}
                        </FormGroup>
                        <FormGroup>
                            <input name="password" type="password" placeholder="Password" ref={register({ required: true, pattern: /[\w]/gi })} className="w-100 form-control" />
                            {errors.password && <p className="text-danger m-auto pt-2"> Password is required  and must be alphanumeric</p>}
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" className="btn-primary btn btn-group-lg  w-100 text-center">Register</Button>
                        </FormGroup>
                    </Form>



            }
        </div>

    )
}


export default RegisterForm;

