import "../styles/mainPage.css";
import "../styles/editForm.css";
import MyFooter from "./MyFooter";
import EditForm from "./EditForm";
import Profile from "./Profile";
import MySidebarEdit from "./MySideBarEdit";
import MySideBarList from "./MySideBarList";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExperienceList from "./ExperienceList";

const MainPage = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [me, setMe] = useState(true);
  const [data, setData] = useState();

  const params = useParams();
  const navigate = useNavigate();

  const userId = params.id;
  const isMyProfile = params.me;

  /* check if am in my profile */
  /* userId && setMe(false) */

  useEffect(() => {
    if (isMyProfile === "me") {
      setMe(true);
    } else {
      setMe(false);
      /*  setData(props.data); */
    }
    console.log(userId);
    userId ? fetchUser() : navigate("/");
  }, []);

  const fetchUser = async () => {
    if (userId) {
      let response = await fetch(
        "https://linkedin-clone-api-feb22.herokuapp.com/profile/" + userId,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        /* console.log(data); */

        setData(data);
        props.functionData(data);
      } else {
        alert("not successful");
      }
    }
  };

  const updateImage = (img) => {
    setData({ ...data, image: img });
    props.imgaeUpdat(img);
  };

  const handleDisplayForm = (display) => {
    setDisplayForm(display);
  };

  const updatData = (updateddata) => {
    console.log(updateddata);
    setData({
      ...data,
      name: updateddata.name,
      surname: updateddata.surname,
      email: updateddata.email,
      title: updateddata.title,
      bio: updateddata.bio,
      area: updateddata.area,
    });
  };

  /*  useEffect(() => {
    if (userId) {
      setMe(false);
    } else {
      setMe(true);
      setData(props.data);
    }
  }, [userId]); */

  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left">
            {/* all components on the left */}

            <Profile
              controlDisplay={handleDisplayForm}
              data={data ? data : props.data}
              imageUpload={updateImage}
              profile={me}
            />
            <ExperienceList />
          </div>
          <div className="right">
            {/* all components on the left */}
            <MySidebarEdit />
            <MySideBarList />
          </div>
        </div>
        <MyFooter />

        {displayForm && (
          <EditForm
            controlDisplay={handleDisplayForm}
            data={data ? data : props.data}
            dataUpdat={updatData}
          />
        )}
      </div>
    </>
  );
};

export default MainPage;
