import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function GetApi() {
  const [data, setData] = useState([]);

  const api = "https://jsonplaceholder.typicode.com/todos";
  const renderData = () => {
    fetch(api)
      .then((response) => response.json())
      .then((callData) => {
        console.log(callData);
        setData(callData);
      });
  };

  useEffect(() => {
    renderData();
  }, []);

  return (
    <Container>
      {/* <ul>
        {data.map((i)=>(
          <li key={i.id}>{i.title}</li>
        ))}
      </ul> */}
      {/* <table>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
          </tr>
        ))}
      </table> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.userId}</td>
              <td>{item.title}</td>
              <td>{item.completed.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
