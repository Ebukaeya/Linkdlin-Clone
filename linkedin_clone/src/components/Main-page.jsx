import "../styles/mainPage.css";
import Profile from "./Profile";
import MyFooter from "./MyFooter";
import MySidebarEdit from "./MySideBarEdit";
import MySideBarList from "./MySideBarList";

const MainPage = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left">
            {/* all components on the left */}

            <Profile />
          </div>
          <div className="right">
            {/* all components on the left */}
            <MySidebarEdit />
            <MySideBarList />
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
};

export default MainPage;
