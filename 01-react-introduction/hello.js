//create h1 and attach it to the dom

// create h1
// <h1></h1>
// const h1 = document.createElement('h1');

function Hello() {
    return (
        <div>
            <h1>
                <u>
                    hello with div + underline + jsx
                </u>
            </h1>
        </div>
    )
}

// <Header />
function Header() {

}

// <Login />
function Login() {

}

// <Footer />
function Footer() {

}

// const div = (
//     <div>
//         <h1>
//             <u>
//                 hello with div + underline + jsx
//             </u>
//         </h1>
//     </div>
// )

// const div = React.createElement(
//     'div', 
//     null,
//     React.createElement(
//         'h1',
//         null,
//         React.createElement(
//             'u', 
//             null, 
//             'hello with div + underline'
//         )
//     )
// );


// h1.innerText = 'hello world from js';

// attach h1 as a child of container
const container = document.getElementById('container');
// container.appendChild(h1);

// append child with React
ReactDOM.render(
    <Hello />,
    container
)