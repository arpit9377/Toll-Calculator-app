import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const RouteVisu = () => {
  const [directions, setDirections] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleCalculateRoute = () => {
    if (!origin || !destination) {
      console.error('Please enter both origin and destination.');
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
      },
      (response, status) => {
        if (status === 'OK') {
          setDirections(response);
        } else {
          console.error('Error fetching directions:', status);
        }
      }
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1, padding: '15px' }}>
        <div>
          <label>Origin: </label>
          <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
        </div>
        <div>
          <label>Destination: </label>
          <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
        </div>
        <button onClick={() => handleCalculateRoute()}>Calculate Route</button>
      </div>

      <LoadScript googleMapsApiKey="AIzaSyAHDGBteXpbAZU97q19-XXqMVRiNx9HWEM">
        <GoogleMap
          center={{ lat: 28.7041, lng: 77.1025 }}
          zoom={10}
          mapContainerStyle={{ flex: 1, height: '100%' }}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default RouteVisu;
