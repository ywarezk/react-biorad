import React from 'react';
import {Route} from 'react-router-dom';

export default (props) => {
    const gotoAbout = () => {
        props.history.push('/about/hello');
    }

    return (
        <>
            <h1>Im in the homepage</h1>
            <button onClick={gotoAbout}>goto about page</button>
            <Route                 
                render={() => <h1>child of home</h1>} />
        </>
    )
}