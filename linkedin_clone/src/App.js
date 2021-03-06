import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySideBarList from "./components/MySideBarList";
import "./App.css";
import LoginPage from "./components/Login-Page";
import MainPage from "./components/Main-page";
import MyNavbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";

function App() {
  const [data, setData] = useState({});

  const updateData = (data) => {
    setData({ ...data, data });
  };

  const updatImage = (img) => {
    setData({ ...data, image: img });
  };

  return (
    <BrowserRouter>
      <>
        <MyNavbar data={data} />
        <Routes>
          <Route
            path="/profile/:id/:me"
            element={
              <MainPage
                data={data}
                functionData={updateData}
                imgaeUpdat={updatImage}
              />
            }
          />
          <Route
            path="/profile/:id/:username"
            element={<MainPage data={data} />}
          />
          {/* <Route path="/profile/" element={<MainPage data={data} />} /> */}
          <Route path="/" element={<LoginPage functionData={updateData} />} />
          <Route   path="/newsfeed/:id"      element={<NewsFeed data={data}/>} />
          <Route   path="*"      element={<div>404</div>} />
        </Routes>

        <Container>
          <MyFooter />
        </Container>
      </>
    </BrowserRouter>
  );
}

export default App;
