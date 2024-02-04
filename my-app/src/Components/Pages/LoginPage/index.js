import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {LoginForm} from "../LoginPage/LoginForm";
import { Sideimage } from "../SignupPage/Sideimage";
import { Navbar } from "../../Navbar";


export function LoginPage() {
  return (
   
    <Container>
      <section>
        <br/>
        <Navbar/>
      </section>
      <Row className="mx-auto p-3">
        <Col>
          <Sideimage/>
        </Col>
        <Col>
          <LoginForm/>
        </Col>
      </Row>
    </Container>

  );
}