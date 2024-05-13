import { useState } from "react";
import "./index.css";
import Header from "./components/Header"; // Importing the Header component
import Slider from "./components/Slider";
//import MainContent from './components/MainContent'; // Importing other components as needed
//import Footer from './components/Footer'; // Importing the Footer component

function App() {
  return (
    <>
      <Header />
      <Slider />
    </>
  );
}

export default App;
