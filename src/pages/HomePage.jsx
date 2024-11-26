import { useLocation } from "react-router-dom";

export default function HomePage(){
    const location = useLocation();
    const message = location.state?.message;

    console.log('o token é '+ localStorage.getItem('token'));

    return( 
    <div>
        <h1>Estou em Casa</h1>

        {message && <div>
            {message}
            </div>}

    </div>)
}