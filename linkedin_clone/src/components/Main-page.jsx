
import "../styles/mainPage.css"
import Profile from "./Profile"
import MyFooter from "./MyFooter";


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
<MyFooter />
                </div>
        </>
    )
}



export default MainPage

