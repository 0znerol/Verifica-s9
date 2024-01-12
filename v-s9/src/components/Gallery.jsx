import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SingleImage from "./SingleImage";
import "./Gallery.css";

const Gallery = () => {
  const ref = useRef(null);
  const [starWars, setStarWars] = useState([]);
  const [shrek, setShrek] = useState([]);
  const [spiderMan, setSpiderMan] = useState([]);

  useEffect(() => {
    fetchMovies("star wars", setStarWars);
    fetchMovies("shrek", setShrek);
    fetchMovies("spider man", setSpiderMan);
  }, []);

  const fetchMovies = (searchTerm, setState) => {
    fetch(`http://www.omdbapi.com/?apikey=4fd3338f&s=${searchTerm}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setState(json.Search));
  };

  const scroll = (scrollOffset) => {
    console.log(scrollOffset - 299);
    ref.current.scrollLeft += scrollOffset;
    return scrollOffset;
  };

  const scrollSelected = (scrollOffset) => {};

  return (
    <Row>
      <Row>
        <Col className="col-1 p-4 align-self-center">
          <Button
            className="btn btn-dark"
            onClick={() => scroll(-300)}
            style={{ width: "100%", height: "10em" }}
          >
            <i className="bi bi-caret-left-fill fs-1"></i>
          </Button>
        </Col>
        <Col className="col-10">
          <Row className="row-5">
            <Row>
              <h2 className="text-light ms-2">Star Wars Series</h2>
            </Row>
            <Row
              className="flex-nowrap overflow-x-scroll m-1"
              ref={ref}
              style={{ scrollBehavior: "smooth" }}
            >
              {starWars.map((movie, i) => {
                return (
                  <SingleImage
                    movie={movie}
                    key={i}
                    chiave={i}
                    scrollPos={scroll(0)}
                  />
                );
              })}
            </Row>
          </Row>
        </Col>
        <Col className="col-1 p-4 align-self-center">
          <Button
            className="btn btn-dark"
            style={{ width: "100%", height: "10em" }}
            onClick={() => scroll(300)}
          >
            <i className="bi bi-caret-right-fill fs-1"></i>
          </Button>
        </Col>
      </Row>
      <Row>
        <h2 className="text-light ms-2">Shrek Series</h2>
      </Row>
      <Row className="flex-nowrap overflow-x-scroll m-1">
        {shrek.map((movie, i) => {
          return <SingleImage movie={movie} key={i} />;
        })}
      </Row>
      <Row>
        <h2 className="text-light ms-2">SpiderMan Series</h2>
      </Row>
      <Row className="flex-nowrap overflow-x-scroll m-1">
        {spiderMan.map((movie, i) => {
          return <SingleImage movie={movie} key={i} />;
        })}
      </Row>
    </Row>
  );
};

export default Gallery;
