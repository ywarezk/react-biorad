import React from 'react';
import withFormState from '../../utils/with-form-state';

class RegisterClass extends React.Component<> {
    handleSubmit = () => {
        console.log(`${this.props.email} ${this.props.password}`);
    }
    render() {
        return (
            <form onSubmit={(event) => this.props.handleSubmit(event, this.handleSubmit)} noValidate>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        value={this.props.name}
                        onChange={this.props.handleChange}
                        type="text"                        
                        name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        onChange={this.props.handleChange}
                        value={this.props.email}
                        type="email"                        
                        name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        onChange={this.props.handleChange}
                        value={this.props.password}
                        type="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        )
    }
}

export default withFormState({
    name: 'world',
    email: 'stam@nerdeez.com',
    password: 'sdfsadf'
})(RegisterClass);