import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  return (
    <Places
      title="Available Places"
      places={[availablePlaces]}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
