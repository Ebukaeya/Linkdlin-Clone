import MySideBarCard from "./MySideBarCard";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MySideBarList = () => {
  const [profile, setProfile] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchedData(), []);

  const fetchedData = async () => {
    let randomArray = [];

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNzAyYTgyZWExZDAwMTViYjA0N2MiLCJpYXQiOjE2NDgwNDcxMzUsImV4cCI6MTY0OTI1NjczNX0.gVAP65Ei526G-45DP5DwQDKNhTy-dcfU8w4n6CC3kn4",
          },
        }
      );
      if (response.ok) {
        
        let data = await response.json();
        

        for (let i = 0; i < 5; i++) {
          let x = Math.floor(Math.random() * 100);
          randomArray.push(data[x]);
        }

        setProfile(randomArray);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Gbemi-container ">
      <h5 className="my-4 py-3">People you may know</h5>
      {profile.map((data) => (
        <MySideBarCard profiles={data} key={data._id} />
      ))}
      <center className="py-2 border-top">
        Show more <MdOutlineKeyboardArrowDown />
      </center>
    </div>
  );
};

export default MySideBarList;
