import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="mt-0" style={{ backgroundColor: "#161A30", color: "#B6BBC4", padding: "" }}>
      <Container>
        <Row>
          <Col>
            <p className="text-center">
              &copy; 2023 Toll Calculator. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
