import React from 'react'
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from 'reactstrap';
const RegisterForm = (props) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => console.log(data);
    return (
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
                <input name="password" placeholder="Password" ref={register({ required: true })} className="w-100 form-control" />
                {errors.password && <p className="text-danger m-auto pt-2"> Password is required </p>}
            </FormGroup>

            <FormGroup>
                <Button type="submit" className="btn-primary btn btn-group-lg  w-100 text-center">Register</Button>
            </FormGroup>
        </Form>
    )
}


export default RegisterForm;

