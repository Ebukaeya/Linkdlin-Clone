import MySideBarCard from "./MySideBarCard";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MySideBarList = () => {
  const [profile, setProfile] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fetchedData(), []);
  let randomArray = [];
  const fetchedData = async () => {
    try {
      let response = await fetch(
        "https://linkedin-clone-api-feb22.herokuapp.com/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();

        console.log(data);

        for (let i = 0; i < 5; i++) {
          let x = Math.floor(Math.random() * data.length);
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
  console.log(profile);
  return (
    <div className="Gbemi-container ">
      <h5 className="my-4 py-3">People you may know</h5>
      {profile.map((data, i) => (
        <MySideBarCard profiles={data} key={i} />
      ))}
      <center className="py-2 border-top">
        Show more <MdOutlineKeyboardArrowDown />
      </center>
    </div>
  );
};

export default MySideBarList;
