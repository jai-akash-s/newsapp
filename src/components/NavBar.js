import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Badge } from 'react-bootstrap';

const NavBar = (setCategories) => {
  return (
    <div>
         <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <Badge bg='danger' className='p-3'>News App</Badge>
          </Navbar.Brand>
          <Nav className="me-auto">
           
            <Nav.Link onClick={() => setCategories('business')}>Business</Nav.Link>
            <Nav.Link onClick={() => setCategories('sports')}>Entertaiment</Nav.Link>
            <Nav.Link onClick={() => setCategories('entertaiment')}>Entertaiment</Nav.Link>
             </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavBar
