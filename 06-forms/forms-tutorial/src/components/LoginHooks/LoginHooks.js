/**
 * login form
 * controlled
 * useHooks
 */

import React, {useState} from 'react';

function useFormWithState(intialState) {
    const [formValues, setFormValues] = useState(intialState);

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    const handleSubmit = (event, cb) => {
        event.preventDefault();
        cb();
    }

    return [formValues, handleChange, handleSubmit];
}


export default function LoginHooks(props) : React.Node {    
    const [values, handleChange, handleSubmit] = useFormWithState({
        email: 'stam@nerdeez.com',
        password: '12345'
    });

    const handleLogin = () => {
        console.log(`${values.email}`);
    }

    return (
        <form onSubmit={(event) => handleSubmit(event, handleLogin)}>
            <div className="form-group">
                <label>Email</label>
                <input 
                    onChange={handleChange}
                    value={values.email}
                    type="email" 
                    name="email" 
                    className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input   
                    onChange={handleChange}
                    value={values.password}                  
                    type="password" name="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    )
}