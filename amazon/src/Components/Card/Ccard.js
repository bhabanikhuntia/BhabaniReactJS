import { Card, Container } from "react-bootstrap";

export default function Ccard(props) {
  return (
    <div style={{paddingTop:"1rem", float:"left", marginLeft:"3rem"}}>
      <Container>
      <Card style={{ width: "18rem" }}>
      <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <Card.Img variant="top" src={props.img} />
      </Card>
      </Container>
    </div>
  );
}
