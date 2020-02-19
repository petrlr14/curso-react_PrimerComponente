import React from "react";
import "./App.css";
import { Card } from "./Card";

const App = () => {
  return (
    <div className="App">
      <h1>Hola, Mundo!</h1>
      <Card
        name="Douglas Hernández"
        career="Ingeniería Informática"
        email="00004516@uca.edu.sv"
      />
      <Card
        name="Pedro Gómez"
        career="Ingeniería Informática"
        email="00057616@uca.edu.sv"
      />
      <Card
        name="Sara Romero"
        career="Ingeniería Informática"
        email="00030716@uca.edu.sv"
      />
      <Card
        name="Alejandra Ramírez"
        career="Arquitectura"
        email="00005516@uca.edu.sv"
      />
      <Card
        name="Diego Oliva"
        career="Ingeniería Industrial"
        email="00000316@uca.edu.sv"
      />
      <Card
        name="Giselle Serpas"
        career="Ingeniería Industrial"
        email="00306716@uca.edu.sv"
      />
      <Card
        name="Eduardo Alvarenga"
        career="Ingeniería Química"
        email="00112016@uca.edu.sv"
      />
    </div>
  );
  //Manera de crear un componente sin utilizar JSX, nunca hagan esto por el amor a jebus.
  /* return (
    React.createElement('div', {className: "App"}, 
      React.createElement('h1', null, 'Hola Mundo'),
      React.createElement('p', null, 'Mi primera app en React'),
      React.createElement('section', null, 
        React.createElement('h2', null, 'Mi nombre es Douglas Hernández'),
        React.createElement('p', null, 'Estudio Ingeniería Informática'),
        React.createElement('p', null, 'Mi correo es  00004516@uca.edu.sv')
      )
    )
  ); */
};

export default App;
