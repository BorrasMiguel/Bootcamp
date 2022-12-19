import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from "./components/FirstComponent";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <FirstComponent title="Título enviado desde el padre" date="16 de Agosto de 2025"/>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent /> */}
    </div>
  );
}

export default App;
