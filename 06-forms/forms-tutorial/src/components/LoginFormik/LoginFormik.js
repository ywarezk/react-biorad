import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email(),
    password: Yup.string().min(3, 'more please').required()
});

export default function LoginFormik() {

    const handleSubmit = (values) => {
        console.log(values);
    }

    const designError = (msg) => {
        return (
            <div className="alert alert-danger">
                {msg}
            </div>
        )
    }

    const renderLoginForm = () => {
        return (
            <Form>
                <div className="form-group">
                    <label>email</label>
                    <Field className="form-control" type="email" name="email" />
                    <ErrorMessage 
                        render={designError}
                        name="email" 
                        className="alert alert-danger" />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <Field className="form-control" type="password" name="password" />
                    <ErrorMessage name="password" className="alert alert-danger" />
                </div>
                <button className="btn btn-primary" type="submit">submit</button>
            </Form>
        )

    }

    return (
        <Formik
            initialValues={ {email: 'stam@nerdeez.com', password: '12345'} }
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
        {
            renderLoginForm
        }
        </Formik>
    )
}
