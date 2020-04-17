import React, { useState, useContext } from "react";
import UserContext from "../utils/user.context";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

const Contact = () => {
  const [userState, updateUserState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUserState(Object.assign({}, userState, { [name]: value }));
  };

  return (
    <Container fluid className="contact-page">
      <Row className="justify-content-around align-items-center">
        <Col md={8} xs={11} className="contact-cols p-3 my-3">
          <Form.Row className="contact-form">
            <Col className="contact-col">
              <Form.Label className="text text-white">Nombre</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder={user ? user.name : "Juan Pérez"}
                className="text"
                value={user ? user.name : ""}
              />
            </Col>
            <Col className="contact-col">
              <Form.Label className="text text-white">Correo</Form.Label>
              <Form.Control
                size="lg"
                type="email"
                placeholder={user ? user.email : "juan.perez@hotmail.com"}
                className="text"
                value={user ? user.email : ""}
              />
            </Col>
            <Col className="contact-col">
              <Form.Label className="text text-white">Teléfono</Form.Label>
              <Form.Control
                size="lg"
                type="phone"
                placeholder={user ? user.phone : "5544332211"}
                className="text"
                value={user ? user.phone : ""}
              />
            </Col>
          </Form.Row>
        </Col>
        <Col md={3} xs={11} className="contact-cols my-3">
          <Form.Label className="text">Email address</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="name@example.com"
            className="text"
          />
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center my-5">
        <Col xs={11} className="contact-important-cols p-5">
          <p className="titles h3 text-white text-center">
            El costo de los servicios y los servicios mismos dependen del
            cuidador por lo tanto puede variar a la información mostrada. LEND
            no interviene en las prácticas del cuidador
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
