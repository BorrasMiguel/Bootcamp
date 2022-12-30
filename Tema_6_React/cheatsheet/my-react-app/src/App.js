import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent";
import Counter from "./components/Counter";
import { useState, createContext } from 'react';
import UseEffectComponent from './components/UseEffectComponent';
import UseContextComponent from './components/UseContextComponent';
import Router from './Router';

export const GlobalContext = createContext({});

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent /> */}
      
      {/* {show && <UseEffectComponent />}  
      <button onClick={() => setShow((!show))}>Show</button> */}

      {/* <GlobalContext.Provider value= "Soy un string guardado en un contexto">
        <UseContextComponent />
      </GlobalContext.Provider> */}

      <Router />

    </div>
  );
}

export default App;
