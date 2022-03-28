import "../styles/mainPage.css";
import MyFooter from "./MyFooter";

const MainPage = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left">{/* all components on the left */}</div>
          <div className="right">{/* all components on the left */}</div>
        </div>
        <MyFooter />
      </div>
    </>
  );
};

export default MainPage;
