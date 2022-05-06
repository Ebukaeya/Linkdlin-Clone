import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { BsFillBookmarksFill } from "react-icons/bs";

const SideCardLeft = ({ data }) => {
  const [userData, setUserData] = useState({});

  const params = useParams();

  /* useEffect(() => {
    fetchData();
  }, []); */

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
    <div className="leftsidecontainerwrapper">
      <div></div>
      <div>
        <div className="sidebarImageDIv">
          <img src={data.image} />
        </div>
      </div>
      <div className="sidebartitleText">
        <div>
          <p>
            {data.name} {data.surname}
          </p>
        </div>
        <p>{data.title}</p>
      </div>
      <hr></hr>

      <div className="sideBarWhoviewedMe">
        <div>
          <p>Who viewed your profile</p>
          <p>15</p>
        </div>
        <div>
          <p>Views of your post</p>
          <p>155</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default SideCardLeft;
