import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from 'react-bootstrap/Navbar';
import Para from './Para';
import Footer from './Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar className='nav'>
        <Container className='cont'>
        
      
        <Navbar.Brand href="#home">Coffee</Navbar.Brand>
       
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#About">Menu</Nav.Link>
            <Nav.Link href="#home">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Contacs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Para/>
      <Footer/>
      
      
      
    </>
  );
}




export default App
