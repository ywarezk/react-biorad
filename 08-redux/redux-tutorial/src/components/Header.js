import React from 'react';
// import messageService from '../services/name.service';
import { connect } from 'react-redux';


function Header(props) {
    // useEffect(() => {
    //     messageService.subscribe((name) => {
    //         //...
    //     })
    // })


    return (
        <h1>Hi my name is: {props.myName}</h1>
    )
}

function mapStateToProps(state) {
    return {
        myName: state.login.get('loggedInUsername')
    }
}

export default connect(
    mapStateToProps,
    null
)(Header);