import React from 'react'

// const About = () => (

//     <div>
//         <h1>
//             what is this ABOUT ?
//         </h1>
//         <a href="./index" className="cool-link">Home</a>
//         <style jsx global>{`
//     html,
//     body {
//         padding: 0;
//         margin: 0;
//         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
//         Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//         background-color: #353435;
//         color: white !important;
//     }

//     div {
//         padding: .25rem 1rem;
//     }

//     * {
//         box-sizing: border-box;
//     }

//     a {
//         color : white !important;
//     }
    
//     .cool-link {
//         display: inline-block;
//         color: #000;
//         text-decoration: none;
//     }
    
//     .cool-link::after {
//         content: '';
//         display: block;
//         width: 0;
//         height: 2px;
//         background: #000;
//         transition: width .3s;
//     }
    
//     .cool-link:hover::after {
//         width: 100%;
//         transition: width .3s;
//         }
//     `}</style>
//     </div>
// )

// function something() {
//     const name = "Dave"
//     return (
//         <div>
//             <h2>I'm another ABOUT THING! - {name}</h2>
//             <a href="./index"><h3>Home</h3></a>
//         </div>
//     )
// }

class About extends React.Component {
    render() {
        return(
            <div>
        <h1>
            what is this ABOUT ?
        </h1>
        <a href="./index" className="cool-link">Home</a>
        <style jsx global>{`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #353435;
        color: white !important;
    }

    div {
        padding: .25rem 1rem;
    }

    * {
        box-sizing: border-box;
    }

    a {
        color : white !important;
    }
    
    .cool-link {
        display: inline-block;
        color: #000;
        text-decoration: none;
    }
    
    .cool-link::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width .3s;
    }
    
    .cool-link:hover::after {
        width: 100%;
        transition: width .3s;
        }
    `}</style>
    </div>
        )
    }
}

export default About