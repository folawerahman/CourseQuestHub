import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form"


export function LoginForm () {
    return (
        <Container fluid className="w-75 p-3 mx-auto">
          <div className="text-center py-3">
            <h2 className="mx-auto">Welcome Back</h2>
            Enter your email and password to access your account
          </div>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
    
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Col>
                <Col md="auto">
                    <div >
                        <a href="">Forgot Password</a>
                    </div>
                </Col>
            </Row>
    
    
            <div className="d-grid gap-2" >
                <Button variant="dark" type="" size="lg"> Sign In </Button>
                <Button variant="outline-dark" type="" size="lg"> Sign In with Google </Button>
            </div>
            
          </Form>
    
          <div className="fst-italic text-center">
            Don't have an account? <a>Sign Up</a>
          </div>
        </Container>
      );
    }