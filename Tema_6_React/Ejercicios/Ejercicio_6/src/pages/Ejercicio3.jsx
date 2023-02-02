import Agenda from "../components/Agenda";
import Formulario from '../components/Formulario';


export default function Ejercicio3() {
  return (
    <div className="container">

      <h2 className="my-4">Agenda</h2>
      <Agenda />

      <h2 className="my-4">Nuevo Contacto</h2>
      <Formulario />

    </div>
  );
}


