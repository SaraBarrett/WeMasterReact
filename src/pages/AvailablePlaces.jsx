import { useState, useCallback, useRef } from 'react';
import Places from '../components/places/Places'
import Modal from '../components/places/Modal'
import DeleteConfirmation from '../components/places/DeleteConfirmation'
import globeImg from '../assets/globe.png';
import { getPlacesData, updatePlacesData } from '../https';

export default function AvailablePlaces({ onSelectPlace }) {
  const selectedPlace = useRef(null);
  const [userPlaces, setUserPlaces] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  
  //Api request to get all places data
  const availablePlaces = getPlacesData();
 


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
      
      //faz pedido put para o backend
      updatePlacesData([selectedPlace, ...userPlaces]);
    }
  
    const handleRemovePlace = useCallback(async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
      updatePlacesData(userPlaces.filter(
        (place) => place.id != selectedPlace.current.id
      ));

      setModalIsOpen(false);
    }, [userPlaces]);
  
  return (
    <>
     <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
    <div>
      <img src={globeImg} alt="Stylized globe" />
      <h1>PlacePicker</h1>
      <p>
        Create your personal collection of places you would like to visit or
        you have visited.
      </p>
    </div>
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
