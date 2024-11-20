import { useLocation } from "react-router-dom";

export default function HomePage(){
    const location = useLocation();
    const message = location.state?.message;

    return( 
    <div>
        <h1>Estou em Casa</h1>

        {message && <div>
            {message}
            </div>}

    </div>)
}