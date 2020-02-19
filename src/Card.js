import React from "react";

export const Card = props => {
  return (
    <section>
      <h2>Mi nombre es {props.name}</h2>
      <p>Estudio {props.career}</p>
      <p>Mi correo es {props.email} </p>
    </section>
  );
};
