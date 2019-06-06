import React from 'react';
import messageService from '../services/message.service';

export default class Gran2 extends React.Component {
    state = {
        msg: ''
    }
    
    componentDidMount() {
        messageService.message.subscribe((msg) => {
            console.log(msg);
            this.setState({
                msg
            });
        })
    }

    render() {
        return (
            <>
                <h1>Grandchild2 {this.state.msg}</h1>
                <input 
                    type="text" 
                    ref={this.props.forwardRef} />
            </>
        )
    }    
}