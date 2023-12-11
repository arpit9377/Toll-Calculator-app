import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="text-primary">About MapUp</h2>
          <p className="text-muted">
            At MapUp, we are passionate about transforming mapping into a practical decision-making tool for commuters, commercial transporters, city planners, and mobility providers.
          </p>

          <p className="text-muted">
            We are building a unified routing intelligence and payment platform by integrating disparate & dynamic data sources like curb data, weather, traffic, tolls, parking, and payments. As the world transitions into autonomous and on-demand TaaS, multi-vector routing will become the preferred paradigm. We are well placed to ride this shift in mobility.
          </p>

          <p className="text-muted">
            TollGuru, our marquee product, is the world's largest toll intelligence platform with complete coverage for toll roads in 80+ countries across North America, South America, Europe, parts of Asia, and Australia. Our robust technology platform delivers reliability, efficiency, and a seamless experience for rideshares, OEMs, TMS providers, fleets, and truckers.
          </p>

          <p className="text-muted">
            We are growing fast with a network of 3 million+ users and ~1000 last-mile delivery, rideshare, logistics companies, and owner operators relying on our route intelligence platform.
          </p>

          <p className="text-muted">
            We are looking for people from all backgrounds who want to make an impact on the millions of drivers who keep our world moving. We use big data and GIS tools combined with machine learning and AI techniques to change the way people get around. We’re creative problem solvers spread across the globe. We learn fast, think big and support each other’s growth and development.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
