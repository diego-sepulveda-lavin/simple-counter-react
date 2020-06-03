import React from 'react';
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'

import Contador from './contador.js'

let num1 = 0 //0 -> 2
let num2 = 0 //0 -> 9
let num3 = 0 //0 -> 5
let num4 = 0 //0 -> 9
let num5 = 0 //0 -> 5
let num6 = 0 //0 -> 9


setInterval(() => {
    num6++
    if (num6 > 9){
        num6 = 0
        num5++
        if(num5 > 5){
            num5 = 0
            num4++
            if(num4 > 9){
                num4 = 0
                num3++
                if(num3 > 5){
                    num3 = 0
                    num2++
                    if(num2 > 9 && num1 < 2){
                        num2 = 0
                        num1++
                    }else if (num2 > 3){
                        num2 = 0
                        num1 = 0
                    }
                }
            }
        }
    }



    ReactDOM.render(<Contador num1={num1} num2={num2} num3={num3} num4={num4} num5={num5} num6={num6}/>, document.getElementById('root'))
}, 1000); 









