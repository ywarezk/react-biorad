// @flow

import React, {useState} from 'react';
import withFormState from '../../utils/with-form-state';
import FormWithState from '../../utils/FormWithState.js';

// controlled
// 

export default function LoginFunction(props) : React.Node {
    // const [formValues, setFormValues] = useState({
    //     email: 'stam@nerdeez.com',
    //     password: '12345'
    // });

    // const [stam, setStam] = useState(0);

    // const saveEmailToState = (event) => {
    //     setFormValues({
    //         ...formValues,
    //         email: event.currentTarget.value,
    //     })
    // }

    // const savePasswordToState = (event) => {
    //     setFormValues({
    //         email: formValues.email,
    //         password: event.currentTarget.value
    //     })
    // }

    const handleLoginSubmit = () => {
        console.log(`${props.email} ${props.password}`);
    }

    const renderChild = (values, handleChange, handleSubmit) => {
        return (
            <form onSubmit={(event) => handleSubmit(event, handleLoginSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        value={values.email}
                        onChange={handleChange}
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

    return (
        <FormWithState 
            initialState={{
                email: 'stam@nerdeez.com',
                password: '12345'
            }} 
            render={renderChild}
        >
        {
            renderChild
        }        
        </FormWithState>
    )
}

// export default withFormState({
//     email: 'stam@nerdeez.com',
//     password: '12345'
// })(LoginFunction);