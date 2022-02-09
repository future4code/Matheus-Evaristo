import React from "react"

export default class Etapa3 extends React.Component {

    render() {
        return (
            <div>
                    <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                    <h3>5. Porque você não terminou o curso?</h3>
                    <input type="text"/>
                    <h3>6. Você fez algum curso complementar?</h3>
                    <select>
                        <option value={"Nenhum"}>Nenhum</option>
                        <option value={"Curso técnico"}>Curso técnico</option>
                        <option value={"Curso de Inglês"}>Curso de Inglês</option>
                    </select>
            </div>

        
            
        )
    }
  }