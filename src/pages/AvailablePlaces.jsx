import { useEffect, useState, useCallback  } from 'react';
import Places from '../components/Places'
import globeImg from '../assets/globe.png';

export default function AvailablePlaces({ onSelectPlace }) {
  const[availablePlaces, setAvailablePlaces] = useState([]);
  const [userPlaces, setUserPlaces] = useState([]); 
  

  useEffect(() =>
    {
      fetch('http://localhost:3000/places')
      .then((response) => { return response.json()})
      .then((resData) => {  
       console.log(resData)
      setAvailablePlaces(resData.places);
      });
    },
    []);


    function handleStartRemovePlace(place) {
      setModalIsOpen(true);
      selectedPlace.current = place;
    }
  
    function handleStopRemovePlace() {
      setModalIsOpen(false);
    }
  
    function handleSelectPlace(selectedPlace) {
      setUserPlaces((prevPickedPlaces) => {
        if (!prevPickedPlaces) {
          prevPickedPlaces = [];
        }
        if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
          return prevPickedPlaces;
        }
        return [selectedPlace, ...prevPickedPlaces];
      });
    }
  
    const handleRemovePlace = useCallback(async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
  
      setModalIsOpen(false);
    }, []);
  
  return (
    <>
    <header>
      <img src={globeImg} alt="Stylized globe" />
      <h1>PlacePicker</h1>
      <p>
        Create your personal collection of places you would like to visit or
        you have visited.
      </p>
    </header>
    <main>
      <Places
          title="My Selected Places ..."
      fallbackText="No places available."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />


      <Places
        title="I'd like to visit ..."
        fallbackText="Select the places you would like to visit below."
        places={availablePlaces}
        onSelectPlace={handleSelectPlace}
      />


    </main>
  </>
  );
}
