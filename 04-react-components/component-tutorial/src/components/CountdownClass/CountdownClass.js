/**
 * countdown and remove from dom
 */

 import React from 'react';
 import PropTypes from 'prop-types';

// PureComponent
// basic shallow comparison between props and state in the shouldComponentUpdate
// 1. my component should render only when props and state change
// 2. only on the bottom of my components tree

 export default class CountdownClass extends React.Component {
    static propTypes = {
        time: PropTypes.number.isRequired,
        cb: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        
        // anti pattern
        this.state = {
            timeRemaining: props.time
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({
                    timeRemaining: prevState.timeRemaining - 1
                })
            );
            // this.forceUpdate();
        }, 1000);
    }

    componentDidUpdate(previousProps, prevState) {
        if (previousProps.time !== this.props.time) {
            this.setState({
                timeRemaining: this.props.time
            })
        }
        
        if (this.state.timeRemaining === 0) {
            this.props.cb();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    shouldComponentUpdate(nextProps, nextState) {
        

        // if (nextState.timeRemaining % 2 === 0) {
        //     return false
        // } else {
        //     return true;
        // }
    }

    render() {
        return (
            <h1>{this.state.timeRemaining}</h1>
        )
    }
 }