import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// LandingPage component renders the landing page content with registration and login buttons.
const LandingPage = () => {
  return (
    // Container for the entire landing page content, adds top margin for spacing.
    <Container className="mt-5">
      {/* Row for aligning content vertically in the center */}
      <Row className="align-items-center">
        {/* Column to hold the main content */}
        <Col>
          {/* Main heading */}
          <h1>Welcome to My Store</h1>
          {/* Description text */}
          <p>
            Discover amazing products at great prices. Register now to start
            shopping!
          </p>
          {/* Button section for registration and login */}
          <p>
            {/* Primary button to navigate to the registration page */}
            <Button variant="outline-primary" as={Link} to="/register">
              Register
            </Button>{" "}
            {/* Secondary button to navigate to the login page */}
            <Button variant="outline-success" as={Link} to="/login">
              Login
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
