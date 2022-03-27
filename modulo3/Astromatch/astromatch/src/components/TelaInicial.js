import React, { useEffect, useState } from "react";
import "../styles.css";
import axios from "axios";

const TelaInicial = () => {
  const [perfil, setPerfil] = useState([]);

  const getPerfil = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-guimaraes/person
      `
      )
      .then((res) => setPerfil(res.data.profile))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getPerfil();
  }, []);

  const apertaLike = () => {
    const body = {
      id: perfil.id,
      choice: true
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-guimaraes/choose-person
    `,
        body
      )
      .then((res) => {
        getPerfil();
      })
      .catch((err) => console.log(err.response));
  };

  const apertaDislike = () => {
    const body = {
      id: perfil.id,
      choice: false
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-guimaraes/choose-person
    `,
        body
      )
      .then((res) => {
        getPerfil();
      })
      .catch((err) => console.log(err.response));
  };

  const limparTudo = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheus-guimaraes/clear
    `
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err.response));
  };

  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="divbody1">
            <div className="body1-titulo"></div>
            <p>Astromatch</p>
            <div className="body1-titulo">
              <svg className="svg-titulo">
                <path d="M22.59,7.92L23.75,9.33L19,14.08L16.25,11.08L17.41,9.92L19,11.5L22.59,7.92M6,5A3,3 0 0,1 9,8A3,3 0 0,1 6,11A3,3 0 0,1 3,8A3,3 0 0,1 6,5M11,5A3,3 0 0,1 14,8A3,3 0 0,1 11,11C10.68,11 10.37,10.95 10.08,10.85C10.65,10.04 11,9.06 11,8C11,6.94 10.65,5.95 10.08,5.14C10.37,5.05 10.68,5 11,5M6,13C8,13 12,14 12,16V18H0V16C0,14 4,13 6,13M12.62,13.16C14.63,13.5 17,14.46 17,16V18H14V16C14,14.82 13.45,13.88 12.62,13.16Z"></path>
              </svg>
            </div>
          </div>
          <div className="divbody2">
            <div className="div-imagem-body2">
              <img className="imgbody" src={perfil.photo} />
              <div className="infos-user">
                <div className="bloco-infos"></div>
                <div className="titulo-info">{perfil.name},</div>
                <div className="idade-info">{perfil.age}</div>
                <p className="infos-p">{perfil.bio}</p>
              </div>
            </div>
            <div className="div-footer-body2">
              <div>
                <button onClick={apertaDislike} className="botao-footer-x">
                  X
                </button>
                <button onClick={apertaLike} className="botao-footer-l">
                  ♥️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={limparTudo} className="botao-limpar">
        Limpar tudo
      </button>
    </div>
  );
};

export default TelaInicial;
