/**
 * countdown in a function component
 */

 import React, {useState, useEffect} from 'react';

 export default function Countdown({time, cb}){
    const [timeRemaining, setTimeRemaining] = useState(time)

    useEffect(() => {
        setTimeRemaining(time);
    }, [time])
    console.log('I will calculate the time: ' + time)

    // componentDidMount, componentDidUpdate, componentWillUnmount
    useEffect(() => {     
        const intervalId = setInterval(() => {
            console.log(timeRemaining);
            setTimeRemaining(timeRemaining - 1);
        }, 1000);
        console.log(`running the effect ${intervalId}`);
        
        return () => {
            console.log(`cleaning the effect ${intervalId}`);
            clearInterval(intervalId)
        }
    });

    // will run on componentDidMount
    // will run when time change
    

    useEffect(() => {
        if (timeRemaining === 0) {
            cb();
        }
    }, [timeRemaining])

    console.log('rendering');
    return (
        <h1>{timeRemaining}</h1>
    )
 }