import "../styles/mainPage.css";
import "../styles/editForm.css";
import MyFooter from "./MyFooter";
import EditForm from "./EditForm";
import { useState } from "react";
import Profile from "./Profile";
import MySidebarEdit from "./MySideBarEdit";
import MySideBarList from "./MySideBarList";

const MainPage = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleDisplayForm = (display) => {
    setDisplayForm(display);
  };

  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left">
            {/* all components on the left */}

            <Profile controlDisplay={handleDisplayForm} data={props.data} />
          </div>
          <div className="right">
            {/* all components on the left */}
            <MySidebarEdit />
            <MySideBarList />
          </div>
        </div>
        <MyFooter />

        {displayForm && (
          <EditForm controlDisplay={handleDisplayForm} data={props.data} />
        )}
      </div>
    </>
  );
};

export default MainPage;
