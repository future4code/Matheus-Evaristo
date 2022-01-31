import React from 'react';
import './CardPequeno.css'



function CardPequeno(props) {
    return (
        <><div className="smallcard-container">
                <div>

                    <img src= {props.imagem1} /> <p><b>Email:</b> {props.email}</p>

                </div>
            </div>

            <div className="smallcard-container">
                <div> 

                  <img src= {props.imagem2} /> <p><b>Endereço:</b> {props.endereco}</p><br>{props.cidadeEstado}</br>

                </div>
        
            </div>
        </>
    )
}

export default CardPequeno;