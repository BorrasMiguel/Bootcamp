import { BrowserRouter } from "react-router-dom";
import Menu from './components/Menu';
import "./App.css";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="d-flex flex-column flex-md-row">
      <BrowserRouter>
        <Menu />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
