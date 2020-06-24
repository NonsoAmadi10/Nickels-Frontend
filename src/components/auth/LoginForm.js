import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from 'reactstrap';
function LoginForm() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <FormGroup>

                <input name="email" placeholder="Email..." ref={register({ required: true, pattern: /^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)/i })} className="w-100 form-control" />
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
    )
}


export default LoginForm;