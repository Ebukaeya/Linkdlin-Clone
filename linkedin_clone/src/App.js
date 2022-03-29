import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Login-Page";
import MainPage from "./components/Main-page";

import MyNavbar from "./components/Navbar";

function App() {
  const [data, setData] = useState({});

  const updateData = (data) => {
    setData(data);
  };

  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/profile" element={<MainPage data={data} />} />
          <Route path="/" element={<LoginPage functionData={updateData} />} />
        </Routes>

        {/*  <MyFooter/> */}
      </>
    </BrowserRouter>
  );
}

export default App;
