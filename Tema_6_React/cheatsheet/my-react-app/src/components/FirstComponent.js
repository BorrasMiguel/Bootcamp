import { Fragment, useState } from "react";
import PropTypes from "prop-types"

export default function FirstComponent(props) {

  // console.log(props, typeof props);
  // console.log(props.title);


  const myFunction = function (name) {
    return function (event) {
      console.log(name, event.target);
    };
  };

  const mySimpleFunction = function (event) {
    console.log(event);
  }


  return (
    <Fragment>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iste.</p>
      <button onClick={myFunction("Marta")}>Click Me!</button>
      <button onClick={mySimpleFunction("Marta")}>Imprimir Marta</button>
      <button onClick={mySimpleFunction("Miguel")}>Imprimir Miguel</button>
      <button onClick={() => event => {console.log(1, event)}}>Toda la gestión inline</button>
    </Fragment>
  );
}



// Valores por defecto en caso de no pasarle ningun valor.
FirstComponent.defaultProps = {
  title: "Sin Titulo",
  date: "Sin fecha"
}

// Para añadir datos que sean obligatorios, se debe importar un módulo.
FirstComponent.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}


// Alternativa export default FirstComponent
// Solo se puede un exportDefault por archivo

function SecondComponent() {
  return (
    <>
      <h1>Soy otro componente</h1>
    </>
  )
}

function ThirdComponent() {
  return (
    <div>
      <h1>Soy otro componente más</h1>
    </div>
  )
}

export {SecondComponent, ThirdComponent};

// Asi podemos exportar todos los que queramos