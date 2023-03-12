import React, { useRef, useContext, useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { ShopContext } from "../../context/ShopContextProvider";
import { Link, useNavigate } from "react-router-dom";
import ShopNavbar from "../../components/Navbar";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser, emailUpdate, passwordUpdate } =
    useContext(ShopContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);

      if (emailRef.current.value != currentUser.email) {
        await emailUpdate(emailRef.current.value);
      }

      if (passwordRef.current.value) {
        await passwordUpdate(passwordRef.current.value);
      }
      setMessage("Profile updated successfully!");
    } catch {
      setError("Failed to Update Profile");
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
              <h2 className="text-center mb-4">Update Profile</h2>
              {message && !error && <Alert variant="success">{message}</Alert>}
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  ></Form.Control>
                </Form.Group>
                <Form.Group id="password-confirm" className="mb-3">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same"
                  ></Form.Control>
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/">Return to shopping</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UpdateProfile;
