import { useState, useEffect } from "react"


export default function IndexStartWars(){
    const [people, setPeople] = useState([]);

    useEffect(() =>
        {
          fetch('https://swapi.dev/api/people/')
          .then((response) => { return response.json()})
          .then((data) => {  

           setPeople(data.results);
          });
        },
        []);
        console.log(people)
    
    return(
        <div>
            olá estou no star wars
        </div>
    )


}