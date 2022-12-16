import { Fragment } from "react";

export default function FirstComponent(props) {

  console.log(props, typeof props);
  console.log(props.title);

  return (
    <Fragment>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iste.</p>
      <button>Click Me!</button>
    </Fragment>
  );
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