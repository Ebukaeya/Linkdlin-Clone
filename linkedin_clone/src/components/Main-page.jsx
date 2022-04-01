import "../styles/mainPage.css";
import "../styles/editForm.css";
import MyFooter from "./MyFooter";
import EditForm from "./EditForm";
import Profile from "./Profile";
import MySidebarEdit from "./MySideBarEdit";
import MySideBarList from "./MySideBarList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExperienceList from "./ExperienceList";

const MainPage = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [me, setMe] = useState(true);

  const params = useParams();

  console.log(params)

  const userId = params.id;

  /* check if am in my profile */
  /* userId && setMe(false) */

  const [data, setData] = useState();

  const handleDisplayForm = (display) => {
    setDisplayForm(display);
  };

  const updatData = (data) => {
    console.log(data);
    setData({
      ...props.data,
      name: data.name,
      surname: data.surname,
      email: data.email,
      title: data.title,
      bio: data.bio,
      area: data.area,
    });
  };

  const updateImage = (img) => {
    setData({ ...props.data, image: img });
    props.imgaeUpdat(img);
    console.log(data);
  };

  useEffect(() => {
    console.log(me)
   
    console.log(me)
  }, []);

  useEffect(() => {

    if(userId){
      setMe(false)
    }else{
      setMe(true);
      setData(props.data)
    }

       
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    if (userId) {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" + userId,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQzMzBhNWRhMTNhZjAwMTUyYzFjNjciLCJpYXQiOjE2NDg1NzA1MzQsImV4cCI6MTY0OTc4MDEzNH0.I9nECqsO8I-yDSTS2Mqpftc9JQc4P94P-LYnYKzT64g",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        /* console.log(data); */

        setData(data);
      } else {
        alert("not successful");
      }
    }
  };
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
            <ExperienceList userId={userId} />
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
