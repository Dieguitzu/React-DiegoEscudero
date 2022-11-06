import './App.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
//import ItemListConteiner from './app/components/ItemListConteiner';
import Router from "./app/Router";
import Item from './app/components/Item';


function App() {

  return (
    <div className="App">
      <Router />
      <Item />
    </div>
  );
}

export default App;