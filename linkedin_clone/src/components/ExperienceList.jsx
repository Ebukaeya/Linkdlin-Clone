import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import SingleExperienceCard from "./SingleExperienceCard";
import { BsPlus, BsPencil } from "react-icons/bs";

const ExperienceList = ({ userId }) => {
  const userId1 = userId ? userId : "me";

  console.log(userId1);

  const params = useParams();

  

  const [lgShow, setLgShow] = useState(false);
  const [editMode, setEditMode] = useState(false);

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
    //updateExperience();
  }, [experienceId]);

  useEffect(() => {
    fetchedExperience();
  }, [userId1]);

  const fetchedExperience = async () => {
    try {
      let response = await fetch(
        "https://linkedin-clone-api-feb22.herokuapp.com/profile/" +
          userId1 +
          "/experiences"
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setExperience(
          data.sort(function (a, b) {
            return new Date(b.startDate) - new Date(a.startDate);
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postExperience = async (e) => {
    e.preventDefault();
    console.log(newExperience);

    try {
      let response = await fetch(
        "https://linkedin-clone-api-feb22.herokuapp.com/profile/" +
          userId1 +
          "/experiences",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newExperience),
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        fetchedExperience();
        setLgShow(false);
        setNewExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: null,
          description: "",
          area: "",
        });
      } else {
        alert("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("experience", experience);

  return (
    <>
      <div className="p-3 bg-white mt-3 experienceSectionOuter">
        <div>
          <h4 className="mr-auto">Experience</h4>
          {userId1 ? (
            " "
          ) : (
            <>
              {!editMode && (
                <div
                  className="martin-profile-icon-large mr-4"
                  //onClick={() => setLgShow(true)}
                >
                  <BsPlus />
                </div>
              )}
              <div
                className="martin-profile-icon-large mr-4"
                onClick={() => setEditMode(!editMode)}
              >
                <BsPencil />
              </div>
            </>
          )}
        </div>

        <div className="mb-4">
          {experience.length !== 0 ? (
            experience.map((user) => <SingleExperienceCard data={user} />)
          ) : (
            <div className="noExperienceGy">
              <p>No work Experience yet</p>
            </div>
          )}
        </div>
        <Form onSubmit={(e) => postExperience(e)}>
          <Form.Group className="mb-3" controlId="roleValue">
            <Form.Label>Job title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. Content Promoter"
              value={newExperience.role}
              onChange={(e) =>
                setNewExperience({ ...newExperience, role: e.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="companyValue">
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Company name"
              value={newExperience.company}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  company: e.target.value,
                })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="descriptionValue">
            <Form.Label>Job description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. completely extend corporate architectures "
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="areaValue">
            <Form.Label>Area</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex. London"
              value={newExperience.area}
              onChange={(e) =>
                setNewExperience({ ...newExperience, area: e.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-inline-block martin-width-45"
            controlId="startDateValue"
          >
            <Form.Label>Start date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={newExperience.startDate}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  startDate: e.target.value,
                })
              }
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 float-right d-inline-block  martin-width-45"
            controlId="endDateValue"
          >
            <Form.Label>End date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={newExperience.endDate}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  endDate: e.target.value,
                })
              }
            />
          </Form.Group>
          {editMode && (
            <Form.Group controlId="formUploadExperiencePic" className="mb-3">
              <Form.Label>Upload file</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          )}

          {editMode ? (
            <>
              <Button
                variant="link"
                type="button"
                // onClick={() => deleteJob()}
              >
                <i className="bi bi-trash3"></i> Delete Job
              </Button>
              <Button
                variant="primary"
                type="button"
                className="martin-profile-main-btn mb-2 mb-lg-0"
                onClick={(e) => {
                  // uploadExperiencePicture(e);
                  // handleEdit();
                }}
              >
                Edit Job
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              type="submit"
              className="martin-profile-main-btn mb-2 mb-lg-0"
            >
              Save
            </Button>
          )}
        </Form>
      </div>
    </>
  );
};

export default ExperienceList;
