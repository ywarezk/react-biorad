// @flow

/**
 * <FormWithState >
 * <FormWithState 
        key1=value1 ... 
        render={(valueFromParent, ...) => jsx of child} />

 * withFormState(configuration)(Component)   
 */

import React from 'react';

type Props = {
    initialState : {[key: string]: string},
    render : () => React.Node
}

export default class FormWithState extends React.Component<Props> {
    constructor(props) {
        super(props);
        this.state = props.initialState;
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
        return this.props.children(this.state, this.handleChange, this.handleSubmit);
    }
}