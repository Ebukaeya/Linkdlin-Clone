import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Login-Page";
import MainPage from "./components/Main-page";

import MyNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        {/*  <MyFooter/> */}
      </>
    </BrowserRouter>
  );
}

export default App;
