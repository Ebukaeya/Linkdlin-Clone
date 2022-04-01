import { useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

const UserNavigation = () => {
  const params = useParams();

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    let id = params.userId ? params.userId : "me";

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + id,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDgxMjUwMzQsImV4cCI6MTY0OTMzNDYzNH0.axu7fq2pPqWBioFFvj3fTolu_NO9muFI7Z8pI9nlHgU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setUser(data);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>here we go</h1>;
      <Profile user={user} />
    </>
  );
};

export default UserNavigation;
