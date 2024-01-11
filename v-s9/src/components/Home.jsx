import React, { Component } from "react";
import { Row, Col, Button, Dropdown, Container } from "react-bootstrap";
import Gallery from "./Gallery";

export default class Home extends Component {
  render() {
    return (
      <div className="text-light row-5  overflow-x-hidden">
        <Col className="m-0 p-0">
          <Row>
            <div className="col-lg-1 text-center">
              <h2 className="ms-1">Movies</h2>
            </div>
            <div className="col-lg-1">
              <Dropdown className="ms-2 my">
                <Dropdown.Toggle
                  variant="dark"
                  className="border rounded-0 ms-2"
                  id="dropdown-basic"
                >
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Movies</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">TV shows</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Documentaries</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Row>
          <div className="row-12 justify-content-center">
            <Gallery />
          </div>
        </Col>
      </div>
    );
  }
}
