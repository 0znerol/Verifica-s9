import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";

function CollapseBtn() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        // style={{ width: "50px", height: "30px" }}
        className="mx-2 text-light"
      >
        <i className="bi bi-search"></i>
      </a>
      <div style={{ minHeight: "10px" }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Form style={{ width: "144px", height: "10px" }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="search" />
              </Form.Group>
            </Form>
          </div>
        </Collapse>
      </div>
    </>
  );
}
export default CollapseBtn;
