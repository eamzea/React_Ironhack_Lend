import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../utils/user.context";
import LendService from "../services/lendService";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import moment from "moment";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import SelectCalendar from "./ui/SelectCalendar";

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
}));

const Contact = () => {
  const { username } = useParams();

  const classes = useStyles();

  const [userState, updateUserState] = useState({
    name: "",
    email: "",
    phone: "",
    stuffSelected: "",
    startDate: new Date(),
    finalDate: moment().add(1, "days").toDate(),
  });

  const [ownerState, updateOwnerState] = useState({
    name: "",
    stuffs: [],
  });

  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateUserState(Object.assign({}, userState, { [name]: value }));
  };

  const handleStuff = (e) => {
    const stuff = e.target.value;
    updateUserState(Object.assign({}, userState, { stuffSelected: stuff }));
  };

  const handleStartDate = (name) => {
    const date = moment(name).locale("es").format("LL");
    updateUserState(Object.assign({}, userState, { startDate: date }));
  };

  const handleEndDate = (name) => {
    const date = moment(name).locale("es").format("LL");
    updateUserState(Object.assign({}, userState, { finalDate: date }));
  };

  const getProfileInfo = () => {
    const lendService = new LendService();

    lendService.getContact(username).then((res) => {
      updateOwnerState(Object.assign({}, ownerState, res.data.profile));
    });
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  const isReady = () => {
    if (
      userState.name != "" &&
      userState.email != "" &&
      userState.phone != "" &&
      userState.stuffSelected != "" &&
      userState.startDate !== userState.finalDate
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Container fluid className="contact-page">
      <Row className="justify-content-around align-items-start">
        <Col md={8} xs={11}>
          <Row>
            <Col xs={12} className="contact-cols p-3 my-3">
              <Form.Row className="contact-form">
                <Col className="contact-col">
                  <Form.Label className="text text-white">Nombre</Form.Label>
                  <Form.Control
                    name="name"
                    size="lg"
                    type="text"
                    placeholder={user ? user.name : "Juan Pérez"}
                    className="text"
                    defautValue={user ? user.name : ""}
                    onChange={handleChange}
                  />
                </Col>
                <Col className="contact-col">
                  <Form.Label className="text text-white">Correo</Form.Label>
                  <Form.Control
                    name="email"
                    size="lg"
                    type="email"
                    placeholder={user ? user.email : "juan.perez@hotmail.com"}
                    className="text"
                    defautValue={user ? user.email : ""}
                    onChange={handleChange}
                  />
                </Col>
                <Col className="contact-col">
                  <Form.Label className="text text-white">Teléfono</Form.Label>
                  <Form.Control
                    name="phone"
                    size="lg"
                    type="phone"
                    placeholder={user ? user.phone : "5544332211"}
                    className="text"
                    defaultValue={user ? user.phone : ""}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="contact-cols p-3 my-3">
              <Form.Row className="contact-form">
                <Col className="contact-col">
                  <FormGroup row>
                    {ownerState.stuffs.map((e) => {
                      return (
                        <FormControlLabel
                          control={
                            <Checkbox onChange={handleChange} name="checkedA" />
                          }
                          label={e.name}
                        />
                      );
                    })}
                  </FormGroup>
                </Col>
              </Form.Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="contact-cols p-3 my-3">
              <p className="titles text-white h4">
                ¿En qué fechas te gustaría solicitar el préstamo?
              </p>
              <Form.Row className="contact-form">
                <Col className="contact-col">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <SelectCalendar
                        name="startDate"
                        label="Fecha inicial"
                        value={userState.startDate}
                        onChange={handleStartDate}
                      />
                      <SelectCalendar
                        name="finalDate"
                        label="Fecha final"
                        value={userState.finalDate}
                        onChange={handleEndDate}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </Col>
              </Form.Row>
            </Col>
          </Row>
        </Col>
        <Col md={3} xs={11} className="contact-cols my-3 p-3">
          <p className="titles text-white h4 my-3">
            Información sobre el pedido
          </p>
          <div className="d-flex justify-content-between align-items-center px-3">
            <Avatar
              className={classes.medium}
              src={ownerState ? ownerState.profilePic : ""}
            />
            <p className="titles h5 text-white">{ownerState.name}</p>
          </div>
          <p className="titles text-white h4 my-3">Artículo elegido</p>
          <div className="d-flex justify-content-between align-items-center px-3">
            <img
              src="https://static.emulatorgames.net/images/gameboy-advance/pokemon-fire-red-version-v1-1.jpg"
              className="contact-article-img rounded"
            />
            <p className="text text-white h6">artículo</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center my-3">
        <Col xs={11} className="contact-important-cols p-5">
          <p className="titles h3 text-white text-center">
            El costo de los artículos y el tiempo de préstamo dependen del
            propietario por lo tanto puede variar a la información mostrada.
            LEND no interviene en los acuerdos a los que se lleguen.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center my-3">
        <Col xs={11} className=" p-3">
          <p className="titles h3 text-dark text-center">Continuar mediante:</p>
        </Col>
      </Row>
      <Row className="justify-content-around align-items-center my-5">
        <Col xs={6} className="d-flex justify-content-around alig-items-center">
          {isReady() ? (
            <Button variant="dark" className="text p-2">
              <MailOutlineIcon className="mr-3" />
              Correo
            </Button>
          ) : (
            <Button variant="dark" className="text p-2" disabled>
              <MailOutlineIcon className="mr-3" />
              Correo
            </Button>
          )}
        </Col>
        <Col xs={6} className="d-flex justify-content-around alig-items-center">
          {isReady() ? (
            <Button variant="dark" className="text p-2">
              <WhatsAppIcon className="mr-3" />
              WhatsApp
            </Button>
          ) : (
            <Button variant="dark" className="text p-2" disabled>
              <WhatsAppIcon className="mr-3" />
              WhatsApp
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
