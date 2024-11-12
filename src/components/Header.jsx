import reactLogo from '../assets/react.svg';
import { Link } from 'react-router-dom';


function Header(){
    return (
      <header>
 
        <img src={reactLogo} alt="" />
        <h4>Aprendendo React!</h4>
        <div>
          <h1>As Minhas Funcionalidades</h1>
          <p><Link to="/shopping-list">Lista de Compras</Link></p>
          <p><Link to="/contacts">Contactos</Link></p>
          <p><Link to="/">Home</Link></p>
        </div>
      </header>
    );
  }
  
  
  export default Header