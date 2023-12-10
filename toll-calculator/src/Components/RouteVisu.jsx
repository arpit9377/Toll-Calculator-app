import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';

const RouteVisu = () => {
  const [directions, setDirections] = useState(null);

  // Function to handle directions response
  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      setDirections(response);
    } else {
      console.error('Error fetching directions:', response);
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        className="video-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: -1,
        }}
      >
        {/* Your existing video background code here */}
      </div>

      <Container style={{ marginTop: '100px', marginBottom: '285px', position: 'relative', zIndex: 1 }}>
        {/* Google Maps LoadScript */}
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          {/* GoogleMap component */}
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: 40.7128, lng: -74.0060 }}  // Set the initial center of the map
            zoom={10}  // Set the initial zoom level
          >
            {/* DirectionsRenderer component */}
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      </Container>
    </div>
  );
};

export default RouteVisu;
