import "./App.css";
import PhotoOfTheDay from "./Components/PhotoOfTheDay/PhotoOfTheDay";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="App">
      <header className="header">React-NASA</header>
      <PhotoOfTheDay />
      <Card />
    </div>
  );
}

export default App;
