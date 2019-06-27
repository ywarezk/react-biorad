import {Formik, Form, Field} from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../redux/actions';
// import nameService from '../services/name.service';

// { loggedInUsername: 'yariv katz', tasks: [...] } => {loggedInUsername: 'other name'}
function Login(props) {
    const handleSubmit = (values) => {
        console.log(values);
        props.setName(values.name);
        // nameService.message.next(values.name);
    }

    return (
        <Formik
            initialValues={ {name: 'Yariv'} }
            onSubmit={ handleSubmit }
        >
            {
                () => (
                    <Form>
                        <Field type="text" name="name" />
                        <button type="submit">Login</button>
                    </Form>
                )
            }
        </Formik>
    )
}

// function mapDispatchToProps(dispatch) {
//     return {
//         setNameInLogin: function(newName) {
//             dispatch(setName(newName))
//         }
//     }
// }


// dispatch(setName);
export default connect(
    null,
    {
        setName: setName
    }
)(Login)