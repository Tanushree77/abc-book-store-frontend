import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function HomeNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">ABC book store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Books</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

