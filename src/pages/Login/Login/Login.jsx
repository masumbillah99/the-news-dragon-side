import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-50 mx-auto py-5 bg-white rounded-2">
      <h3 className="text-center">Login your account</h3>
      <hr />
      <Form className="mt-3 px-5 px-xl-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-semibold">Email Address</Form.Label>
          <Form.Control
            className="p-3 bg-secondary bg-opacity-10 border-0"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control
            className="p-3 bg-secondary bg-opacity-10 border-0"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember password" />
        </Form.Group>
        <Button
          variant="secondary"
          className="w-100 py-3 fw-semibold"
          type="submit"
        >
          Login
        </Button>
        <br />
        <Form.Text className="fw-semibold">
          Don't have an account?{" "}
          <Link className="text-decoration-none text-danger" to="/register">
            Login
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
