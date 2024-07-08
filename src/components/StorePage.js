import React from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// Sample products array with dummy data
const products = [
  { id: 1, name: "Jeans", price: 100 },
  { id: 2, name: "Branded Jeans", price: 200 },
  { id: 3, name: "Designer Jeans", price: 300 },
];

// StorePage component responsible for displaying products and allowing users to add them to cart
const StorePage = () => {
  const dispatch = useDispatch(); // Redux dispatch hook to dispatch actions

  // Function to add a product to the cart
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product }); // Dispatches action to add product to Redux store
  };

  return (
    <div>
      <h1>Store</h1>
      {/* Responsive grid layout for products, adjusting columns based on screen size */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {/* Mapping through products array to render each product */}
        {products.map((product) => (
          <Col key={product.id}>
            {/* Individual product card */}
            <div className="p-3 border bg-light">
              <h4>{product.name}</h4>
              <p>Price: R{product.price}</p>
              {/* Button to add product to cart */}
              <Button
                variant="outline-success" // Button style with green outline
                size="sm" // Small button size
                className="mt-2" // Margin top for spacing
                onClick={() => addToCart(product)} // Calls addToCart function on button click
              >
                Add to Cart
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StorePage;
