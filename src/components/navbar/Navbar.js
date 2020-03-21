import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  NavDropdown,
  Container
} from "react-bootstrap";

const NavbarP = () => {
  return (
    <Container fluid className="navbarP">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <Image src="images/presta-logo.svg" className="logo-nav" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="dark">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Sign In" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarP;
