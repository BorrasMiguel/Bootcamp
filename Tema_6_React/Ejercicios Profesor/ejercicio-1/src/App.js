import Card from './components/Card'

function App() {

  const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem a quo vel omnis eveniet laborum magni libero quae maiores!";
  
  return (
    <div className="App">
      <Card 
        imgUrl="https://via.placeholder.com/640x360" 
        title="Este es un título"
        paragraph={paragraph}
        link="https://google.es"
        linkText="Más información" 
      />
    </div>
  );
}

export default App;
