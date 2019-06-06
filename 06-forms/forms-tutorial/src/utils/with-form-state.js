/**
 * wrap a form and save the values in the state
 * this.state = {}
 * onChange
 * onSubmit
 * render => values, onChange 

 * withFormState(MyFormComponent); // this returns MyFormComponentStronger
 * withFormState(configuration)(MyFormComponent)
 */

import React from 'react';

 export default initialState => MyFormComponent =>          
    class StrongerForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = initialState;
        }

        handleChange = (event) => {
            this.setState({
                [event.currentTarget.name]: event.currentTarget.value
            })
        }

        handleSubmit = (event, cb) => {
            event.preventDefault();
            cb();
        }

        render() {
            return <MyFormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                {...this.state} />
        }
    }
 