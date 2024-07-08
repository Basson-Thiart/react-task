import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import Register from "./components/Register";
import Login from "./components/Login";

// Main App component
const App = () => {
  // State to manage the username, initialized with an empty string
  const [username, setUsername] = useState("");

  return (
    // Provides the Redux store to the entire application
    <Provider store={store}>
      {/* Router component for managing navigation */}
      <Router>
        {/* Header component with dynamic username passed as prop */}
        <Header username={username} />

        {/* Routes component for defining application routes */}
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Route for the store page */}
          <Route path="/store" element={<StorePage />} />

          {/* Route for the cart page */}
          <Route path="/cart" element={<CartPage />} />

          {/* Route for the register page, passing setUsername function as prop */}
          <Route
            path="/register"
            element={<Register setUsername={setUsername} />}
          />

          {/* Route for the login page, passing setUsername function as prop */}
          <Route path="/login" element={<Login setUsername={setUsername} />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
