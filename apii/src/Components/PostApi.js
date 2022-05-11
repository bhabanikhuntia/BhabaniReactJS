import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function PostApi() {
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addData = () => {
    // console.log(title);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
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
      <Container>
        <Form.Label>Select UserId</Form.Label>
        <Form.Select aria-label="Default select example" value={userId} onChange={(e)=>{setUserId(e.target.value)}}>
          <option>Select one Id</option>
          <option >11</option>
          <option >12</option>
          <option >13</option>
          <option >14</option>
          <option >15</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              // console.log(title);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Type body Text</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </Form.Group>
        <Button onClick={addData}>Submit</Button>
      </Container>
    </div>
  );
}
