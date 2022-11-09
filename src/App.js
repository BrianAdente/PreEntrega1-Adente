
import './App.css';
import {NavBar} from "./Components/NavBar"
import { ItemListContainer } from './Components/ItemListContainer';


function App() {
  return (
     <header className="nav-container">
      <NavBar/>
        <ItemListContainer mensaje="los mejores precios del mercado"/>  
        <nav>
          <div className="border-box">
            <h1 className="logo"> outfit shop </h1>
          </div>

          <div className="nav-list">
              <ul>
                <li className="btn-nav">hombres</li>
                <li className="btn-nav">mujeres</li>
                <li className="btn-nav">calsados</li>
                <li className="btn-nav">ropa deportiva</li>
              </ul>
          </div>

          <div className="cart-container">
           
          </div>
        </nav>
      </header> 
  );
}

export default App;
