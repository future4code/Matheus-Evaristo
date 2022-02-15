import React from "react"

export default class Etapa1 extends React.Component {
    render() {
        return <div>
                    <h1>Etapa 1 - Dados Gerais</h1>
                    <h3>1. Qual é seu nome?</h3>
                    <input type="text"/>
                    <h3>2. Qual a sua idade?</h3>
                    <input type="text"/>
                    <h3>3. Qual é o seu e-mail?</h3>
                    <input type="text"/>
                    <h3>4. Qual a sua escolaridade?</h3>
                    <select>
                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo</option>
                        <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo</option>
                    </select>
               </div>

        
            
        
    }
  }
  