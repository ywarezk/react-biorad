import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid mail").required("This field is required"),
    password: Yup.string().required("This field is required").min(5, "min length")
});

export default (props) => {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (values) => {
        const response = await axios.post(
            'https://api.nerdeez.com/api/login/',
            values
        );
        setStatus(response.status);
        if (response.status === 200) {
            props.history.push('/dashboard');
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <Formik
                        initialValues={{email: 'yariv@nerdeez.com', password: '12345'}}
                        onSubmit={handleSubmit}
                        validationSchema={LoginSchema}
                    >
                        {
                            () => (

                                            <Form>
                                                <div className="form-group">
                                                    <Field type="email" name="email" className="form-control" />
                                                    <ErrorMessage component="div" className="alert alert-danger" name="email" />
                                                </div>
                                                <div className="form-group">
                                                    <Field type="password" name="password" className="form-control" />
                                                    <ErrorMessage component="div" className="alert alert-danger" name="password" />
                                                </div>
                                                <button className="btn btn-primary" type="submit">Button</button>
                                                {
                                                    status !== 200 && status !== null && (
                                                        <div className="alert alert-danger">Fail!</div>
                                                    )
                                                }
                                            </Form>



                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}