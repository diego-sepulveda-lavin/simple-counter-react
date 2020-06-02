import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

import Contador from './contador.js'

let num1 = 0
let segundosCounter = 0

setInterval(() => {
    segundosCounter++
    ReactDOM.render(<Main segundosCounter={segundosCounter}/>, document.getElementById('root'))
}, 1000); 


function Main(props){
    return (
        <Contador counter={props.segundosCounter} num1={props.num1} />
    )
}







