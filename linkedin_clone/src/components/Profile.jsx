import "../styles/profileSection.css";

const Profile = ({ controlDisplay, data }) => {
  const openDisplay = () => {
    controlDisplay(true);
  };

  return (
    <>
      <div className="profileSection">
        <div className="coverPicture">
          <div className="camera">
            {" "}
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
          </div>
        </div>
        <div className="profileContentWrapper">
          <div className="profilePictureDivFlexContainer">
            {/* div for profile picture */}
            <div>
              <div className="profileImage">
                <img
                  src={data.image}
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
          </div>
          {/* name and profile content section */}
          <div className="proflieContent">
            <div>
              <p>
                {data.name} {data.surname}
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
                  <strong>ksdksksskmkssssssssss</strong>
                </p>
                <p>
                  <strong>ksdksksskmk</strong>
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
                  <span> and attract qualified</span>
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
