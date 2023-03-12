import React, { useRef, useContext, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContextProvider";
import { Link, useNavigate } from "react-router-dom";
import ShopNavbar from "../../components/Navbar";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useContext(ShopContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      console.log("are we were?");
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Failed to login");
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
              <h2 className="text-center mb-4">Login</h2>
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
                <Button disabled={loading} className="w-100 mb-3" type="submit">
                  Login
                </Button>
                <Button
                  disabled={loading}
                  className="w-100"
                  onClick={() => navigate("/")}
                >
                  Continue as Guest
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
