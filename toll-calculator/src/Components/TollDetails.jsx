
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const TollDetails = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [cost, setCost] = useState(null);
  const [polyline, setPolyline] = useState(null);

  const handleCalculateCost = async () => {
    try {
        const apiKey = 'qLn6TLg49DmNhRBJ3hj4dHdJJTF7R3F2';

        // Construct the request body
        const requestBody = {
          from: {
            address: from,
            lat: 39.95209, // Replace with actual latitude
            lng: -75.16219, // Replace with actual longitude
          },
          to: {
            address: to,
            lat: 40.71455, // Replace with actual latitude
            lng: -74.00715, // Replace with actual longitude
          },
          waypoints: [
            {
              address: 'Bridgewater Township, New Jersey',
            },
          ],
          serviceProvider: 'here',
          vehicle: {
            type: '2AxlesTaxi',
            weight: {
              value: 20000,
              unit: 'pound',
            },
            height: {
              value: 7.5,
              unit: 'meter',
            },
            length: {
              value: 7.5,
              unit: 'meter',
            },
            axles: 4,
            emissionClass: 'euro_5',
          },
        };
  
        const response = await fetch('https://apis.tollguru.com/toll/v2/origin-destination-waypoints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
          },
          body: JSON.stringify(requestBody),
        });
  


      const data = await response.json();

      setCost(data.cost);
      setPolyline(data.polyline);

      console.log('Toll Cost:', data.cost);
      console.log('Polyline:', data.polyline);
    } catch (error) {
      console.error('Error fetching toll details:', error);
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
    <video
    autoPlay
    muted
    loop
    playsInline
    poster={process.env.PUBLIC_URL + '/video-thumbnail.jpg'}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  >
    {/* Update the src attribute with your video file */}
    <source
      src={process.env.PUBLIC_URL + '/Assets/bg.mp4'}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  </div>
    <Container style={{ marginTop: '200px', marginBottom: '285px', position: 'relative', zIndex: 1 }}>
      <Card style={{ backgroundColor: '#31304D', color: '#B6BBC4' }}>
        <Card.Body>
          <Form>
            <Form.Group controlId="formFrom">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter origin"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formTo">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter destination"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleCalculateCost} style={{marginTop:'10px'}}>
              Calculate Toll Cost
            </Button>
          </Form>

          {cost !== null && (
            <div style={{ marginTop: '20px' }}>
              <h3>Toll Cost: {cost}</h3>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default TollDetails;
