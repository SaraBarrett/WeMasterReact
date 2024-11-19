import { useState, useEffect } from "react"
import StarWarsComponent from "../components/StarWarsComponent";


export default function IndexStartWars(){
    const [people, setPeople] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() =>
        {
          fetch('https://swapi.dev/api/people/')
          .then((response) => { return response.json()})
          .then((data) => {  

           setPeople(data.results);
          });
        },
        []);

    useEffect(() =>
        {
            fetch('https://swapi.dev/api/films/')
            .then((response) => { return response.json()})
            .then((data) => {  

            setFilms(data.results);
            });
        },
        []);
    
    return(
        <div>
            <StarWarsComponent
            data={people}
            />

            <StarWarsComponent
            data={films}
            />
        </div>
    )


}