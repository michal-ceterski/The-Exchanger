import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExchangePage from "./pages/ExchangePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/exchange" element={<ExchangePage />} />
    </Routes>
  );
};

export default App;
