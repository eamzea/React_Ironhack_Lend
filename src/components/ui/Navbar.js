import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/user.context";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Image,
  NavDropdown,
  Container,
} from "react-bootstrap";

const NavbarP = () => {
  const [searchState, updateSearchState] = useState("");

  const { user } = useContext(UserContext);

  const handleChange = (e) => {
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
            onChange={(e) => handleChange(e)}
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
            <Link to="/" className="text navbarP-link">
              Inicio
            </Link>
            {user ? (
              <NavDropdown
                title={`Hola ${user.username}`}
                id="basic-nav-dropdown"
                className="text"
              >
                <NavDropdown.Item>
                  <Link
                    to={`/profile/${user.username}`}
                    className="text navbarP-item"
                  >
                    Perfil
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/log-out" className="text navbarP-item">
                    Salir
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown
                title="Únete"
                id="basic-nav-dropdown"
                className="text"
              >
                <NavDropdown.Item>
                  <Link to="/login" className="text navbarP-item">
                    Inicia Sesión
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/register" className="text navbarP-item">
                    Regístrate
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavbarP;
