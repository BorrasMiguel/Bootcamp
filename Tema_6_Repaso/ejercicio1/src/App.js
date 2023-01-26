import './App.css';
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <Card 
        title="Monalisa"
        paragraph="Monalisa fue pintada por leonardo DaVinci"
        urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/368px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg"
        url="http://www.google.es"
      />
      <Card 
        title="El Grito"
        paragraph="grito (en noruego Skrik) es el título de cuatro cuadros del noruego Edvard Munch. La versión más famosa se encuentra en la Galería Nacional de Noruega y fue completada en 1893"
        urlImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png/375px-The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png"
        url="http://www.google.es"
      />
    </div>
  );
}

export default App;
