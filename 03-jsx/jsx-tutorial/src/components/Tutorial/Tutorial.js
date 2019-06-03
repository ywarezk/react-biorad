import React from 'react';
import { createContext } from 'jest-runtime';
// import H1 from '../H1/H1';

// <Tutorial /> => <h1></h1>
// React.createElement()
// function Tutorial() {
//     const sayHello = () => {
//         console.log('hello');
//     }

//     // return (
//     //     <H1>hello world</H1>
//     // )
//     // return (
//     //     <>
//     //         <h1 className="hello">hello world</h1>
//     //         <h3>foo bar</h3>
//     //     </>
        
//     // )

//     // return (
//     //     <form>
//     //         <label htmlFor="stam">Stam</label>
//     //         <input id="stam" />
//     //     </form>
//     // )

//     return (
//         <button onClick={sayHello}>click me</button>
//     )
// }

function Tutorial() {
    const booleanExpression = true;
    const defaultValue = booleanExpression || 'default value';

    return (
        <h1>
            {
                Math.random()
            }
            {
                false
            }
            {
                booleanExpression && <span>hello</span>
            }
            {
                booleanExpression || <span>hello</span>
            }
            {
                'stam text'
            }
            {
                createText()
            }
            {
                <span>hello</span>    
            }
            {
                <Hello />
            }
            {
                [
                    <h1>sdfsdf</h1>,
                    "dfgdfgs",
                    30
                ]
            }
            {
                <h1>sdfsdf</h1>
            }
            {
                "dfgdfgs"
            }
        </h1>
    )
}

// 1. falsey => displays nothing used for if, except 0
// 2. true => displays nothing
// 3. Primitives => number, string
// 4. React element or components
// 5. Array of the above


// if user is logged in display one message or if logged out display something else
// {isLoggedIn: true/false}
function IfExample({isLoggedIn}) {
    return (
        <div>
            <h1>logged in</h1>
            <h1>not logged in</h1>
            {
                // wrong
                // if (isLoggedIn) {
                //     return <h1>logged in</h1>
                // }

                // isLoggedIn ? <h1>logged in</h1> : <h1>not logged in</h1>

                (function() {
                    if (isLoggedIn) {
                        return <h1>logged in</h1>
                    } else {
                        return <h1>not logged in</h1>
                    }
                })()
            }
        </div>
    )
}

// for

function ForExample() {
    const todo = [
        'buy soya milk',
        'buy tofu'
    ]

    return (
        <ul style={ {
            backgroundColor: 'red',
            fontSize: '20px'
        } }>
            
            {
                todo.map(todoItem => <li>{todoItem}</li>)
            }
            
        </ul>
    );
}

// jsx rules

