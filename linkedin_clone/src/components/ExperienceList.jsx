import { useEffect } from "react";
import { useState } from "react";
import SingleExperienceCard from "./SingleExperienceCard";

const ExperienceList = ({ userId }) => {
  const userId1 = userId ? userId : "me";

  console.log(userId1);

  const [experience, setExperience] = useState([]);
  const [experienceId, setExperienceId] = useState([]);
  const [newExperience, setNewExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    updateExperience();
  }, [experienceId]);

  useEffect(() => {
    fetchedExperience();
  }, [userId1]);

  const fetchedExperience = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          userId1 +
          "/experiences",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzMzBhNWRhMTNhZjAwMTUyYzFjNjciLCJpYXQiOjE2NDg1NzA1MzQsImV4cCI6MTY0OTc4MDEzNH0.I9nECqsO8I-yDSTS2Mqpftc9JQc4P94P-LYnYKzT64g",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setExperience(data);
        // setExperienceId(data[0]._id);
        console.log("id", experienceId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const method = experienceId ? "PUT" : "POST";

  const url = experienceId
    ? "https://striveschool-api.herokuapp.com/api/profile/" +
      userId1 +
      "/experiences" +
      experienceId
    : "https://striveschool-api.herokuapp.com/api/profile/" +
      userId1 +
      "/experiences";

  const updateExperience = async () => {
    try {
      let response = await fetch(url, {
        Method: method,
        body: JSON.stringify(newExperience),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzMzBhNWRhMTNhZjAwMTUyYzFjNjciLCJpYXQiOjE2NDg1NzA1MzQsImV4cCI6MTY0OTc4MDEzNH0.I9nECqsO8I-yDSTS2Mqpftc9JQc4P94P-LYnYKzT64g",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setExperience(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-3 bg-white mt-3 experienceSectionOuter">
        <h4 className="mr-auto">Experience</h4>
        <div className="mb-4">
          {experience.map((user) => (
            <SingleExperienceCard data={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceList;
