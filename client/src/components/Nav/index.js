import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Menu() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/">Google Book Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved Books</Nav.Link>
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Menu;