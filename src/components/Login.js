import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { updateUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

// Login component handles user login form submission.
const Login = ({ setUsername }) => {
  // Local state to manage the username input field
  const [username, setUsernameLocal] = useState("");

  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Using navigate
  const navigate = useNavigate();
  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Calls the setUsername function passed as prop to update parent component state
    setUsername(username);

    // Simulates fetching user details and updating Redux store
    const user = { username }; // Replace with actual user fetching logic
    dispatch(updateUser(user)); // Dispatches updateUser action with user object
    // Navigate to the store page after login
    navigate("/store");
  };

  return (
    // Form component with onSubmit event handler set to handleSubmit function
    <Form onSubmit={handleSubmit}>
      {/* Form Group for the username input field */}
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        {/* Username input field */}
        <Form.Control
          type="text"
          value={username} // Binds input value to username state
          onChange={(e) => setUsernameLocal(e.target.value)} // Updates username state on input change
          required // Ensures the field is required before form submission
        />
      </Form.Group>
      {/* Submit button for the login form */}
      <Button variant="outline-primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
