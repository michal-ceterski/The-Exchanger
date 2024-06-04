import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to The Exchanger</h1>
      <Link to="/exchange">Go to Exchange Page</Link>
    </div>
  );
};

export default HomePage;
