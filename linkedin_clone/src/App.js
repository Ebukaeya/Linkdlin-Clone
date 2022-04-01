import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Login-Page";
import MainPage from "./components/Main-page";
import MyNavbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";

function App() {
  const [data, setData] = useState({});

  const updateData = (data) => {
    setData(data);
  };

  const updatImage = (img)=>{
        setData({...data,image:img})
  }


  return (
    <BrowserRouter>
      <>
        <MyNavbar data={data} />
        <Routes>
          <Route path="/profile" element={<MainPage data={data} imgaeUpdat={updatImage} />} />
          <Route path="/profile/:id" element={<MainPage data={data} />} />
          {/* <Route path="/profile/" element={<MainPage data={data} />} /> */}
          <Route path="/" element={<LoginPage functionData={updateData} />} />
          <Route   path="/newsfeed"      element={<NewsFeed data={data}/>} />
          <Route   path="*"      element={<div>404</div>} />
        </Routes>

        {/*  <MyFooter/> */}
      </>
    </BrowserRouter>
  );
}

export default App;
