import './App.css';

import Cards from "./components/FirstComponent";

function App() {
  return (
    <div className="App">
      <Cards 
        title="Monalisa"
        paragraph="Lorem ipsum dolor sit amet."
        href="https://google.com"
        hrefText="Más información"
        imgUrl="https://www.pixartprinting.it/blog/wp-content/uploads/2021/06/1_Mona_Lisa_300ppi.jpg"
      />
      <Cards 
        title="El Grito"
        paragraph="Lorem ipsum dolor sit amet."
        href="https://google.com"
        hrefText="Más información"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png/725px-The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png"
      />
    </div>
  );
}

export default App;
