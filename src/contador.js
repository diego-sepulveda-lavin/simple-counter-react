import React from 'react';



function Contador(props){
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 botondiv" >
                       <button>Stop</button>
                       <button>Reset</button>
                       <button>Resume</button>
                    </div>
                    <div className="col-1 digito" >
                        <div><i className="far fa-clock"></i></div>
                    </div>
                    <div className="col-1 digito" >
                        <div>{props.num1}</div>
                    </div>
                    <div className="col-1 digito" >
                        <div>{props.num2}</div>
                    </div>
                    <span className="puntos">:</span>
                    <div className="col-1 digito" >
                        <div>{props.num3}</div>
                    </div>
                    <div className="col-1 digito" >
                        <div>{props.num4}</div>
                    </div>
                    <span className="puntos">:</span>
                    <div className="col-1 digito" >
                        <div>{props.num5}</div>
                    </div>
                    <div className="col-1 digito" >
                        <div>{props.num6}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contador