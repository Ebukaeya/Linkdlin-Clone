import { useState } from "react";

const PostFeed = ({ closeDisplay, data }) => {
  const [post, setPost] = useState({
    text: "",
    username: data.username,
    profile: data._id
  });

  const [file, setFile] = useState(null);

  const [enablePostButton, setEnablePostButton] = useState(false);

  const handlePostSubmit = async () => {
    let formData = new FormData();

    formData.append("image", file);

    try {
      let response = await fetch(
        "https://linkedin-clone-api-feb22.herokuapp.com/post/",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("post is created");
        const data = await response.json();
     
        console.log(data);
        if (data) {
          const respFromImgUpload = await fetch(
            "https://linkedin-clone-api-feb22.herokuapp.com/post/" + data ,
            {
              body: formData,
              headers: {
              },
              method: "POST",
            }
          );
          if (respFromImgUpload.ok) {
            alert("Image uploaded");
            closeDisplay(false)
          }
        } 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="BackgroundPostDiv">
        <div className="createPostDiv">
          <div>
            <p>Create a post</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
              onClick={() => {
                closeDisplay(false);
              }}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>

          <hr></hr>

          <div className="profilePictureCreatePost">
            <div className="profileImageCreate">
              <img src={data.image} alt={"img"} />
            </div>
            <div>
              <p>{data.name}</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  class="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
                <p>Anyone</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="textAreaCreatePost">
            <textarea
              value={post.text}
              autoFocus
              placeholder="What do you want to talk about?"
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
              onChange={(e) => {
                setPost({ ...post, text: e.target.value });
                setEnablePostButton(true);
              }}
            ></textarea>
          </div>

          <div className="whoCanSeeYourPost">
            <div>
              <p>Choose who can comment on your post</p>
            </div>
          </div>

          <div className="postButtondiv">
            <div>
              {/* <svg
                color="gray"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                fill="currentColor"
                class="bi bi-image-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
              </svg> */}

              <input onChange={(e) => setFile(e.target.files[0])} type="file" />
            </div>
            <div>
              <button
                onClick={handlePostSubmit}
                className={
                  enablePostButton && post.text
                    ? "enabledbutton"
                    : "disableButton"
                }
              >
                {" "}
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostFeed;
