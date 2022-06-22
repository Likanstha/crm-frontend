import React from 'react'
import logo from "../../assets/img/logo.png";
import { Nav,Navbar } from 'react-bootstrap'
import {  NavLink, useHistory  } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => {
  const history = useHistory();
  
  const logMeout =()=>{
    history.push("/");
  };
  return( 
  <Navbar  collapseOnSelect bg="info"
   variant="dark" expand="md"  >
    <Navbar.Brand>
      <img src={logo} alt= "logo" width="50px" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id ="basic-navbar-nav">
      <Nav className="ml-auto">
         {/* <Link to="/dashboard">Dashboard</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="">Logout</Link>  */}
        
        <LinkContainer to="/tickets">
          <Nav.Link >Tickets</Nav.Link>
        </LinkContainer> 
         <LinkContainer to="/dashboard">
        <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer> 
        
        <Nav.Link onClick={logMeout}>Logout</Nav.Link>
       
        

          
     
        {/* <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/dashboard">Tickets</Nav.Link>
        <Nav.Link href="/dashboard">Logout</Nav.Link> */}
 
      
      </Nav>
      </Navbar.Collapse>
  </Navbar>
  )  
}
