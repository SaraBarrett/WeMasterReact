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
          <h5 id='myID'>teste</h5>
  
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>


          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>


          <p><Link className='btn btn-info' to="/shopping-list">Lista de Compras</Link></p>

          <p><Link className='btn btn-danger'  to="/contacts">Contactos</Link></p>
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