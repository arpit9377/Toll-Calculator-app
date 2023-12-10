import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const RouteVisu = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);

  const handleCalculateRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error('Error fetching directions:', result);
        }
      }
    );
  };

  return (
    // <div
    //   style={{
    //     position: 'relative',
    //     overflow: 'hidden',
    //     width: '100vw',
    //     height: '100vh',
    //   }}
    // >
    //   <video
    //     autoPlay
    //     muted
    //     loop
    //     playsInline
    //     poster={process.env.PUBLIC_URL + '/video-thumbnail.jpg'}
    //     style={{
    //       width: '100%',
    //       height: '100%',
    //       objectFit: 'cover',
    //     }}
    //   >
    //     <source
    //       src={process.env.PUBLIC_URL + '/Assets/bg.mp4'}
    //       type="video/mp4"
    //     />
    //     Your browser does not support the video tag.
    //  </video>

      <Container style={{ marginTop: '100px', marginBottom: '285px', position: 'relative', zIndex: 1 }}>
        <Form>
          <Form.Group controlId="formOrigin">
            <Form.Label>Origin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDestination">
            <Form.Label>Destination</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleCalculateRoute}>
            Calculate Route
          </Button>
        </Form>

        <LoadScript googleMapsApiKey="AIzaSyAHDGBteXpbAZU97q19-XXqMVRiNx9HWEM">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: 40.7128, lng: -74.0060 }}
            zoom={10}
          >
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      </Container>
   // </div>
  );
};

export default RouteVisu;
