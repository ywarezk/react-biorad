/**
 * hello world in class
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class HelloClass extends React.Component {
    static propTypes = {
        msg: PropTypes.string.isRequired
    }

    static defaultProps = {
        msg: 'stam default'
    }

    // state = {
    //     msgFromState: 'default value',
    //     value: 10,
    //     complexObj: {
    //         hello: 'world'
    //     }
    // }

    constructor(props) {
        super(props);

        this.state = {
            // anti pattern
            msgFromState: props.msg,
            value: 10,
            complexObj: {
                hello: 'world'
            }
        }
    }

    changeText = () => {
        // alert(this.props.msg);

        this.setState({
            msgFromState: 'changed the message'
        });

        

        // wrong!
        // const temp = this.state.complexObj
        // temp['hello'] = 'foo bar'
        // this.setState({
        //     complexObj: temp
        // })

        // right!
        this.setState((prevState) => {
            const temp = {...prevState.complexObj, hello: 'foo bar'};
            return {
                complexObj: temp
            }
        })
    }

    render() {
        // this.props => {msg: '...'}
        const {msg} = this.props;
        return (
            <div>
                <h1>{this.state.msgFromState}</h1>
                <button onClick={this.changeText}>change text</button>
            </div>
            
        );
    }
}