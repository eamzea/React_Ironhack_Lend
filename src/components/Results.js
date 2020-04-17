import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Result from "./ui/Result";

const Results = (props) => {
  const { stuff } = useParams();

  const [searchState, updateSearchState] = useState("");

  const [toggleState, updateToggleState] = useState(false);

  useEffect(() => {
    updateToggleState(true);
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    updateSearchState(value);
  };

  const result = {
    name: "Videojuego",
    img:
      "https://static.emulatorgames.net/images/gameboy-advance/pokemon-fire-red-version-v1-1.jpg",
    description:
      "Pokémon Edición Rojo Fuego y Edición Verde Hoja, conocidos en Japón como Pocket Monsters Fire Red & Leaf Green, son dos videojuegos lanzados para la consola portátil Game Boy Advance de Nintendo en octubre de 2004, siendo remakes de los videojuegos Pokémon Rojo y Azul, lanzados en 1996",
  };

  return (
    <Container className="result-page" fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={11} className="results-col">
          <p className="titles">Busca de nuevo</p>
          <div className="form-results-box">
            <InputGroup>
              <FormControl
                placeholder="¿Qué estás buscando?"
                aria-label="¿Qué estás buscando?"
                aria-describedby="basic-addon2"
                name="search"
                onChange={(e) => handleChange(e)}
                className="text"
              />
              <InputGroup.Append>
                <Link to={`/results/${searchState}`}>
                  <Button variant="dark" className="text">
                    Buscar
                  </Button>
                </Link>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center">
        <Col md={3} className="m-3 ">
          <Zoom collapse when={toggleState}>
            <Result result={result} />
          </Zoom>
        </Col>
        <Col md={3} className="m-3 ">
          <Zoom collapse when={toggleState}>
            <Result result={result} />
          </Zoom>
        </Col>
        <Col md={3} className="m-3 ">
          <Zoom collapse when={toggleState}>
            <Result result={result} />
          </Zoom>
        </Col>
        <Col md={3} className="m-3 ">
          <Zoom collapse when={toggleState}>
            <Result result={result} />
          </Zoom>
        </Col>
        <Col md={3} className="m-3 ">
          <Zoom collapse when={toggleState}>
            <Result result={result} />
          </Zoom>
        </Col>
        <Col md={3} className="m-3 ">
          <Zoom collapse when={toggleState}>
            <Result result={result} />
          </Zoom>
        </Col>
      </Row>
    </Container>
  );
};

export default Results;
