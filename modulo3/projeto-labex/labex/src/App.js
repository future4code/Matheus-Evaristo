import React from "react";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import { Container } from "./style/style";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <HomePage />
      <ListTripsPage />
    </div>
  );
}
