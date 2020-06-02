import React from 'react';



function Contador(props){
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-1 digito" >
                        <div><i class="far fa-clock"></i></div>
                    </div>
                    <div class="col-1 digito" >
                        <div>{props.num1}</div>
                    </div>
                    <div class="col-1 digito" >
                        <div>{props.segundosCounter}</div>
                    </div>
                    <div class="col-1 digito" >
                        <div>{props.segundosCounter}</div>
                    </div>
                    <div class="col-1 digito" >
                        <div>{props.segundosCounter}</div>
                    </div>
                    <div class="col-1 digito" >
                        <div>{props.segundosCounter}</div>
                    </div>
                    <div class="col-1 digito" >
                        <div>{props.counter}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contador