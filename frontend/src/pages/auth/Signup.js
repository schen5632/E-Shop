import React, { useRef, useContext, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContextProvider";
import { Link, useNavigate } from "react-router-dom";
import ShopNavbar from "../../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { setSignedIn } from "./signedInSlice";
import auth from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //const { signup, currentUser, setSignedIn } = useContext(ShopContext);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("signup successful");
        dispatch(setSignedIn(true));
      })
      .catch((e) => console.log(e));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      //setSignedIn(true);

      navigate("/");
    } catch (e) {
      console.log("signup error", e);
      //setError("Failed to create an account");
      setError(e.message.substring(10));
    }
    setLoading(false);
  }

  return (
    <>
      <ShopNavbar page="auth" />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm" className="mb-3">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  ></Form.Control>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
