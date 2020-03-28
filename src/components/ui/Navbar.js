import React, { useState } from "react";
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
  const [searchState, updateSearchState] = useState("");

  const handleChange = e => {
    const { value } = e.target;
    updateSearchState(value);
  };

  return (
    <Container fluid className="navbarP">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <Image src="../images/presta-logo.svg" className="logo-nav" />
          </Link>
        </Navbar.Brand>
        <Form
          style={{ display: "flex", flexDirection: "row", flexFlow: "no-wrap" }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={e => handleChange(e)}
            className="text"
          />
          <Link to={`/results/${searchState}`}>
            <Button variant="dark" className="text">
              Search
            </Button>
          </Link>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{ marginRight: "100px" }}>
            <Nav.Link href="/" className="text">
              Inicio
            </Nav.Link>
            <NavDropdown title="Únete" id="basic-nav-dropdown" className="text">
              <NavDropdown.Item href="/log-in" className="text">
                Inicia Sesión
              </NavDropdown.Item>
              <NavDropdown.Item href="/register" className="text">
                Regístrate
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile" className="text">
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/log-out" className="text">
                Salir
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarP;
