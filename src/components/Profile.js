import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LendService from "../services/lendService";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  medium: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const Profile = (props) => {
  const { username } = useParams();

  const classes = useStyles();

  const [userInfoState, updateUserInfoState] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    stuffs: [],
  });

  const [ownerState, updateOwnerState] = useState();

  const getProfileInfo = () => {
    const lendService = new LendService();

    lendService.getProfile(username).then((res) => {
      updateUserInfoState(res.data.profile);
      updateOwnerState(res.data.owner);
    });
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <Container fluid className="profile-page">
      <Row className="justify-content-center align-items-center">
        <Col xs={11} className="profile-row mt-5">
          {ownerState && !userInfoState.validatedEmail && (
            <Row className="profile-box-row p-2">
              <div class="alert alert-danger" role="alert">
                <p className="titles m-0 h3">
                  Tu correo aún no ha sido validado
                </p>
              </div>
            </Row>
          )}
          <Row className="profile-box-row p-2">
            <p className="text-white h4 titles m-0">
              Miembro desde : {userInfoState.since}
            </p>
          </Row>
          <Row className="profile-box-row px-md-5 px-3 py-3">
            <Col
              xs={11}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              <Avatar className={classes.large}>H</Avatar>
            </Col>
            <Col xs={11} md={4}>
              <p className="text-white h2 titles">{userInfoState.name}</p>
              <p className="text-white h3 titles">{userInfoState.username}</p>
              <p className="text-white h4 text">
                Correo : {userInfoState.email}
              </p>
              <p className="text-white h4 text">
                Celular :{" "}
                {userInfoState.phone
                  ? userInfoState.phone
                  : "Aún no tienes un número registrado"}
              </p>
            </Col>
            <Col xs={11} md={4}>
              <p className="text-white h5 my-2 text">
                Artículos totales : {userInfoState.stuffs.length}
              </p>
              <p className="text-white h5 my-2 text">
                Transacciones totales : 10
              </p>
            </Col>
          </Row>
          {ownerState ? (
            <Row className="profile-box-row p-3">
              <Col
                xs={11}
                md={3}
                className="d-flex justify-content-center align-items-center"
              >
                <Link to="/edit-profile">
                  <Button variant="dark" size="lg">
                    Editar perfil
                  </Button>
                </Link>
              </Col>
            </Row>
          ) : (
            <Row className="profile-box-row p-3">
              <Col
                xs={11}
                md={3}
                className="d-flex justify-content-center align-items-center"
              >
                <Link to="/contact">
                  <Button variant="dark" size="lg">
                    Contactar
                  </Button>
                </Link>
              </Col>
            </Row>
          )}
        </Col>
        <Col xs={11} className="profile-row my-3">
          <Row className="profile-box-row p-3">
            <Col xs={11}>
              <p className="text-white h2 titles my-3">Lista de Artículos</p>
            </Col>
            <Col xs={11} className="profile-list py-3">
              <Image
                src="https://static.emulatorgames.net/images/gameboy-advance/pokemon-fire-red-version-v1-1.jpg"
                width="100px"
                height="100px"
                rounded
              />
              <p className="text-white h2 titles">Pokémon Edición Rojo Fuego</p>
              <p className="text-white h4 titles">
                Estatus :{" "}
                <span className="bg-success rounded p-3">Disponible</span>
              </p>
              {ownerState && (
                <Link to="/add-new">
                  <Button variant="danger" size="lg">
                    Quitar
                  </Button>
                </Link>
              )}
            </Col>
            <Col xs={11} className="profile-list py-3">
              <Image
                src="https://static.emulatorgames.net/images/gameboy-advance/pokemon-fire-red-version-v1-1.jpg"
                width="100px"
                height="100px"
                rounded
              />
              <p className="text-white h2 titles">Pokémon Edición Rojo Fuego</p>
              <p className="text-white h4 titles">
                Estatus :{" "}
                <span className="bg-danger rounded p-3">Préstamo</span>
              </p>
              {ownerState && (
                <Link to="/add-new">
                  <Button variant="danger" size="lg">
                    Quitar
                  </Button>
                </Link>
              )}
            </Col>
            {ownerState && (
              <Col
                xs={11}
                className="d-flex justify-content-around align-items-center py-3"
              >
                <Link to="/add-new">
                  <Button variant="dark" size="lg">
                    Agrega un nuevo artículo
                  </Button>
                </Link>
              </Col>
            )}
          </Row>
        </Col>
        <Col xs={11} className="profile-row my-3">
          <Row className="profile-box-row p-3">
            <Col xs={11}>
              <p className="text-white h2 titles my-3">
                Lista de Transacciones
              </p>
            </Col>
            <Col xs={11} className="profile-list py-3">
              <Image
                src="https://static.emulatorgames.net/images/gameboy-advance/pokemon-fire-red-version-v1-1.jpg"
                width="100px"
                height="100px"
                rounded
              />
              <p className="text-white h2 titles">Pokémon Edición Rojo Fuego</p>
              <p className="text-white h4 titles">
                Estatus :{" "}
                <span className="bg-success rounded p-3">Devuelto</span>
              </p>
              {ownerState && (
                <Link to="/add-new">
                  <Button variant="success" size="lg">
                    Solicitar
                  </Button>
                </Link>
              )}
            </Col>
            <Col xs={11} className="profile-list py-3">
              <Image
                src="https://static.emulatorgames.net/images/gameboy-advance/pokemon-fire-red-version-v1-1.jpg"
                width="100px"
                height="100px"
                rounded
              />
              <p className="text-white h2 titles">Pokémon Edición Rojo Fuego</p>
              <p className="text-white h4 titles">
                Estatus :{" "}
                <span className="bg-danger rounded p-3">Préstamo</span>
              </p>
              {ownerState && (
                <Link to="/add-new">
                  <Button variant="success" size="lg">
                    Devolver
                  </Button>
                </Link>
              )}
            </Col>
            <Col
              xs={11}
              className="d-flex justify-content-around align-items-center py-3"
            >
              <Link to="/">
                <Button variant="dark" size="lg">
                  Buscar un nuevo artículo
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="profile-row my-3">
          <Row className="justify-content-around align-items-center p-3">
            <Col xs={11}>
              <p className="text-white h2 titles my-3">Recomendaciones</p>
            </Col>
            <Col xs={11}>
              <Row className="justify-content-around align-items-center flex-wrap">
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
                <Col xs={5} md={3} className="py-3">
                  <div className="profile-recommendation ">
                    <Avatar className={classes.medium}>H</Avatar>
                    <p className="text-white h2 titles">Arturo Mora</p>
                    <p className="text-white h4 text">Excelente artículo</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={11} className="my-3">
          <Row className="p-3 justify-content-center align-items-center">
            <Link to="/contact">
              <Button variant="dark" size="lg">
                Contactar
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
