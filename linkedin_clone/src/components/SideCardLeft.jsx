import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BsFillBookmarksFill } from "react-icons/bs";

const SideCardLeft = () => {
  const [userData, setUserData] = useState({});

  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let user = params.userId ? params.userId : "me";

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + user,
        {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzMzBhNWRhMTNhZjAwMTUyYzFjNjciLCJpYXQiOjE2NDg1NzA1MzQsImV4cCI6MTY0OTc4MDEzNH0.I9nECqsO8I-yDSTS2Mqpftc9JQc4P94P-LYnYKzT64g",
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log("Profile", data);
        setUserData(data);
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="Gbemi-container mt-4 py-0">
      <Row>
        <Col>
          <center className="Gbemi-division mt-2">
            <img
              className="Gbemi-image2"
              src={
                userData.image
                  ? userData.image
                  : require("../assets/strive-logo.jpeg")
              }
              alt="profile pics"
            />
          </center>

          <Link to={"/me"}>
            <center className="text-dark Gbemi-h6">
              {userData.name} {""} {userData.surname}
            </center>
          </Link>
          <center className="text-muted mb-3 Gbemi-font">
            {userData.title}
          </center>
          <hr />
          <p className="d-flex mb-0">
            <span className="d-inline-block gbemi-span">Connection</span>
            <span className="d-inline-block gbemi-span ml-auto">1</span>
          </p>
          <h6 className="Gbemi-h6-2">Grow your network</h6>
          <hr />
          <p className="text-muted mb-0 Gbemi-font">
            Access exclusive tools & insights
          </p>
          <p className="Gbemi-h6-2 my-0 mb-2 ">Try Premium for free</p>

          <div
            className="text-dark border-top py-2"
            style={{ cursor: "pointer", fontSize: "0.9rem", fontWeight: "600" }}
          >
            <BsFillBookmarksFill /> Manage posts
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SideCardLeft;
