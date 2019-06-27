import React from 'react';
// '@biorad/styles/typography'
import H1 from '../styles/components/typography/H1';
import styled, {css} from 'styled-components';



const Hello = ({className}) => {
    return (
        <div className={className}>
            <p style={ {
                backgroundColor: 'red'
            } }>foo bar</p>
            <H1 isBig={true}>hello world</H1>
            <input type="file" name="file" />
        </div>
        
    )
}

export default styled(Hello)`
    color: purple !important;
    border: 1px solid black;
    border-radius: 50px;

    .foo {
        h1{

        }
    }

    &:hover {

    }
`