import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./components/Main-page";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/Navbar";


function App() {
  return (
    <>
     <MyNavbar/>
      <MainPage />
     


    
    </>
  );
}

export default App;
