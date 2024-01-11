import React from "react";
import { Navbar, Nav, Form, Row, Col, Button } from "react-bootstrap";
import CollapseBtn from "./CollapseBtn";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <Navbar fluid="true" bg="body-dark" expand="lg" data-bs-theme="dark">
      <Navbar.Brand href="#home" className="text-light">
        <img src={logo} style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        bg="dark"
        className="justify-content-between"
      >
        <Nav className="mr-auto fs-6 me-5">
          <Nav.Link href="#home" className="text-light">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="text-light">
            Tv Shows
          </Nav.Link>
          <Nav.Link href="#movies" className="text-light">
            Movies
          </Nav.Link>
          <Nav.Link href="#recent" className="text-light">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#list" className="text-light">
            My List
          </Nav.Link>
        </Nav>
        <Col className="col-2 text-light">
          <Row className="justify-content-end">
            <div className="d-flex w-75 p-2 ">
              <CollapseBtn />
              <a href="#" className="text-decoration-none text-light mx-3">
                kids
              </a>
              <i className="bi bi-bell-fill mx-3"></i>
              <i className="bi bi-person-fill mx-3"></i>
            </div>
          </Row>
        </Col>
        {/* <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
