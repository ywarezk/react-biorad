// @flow

import * as React from 'react';


// uncontrolled

// ref

//

export default class LoginClass extends React.Component<> {
    constructor(props) {
        super(props)

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();

        this.state = {
            hello: 'world'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        console.log(`${email} ${password}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} noValidate>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        ref={this.emailRef}
                        type="email"                        
                        name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        ref={this.passwordRef}
                        type="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        )
    }
}