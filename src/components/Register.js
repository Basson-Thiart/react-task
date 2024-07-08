import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../redux/actions";

// Register component handles user registration form submission and navigation.
const Register = ({ setUsername }) => {
  // Local state to manage form input fields
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Navigation hook for programmatic navigation
  const navigate = useNavigate();

  // Handles input change for form fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation: Checks if all fields are filled out
    if (
      form.firstName &&
      form.surname &&
      form.username &&
      form.email &&
      form.password
    ) {
      // Dispatches updateUser action to update Redux store with user details
      dispatch(
        updateUser({
          firstName: form.firstName,
          surname: form.surname,
          username: form.username,
          email: form.email,
        })
      );

      // Sets the username in the parent component state
      setUsername(form.username);

      // Navigates to the store page after successful registration
      navigate("/store");
    } else {
      // Alerts the user if any field is missing
      alert("Please fill out all fields.");
    }
  };

  return (
    // Form component with onSubmit event handler set to handleSubmit function
    <Form onSubmit={handleSubmit}>
      {/* Form Group for the First Name input field */}
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        {/* First Name input field */}
        <Form.Control
          type="text"
          name="firstName"
          value={form.firstName} // Binds input value to firstName state
          onChange={handleChange} // Updates firstName state on input change
          required // Ensures the field is required before form submission
        />
      </Form.Group>

      {/* Form Group for the Surname input field */}
      <Form.Group controlId="surname">
        <Form.Label>Surname</Form.Label>
        {/* Surname input field */}
        <Form.Control
          type="text"
          name="surname"
          value={form.surname} // Binds input value to surname state
          onChange={handleChange} // Updates surname state on input change
          required // Ensures the field is required before form submission
        />
      </Form.Group>

      {/* Form Group for the Username input field */}
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        {/* Username input field */}
        <Form.Control
          type="text"
          name="username"
          value={form.username} // Binds input value to username state
          onChange={handleChange} // Updates username state on input change
          required // Ensures the field is required before form submission
        />
      </Form.Group>

      {/* Form Group for the Email input field */}
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        {/* Email input field */}
        <Form.Control
          type="email"
          name="email"
          value={form.email} // Binds input value to email state
          onChange={handleChange} // Updates email state on input change
          required // Ensures the field is required before form submission
        />
      </Form.Group>

      {/* Form Group for the Password input field */}
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        {/* Password input field */}
        <Form.Control
          type="password"
          name="password"
          value={form.password} // Binds input value to password state
          onChange={handleChange} // Updates password state on input change
          required // Ensures the field is required before form submission
        />
      </Form.Group>

      {/* Submit button for the registration form */}
      <Button variant="outline-primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;
