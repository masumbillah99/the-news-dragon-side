import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { Button, Container, Form } from "react-bootstrap";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle";

const Register = () => {
  const { user, registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [accepted, setAccepted] = useState(false);
  useTitle("Register");

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

    registerUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        // console.log(createdUser);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
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
          <div className="d-flex">
            <Form.Control
              className="bg-secondary bg-opacity-10 p-3 border-0 rounded-start rounded-0"
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
            />
            <p
              className="bg-secondary bg-opacity-10 p-3 my-auto rounded-end"
              onClick={() => setShow(!show)}
            >
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
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept{" "}
                <Link to="/terms" className="text-danger">
                  terms and conditions
                </Link>
              </>
            }
          />
        </Form.Group>
        <Button
          variant="secondary"
          className="w-100 py-2 fw-semibold mb-2"
          type="submit"
          disabled={!accepted}
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
