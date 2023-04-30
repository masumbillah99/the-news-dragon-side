import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button, Container, Form } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { user, RegisterUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,}$/.test(password)) {
      setError("password not valid");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters longer");
    } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("email is not valid");
    }
    if ((name, photo, email, password)) {
      RegisterUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  return (
    <Container className="w-50 mx-auto py-5 bg-white rounded-2">
      <h3 className="text-center">Register your account</h3>
      <hr />
      <Form onSubmit={handleRegistration} className="mt-3 px-5 px-xl-5">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="fw-semibold">Your Name</Form.Label>
          <Form.Control
            className="p-3 bg-secondary bg-opacity-10 border-0"
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label className="fw-semibold">Photo URL</Form.Label>
          <Form.Control
            className="p-3 bg-secondary bg-opacity-10 border-0"
            type="text"
            name="photo"
            placeholder="Enter your photo"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-semibold">Email</Form.Label>
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
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <Button
          variant="secondary"
          className="w-100 py-2 fw-semibold mb-2"
          type="submit"
        >
          Register
        </Button>
        <br />
        <Form.Text className="fw-semibold">
          Already have an account?{" "}
          <Link className="text-decoration-none text-danger" to="/login">
            Login
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

export default Register;
