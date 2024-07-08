import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

// CartPage component renders the user's cart items and provides shipment options.
const CartPage = () => {
  // Fetches the 'cart' state from Redux store using useSelector hook.
  const cart = useSelector((state) => state.cart);

  // Local state to manage the selected shipment method and modal visibility.
  const [shipment, setShipment] = useState("");
  const [showHelpModal, setShowHelpModal] = useState(false);

  // Handles changes in the selected shipment method.
  const handleShipmentChange = (e) => {
    setShipment(e.target.value);
  };

  // Function to toggle the visibility of the help modal.
  const toggleHelpModal = () => {
    setShowHelpModal(!showHelpModal);
  };

  return (
    <Container>
      <h1 className="mt-5">Cart</h1>
      {/* Row to display the list of items in the cart */}
      <Row className="mb-3">
        <Col>
          {/* Renders a list of items in the cart */}
          <ul className="list-group">
            {cart.items.map((item, index) => (
              <li key={index} className="list-group-item">
                {item.name} - R{item.price}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      {/* Row to display the total cost of items in the cart */}
      <Row className="mb-3">
        <Col>
          <h2>Total Cost: R{cart.totalCost}</h2>
        </Col>
      </Row>
      {/* Row to provide shipment method selection and help modal */}
      <Row className="mb-3">
        {/* Column for the shipment method dropdown */}
        <Col xs={12} sm={6}>
          <Form.Group>
            <Form.Label>Shipment Method:</Form.Label>
            <Form.Control
              as="select"
              value={shipment}
              onChange={handleShipmentChange}
            >
              <option value="">Select a shipment method</option>
              <option value="standard">Standard - R10</option>
              <option value="express">Express - R20</option>
            </Form.Control>
          </Form.Group>
        </Col>
        {/* Column for the help button and modal */}
        <Col xs={12} sm={6}>
          {/* Button to open help modal */}
          <Button
            variant="outline-info"
            onClick={toggleHelpModal}
            className="mt-4 mt-sm-0"
          >
            Help
          </Button>

          {/* Help Modal */}
          <Modal show={showHelpModal} onHide={toggleHelpModal}>
            <Modal.Header closeButton>
              <Modal.Title>Shipment Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Standard - R10</p>
              <p>Express - R20</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={toggleHelpModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
