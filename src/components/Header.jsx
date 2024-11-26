import reactLogo from '../assets/react.svg';
import { Link, useRouteLoaderData } from 'react-router-dom';


function Header(){
    const loader = useRouteLoaderData('root');

    return (
      <header>
 
        <img src={reactLogo} alt="" />
        <h4>Aprendendo React!</h4>
        <div>
          <h1>As Minhas Funcionalidades</h1>
          <p><Link to="/shopping-list">Lista de Compras</Link></p>
          <p><Link to="/contacts">Contactos</Link></p>
          {!loader.login
           &&
          <p><Link to="/login">Login</Link></p>}
          {
            loader.login &&
            <p><Link to="/logout">Logout</Link></p>
          }
     
        </div>
      </header>
    );
  }
  
  
  export default Header