import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Container className="w-50 mx-auto py-5 bg-white rounded-2">
      <h3 className="text-center">Login your account</h3>
      <hr />
      <Form onSubmit={handleLogin} className="mt-3 px-5 px-xl-5">
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
          <div className="d-flex bg-secondary bg-opacity-10 pe-3 py-2 rounded">
            <Form.Control
              className="border-0"
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />
            <p onClick={() => setShow(!show)}>
              <small>
                {show ? (
                  <span>
                    <FaRegEye className="" />
                  </span>
                ) : (
                  <span>
                    <FaRegEyeSlash className="" />
                  </span>
                )}
              </small>
            </p>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember password" />
        </Form.Group>
        <Button
          variant="secondary"
          className="w-100 py-3 fw-semibold mb-2"
          type="submit"
        >
          Login
        </Button>
        <br />
        <Form.Text className="fw-semibold">
          Don't have an account?{" "}
          <Link className="text-decoration-none text-danger" to="/register">
            Register
          </Link>
        </Form.Text>
      </Form>
      {error && (
        <p className="bg-info text-white text-center mt-3 w-75 mx-auto p-3 rounded">
          {error}
        </p>
      )}
    </Container>
  );
};

export default Login;
