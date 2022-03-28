import "../styles/mainPage.css"
import Profile from "./Profile"


const MainPage = () =>{




    return(
        <>
                
                <div className="mainContainer">
                        <div className="wrapperFlex">
                            <div className="left">
                            {/* all components on the left */}
                            <Profile />
                            </div>
                            <div className="right">
                                {/* all components on the left */}
                            </div>
                        </div>
                </div>
        </>
    )
}



export default MainPage