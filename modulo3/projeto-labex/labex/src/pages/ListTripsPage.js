import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constant/urls";
import { CardBox, Container } from "../style/style";

const ListTripsPage = () => {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    getLista();
  }, []);

  const getLista = () => {
    axios
      .get(`${BASE_URL}matheus-guimaraes/trips`)
      .then((res) => setLista(res.data.trips))
      .catch((err) => console.log(err.response));
  };

  const chamaLista = lista.map((viagem) => {
    return (
      <CardBox key={viagem.id}>
        <p>
          {" "}
          <b>Nome:</b> {viagem.name}{" "}
        </p>
        <p>
          {" "}
          <b>Descrição:</b> {viagem.description}{" "}
        </p>
        <p>
          {" "}
          <b>Planeta:</b> {viagem.planet}{" "}
        </p>
        <p>
          {" "}
          <b>Duração:</b> {viagem.durationInDays} dias
        </p>
        <p>
          {" "}
          <b>Data:</b> {viagem.date}
        </p>
      </CardBox>
    );
  });

  console.log(lista);

  return <Container>{chamaLista}</Container>;
};

export default ListTripsPage;
