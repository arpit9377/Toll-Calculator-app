import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

const UserEdu = () => {
  return (
    <div style={{ backgroundColor: '#B6BBC4', height: '100vh' }}>
      <Container>
        <Carousel>
          {[...Array(9).keys()].map((index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-50 h-40 mx-auto"
                src={process.env.PUBLIC_URL + `/Assets/c${index + 1}.jpg`}
                alt={`Slide ${index + 1}`}
                style={{ maxHeight: '600px', marginTop:'20px'}}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default UserEdu;
