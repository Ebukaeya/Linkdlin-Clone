import "../styles/profileSection.css";
import { useState } from "react";
const Profile = ({ controlDisplay, data, imageUpload, profile }) => {
  const [image, setImage] = useState(null);

  const openDisplay = () => {
    controlDisplay(true);
  };

  const handleimageupload = (e) => {
    let profilePic = e.target.files[0];

    /* post image as a file in a formData */
    postImage(profilePic, data._id);
    /* read and display image */
    if (profilePic) {
      const reader = new FileReader();
      reader.onload = function (evt) {
        /* console.log(evt.target.result); */
        setImage(evt.target.result);
        imageUpload(evt.target.result);
      };
      reader.readAsDataURL(profilePic);
    } else {
      console.log("error in reading file");
    }
  };

  const postImage = async (file, id) => {
    let formData = new FormData();
    formData.append("image", file);

    try {
      let response = await fetch(
        "https://linkedin-clone-api-feb22.herokuapp.com/profile/" + id + "/picture",
        {
          body: formData,
          headers: {
          },
          method: "POST",
        }
      );
      response.ok
        ? alert("Image uploaded successfully")
        : console.log("there was an issue, relogin");
    } catch (error) {
      alert("Upload not successfully");
    }
  };

  return (
    <>
      <div className="profileSection">
        <div className="coverPicture">
          {profile && (
            <div className="camera">
              {" "}
              <label for="uploadProfileImage" className="uploadLabel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-camera-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                </svg>
              </label>
              <input
                onChange={(e) => handleimageupload(e)}
                id="uploadProfileImage"
                type="file"
              />
            </div>
          )}
        </div>
        <div className="profileContentWrapper">
          <div className="profilePictureDivFlexContainer">
            {/* div for profile picture */}
            <div>
              <div className="profileImage">
                <img
                  src={image ? image : data.image}
                  style={{
                    width: "154px",
                    height: "154px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                />
              </div>
            </div>
            {/* div for edit button */}
            {profile && (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pen"
                  viewBox="0 0 16 16"
                  onClick={openDisplay}
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                </svg>
              </div>
            )}
          </div>
          {/* name and profile content section */}
          <div className="proflieContent">
            <div>
              <p>
                {data.name + " "} {data.surname}
              </p>
              <p>{data.title}</p>
              <div className="location">
                <p> {data.area}</p>
                <span> Contact info</span>
              </div>
              <p> 125 connections</p>
              <div className="opentoWork">
                <button>Open to</button>
                <button>Add profile section</button>
                <button>More</button>
              </div>
            </div>
            {/* school or job */}
            <div className="schoolJob">
              <div>
                <img
                  src="data:image/png;base64,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"
                  style={{ height: "70%", objectFit: "cover" }}
                  alt="wdkmd"
                />
              </div>
              <div>
                <p>
                  <strong>Strive School (remote)</strong>
                </p>
                <p>
                  <strong>student</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="openToWorkSubSection">
            <div>
              <div className="ti-openwrk">
                <span> Open to work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pen"
                  viewBox="0 0 16 16"
                >
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                </svg>
              </div>
              <span> Student at strive school, Fullstack</span>

              <p className="seeAllDetails">See all details</p>
            </div>
            <div>
              <div className="ti-openwrk">
                <div style={{ marginBottom: "-4px" }}>
                  <span className="secondSpanOpentoWork">
                    {" "}
                    Share that you're hiring
                  </span>{" "}
                  <span> and attract </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>
              <span> candidates</span>

              <p className="seeAllDetails">Get started</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
