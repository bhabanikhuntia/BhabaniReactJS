import React, {useState} from 'react'
import { Button, Container } from 'react-bootstrap';

export default function Usestatehook() {

let current = new Date().toLocaleString();

let [show, setShow]=useState(false);
let dt=()=>setShow(true);

// let randomColor = Math.floor(Math.random() * 16777215).toString(16);
// let [color, setColor]=useState("Container style={backgroundColor:"wheat"}");
// let cl=()=>setColor(randomColor);

  return (
    <Container style={{width: "45rem", height:"15rem", backgroundColor:"wheat", paddingTop:"5rem"}}>
        {show ? current : null}
        <div>
        <Button variant="outline-primary" onClick={dt}>Click to see Today's Date</Button>{' '}
        </div>
        <div style={{paddingTop:"2rem"}}>
        <Button variant="outline-primary" onClick={cl}>Click to Change background Color</Button>{' '}
        </div>
    </Container>
  )
}
