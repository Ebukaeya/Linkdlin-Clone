import "../styles/mainPage.css";
import "../styles/editForm.css";
import MyFooter from "./MyFooter";
import EditForm from "./EditForm";
import Profile from "./Profile";
import MySidebarEdit from "./MySideBarEdit";
import MySideBarList from "./MySideBarList";
import { useState, useEffect } from "react";

const MainPage = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const [data, setData] = useState();

  const handleDisplayForm = (display) => {
    setDisplayForm(display);
  };

  const updatData = (data) => {
    console.log(data);
    setData({...props.data, name:data.name,surname:data.surname});
  };

  useEffect(() => {
    console.log("state changed");
  }, [data]);
  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left">
            {/* all components on the left */}

            <Profile
              controlDisplay={handleDisplayForm}
              data={data ? data : props.data}
            />
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
            data={props.data}
            dataUpdat={updatData}
          />
        )}
      </div>
    </>
  );
};

export default MainPage;
