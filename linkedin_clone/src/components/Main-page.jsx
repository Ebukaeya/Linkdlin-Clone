import "../styles/mainPage.css";
import "../styles/editForm.css";
import Profile from "./Profile";
import MyFooter from "./MyFooter";
import EditForm from "./EditForm";
import { useState } from "react";

const MainPage = () => {

const [displayForm, setDisplayForm] = useState(false)

const handleDisplayForm = (display)=>{
 setDisplayForm(display)
}
  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left">
            {/* all components on the left */}

            <Profile controlDisplay={handleDisplayForm}/>
          </div>
          <div className="right">{/* all components on the left */}</div>
        </div>
        <MyFooter />
       { displayForm && <EditForm  controlDisplay={handleDisplayForm} data={""}/>}
      </div>
    </>
  );
};

export default MainPage;
