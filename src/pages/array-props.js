import React from "react";

const dettagliScuderia = {
  nome: "Toro Rosso",
  piloti: ["Daniil Kvyat", "Carlos Sainz"]
};

 /*
    *   NOTA: {piloti} è racchiuso tra parentesi graffe
    *         Stiamo usando la sintassi di assegnamento 
    *         di destrutturazione introdotta in ES6
    *         che rende possibile estrarre i valori da 
    *         oggetti e array e inserirli in variabili distinte.
    **/

const Piloti = ({piloti}) => {
  const listaPiloti = piloti.map((pilota) =>
    <li key={pilota}>{pilota}</li>
  );
  return(
    <ul>{listaPiloti}</ul>
  );
};

const Scuderia = ({nome, piloti}) => (
  <div>
    <h2>{nome}</h2>
    <Piloti piloti={piloti} />
  </div>
);

export default class propScuderia extends React.Component {
  render() {
    return(
        <Scuderia {...dettagliScuderia} />
    )
  }
}
