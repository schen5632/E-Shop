import React, { useRef, useContext, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContextProvider";
import { Link, useNavigate } from "react-router-dom";
import ShopNavbar from "../../components/Navbar";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useContext(ShopContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your email for further instructions");
    } catch (e) {
      console.log(e);
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <>
      {" "}
      <ShopNavbar page="auth" />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Password Reset</h2>
              {message && !error && <Alert variant="info">{message}</Alert>}
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
                <Button disabled={loading} className="w-100" type="submit">
                  Reset Password
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/login">Login</Link>
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

export default ForgotPassword;
