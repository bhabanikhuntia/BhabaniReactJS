import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function UpdateApi() {

  const [did, updateDid] = useState();
  const [dat, updateDat] = useState("");
  const [db, updateDb] = useState("");

  const updateData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: dat,
        body: db,
        userId: did,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div>
        <Container>
          <Form.Label>Select UserId</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={did}
            onChange={(e) => {
              updateDid(e.target.value);
            }}
          >
            <option>Select one Id</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter title"
              value={dat}
              onChange={(e) => {
                updateDat(e.target.value);
                // console.log(title);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type body Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={db}
              onChange={(e) => {
                updateDb(e.target.value);
              }}
            />
          </Form.Group>
          <Button onClick={updateData}>Update</Button>
        </Container>
      </div>
    </div>
  );
}
