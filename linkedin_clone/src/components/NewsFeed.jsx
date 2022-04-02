import "../styles/mainPage.css";
import "../styles/newsfeed.css";
import MySidebarEdit from "./MySideBarEdit";
import MySideBarList from "./MySideBarList";
import PostFeed from "./PostFeed";
import Posts from "./Posts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideCardLeft from "./SideCardLeft"

const NewsFeed = ({ data }) => {
  const navigate = useNavigate();
  const [displayPostForm, setDisplayPostForm] = useState(false);
  const [posts, setPost] = useState();

  useEffect(() => {
    /* console.log("data change");
    console.log(data.token); */
    fetchData(data.token);
  }, [data]);

  const fetchData = async (token) => {
    
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.ok) {
        let post = await response.json();
        
        setPost(post);
      } else {
        alert("You need to login with your token. Click ok to proceed");
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="mainContainer">
        <div className="wrapperFlex">
          <div className="left leftNewsFeed">
            <div className="leftSideBar">
              <SideCardLeft data={data}/>
            </div>
            <div className="newsfeedSection">
              <div>
                <div className="postWrapperDiv">
                  <div>
                    <div>
                      <img src={data.image} />
                    </div>
                    <div>
                      {/* <div onClick={handleDiispayPostForm} placeholder="Start a post" /> */}
                      <div onClick={() => setDisplayPostForm(true)}>
                        {" "}
                        Start post
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <svg
                        color="#70B5F9"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        class="bi bi-image-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                      </svg>
                      <p>Photo</p>
                    </div>
                    <div>
                      <svg
                        color="#7FC15E"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-play-btn-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      </svg>
                      <p>Video</p>
                    </div>
                    <div>
                      <svg
                        color="#E7A33E"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        class="bi bi-calendar-date"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                      <p>Event</p>
                    </div>
                    <div>
                      <svg
                        color="#FC9295"
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        fill="currentColor"
                        class="bi bi-newspaper"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                        <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                      </svg>
                      <p>Write Article</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="horizontalDivNewsfeedwrapper">
                <div></div>
                <span>Sort by:</span>
                <span>Top</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>

              {/* <Posts  name={data.name} title={data.title} /> */}
              {posts && posts.filter(post=>post.image && post.user)
                .slice(-10,).map((post) =>
                <Posts
                    data={post}
                  />
                 )}

            </div>
          </div>

          <div className="right">
            <MySidebarEdit />
            <MySideBarList />
          </div>
        </div>
      </div>
      {displayPostForm && (
        <PostFeed closeDisplay={setDisplayPostForm} data={data} />
      )}
    </>
  );
};

export default NewsFeed;

 {/* <Posts
                    key={post._id}
                    data={post.text}
                    name={data.name}
                    title={data.title}
                  /> */}