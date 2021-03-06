//REACT
import React from 'react';
//BOOTSTRAP
import { Nav, Navbar } from 'react-bootstrap';
// HELPER
import styled from 'styled-components';

function NavigationBar() {
  return (<Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"> Crypto Analyzer  </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" placeholder=" please input github repository" />
  
      </Form> */}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>)
}



const Styles = styled.div`
  .navbar { background-color: #222;  z-index: 10;       }

  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: #c61b6b; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #FFFFFF;
    &:hover { color: #c61b6b; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

export default NavigationBar