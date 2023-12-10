import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Toll Calculator</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Features" id="basic-nav-dropdown">
              <NavDropdown.Item href="/UserEdu">How Tolling Works</NavDropdown.Item>
              <NavDropdown.Item href="/RouteVisu">Route Visualization</NavDropdown.Item>
              <NavDropdown.Item href="/TollDetails">Toll Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
