import './App.css';
import NavBar from './components/NavBar'
import Hijo from './components/Hijo';
import 'bootstrap-css-only/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting="Bienvenidos, conozca más sobre nosotros!" />

      <hr></hr>
      <Hijo />
    </div>
  );
}

export default App;