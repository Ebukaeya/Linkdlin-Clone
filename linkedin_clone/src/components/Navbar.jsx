import "../styles/Narbar.css";
import { Dropdown, ButtonGroup } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <div className="navbar-container">
      <div className="Wrapper-navbar">
        <div className="left-navbar">
          <div className="search-navbar">
            <div className="badge">
              <p>IN</p>
            </div>
            <div className="search-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="black"
                className="bi bi-search"
                viewBox="0 0 16 16"
                style={{ marginBottom: "10px" }}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <p style={{ marginLeft: "5px", color: " rgb(92, 86, 86)" }}>
                Search for people,jobs and more
              </p>
            </div>
          </div>
        </div>

        <div className="right-navbar">
          <div className="home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="   rgb(104, 95, 95)"
              class="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
            <p style={{ marginBottom: "0px" }}>Home</p>
          </div>
          <div className="mynetwork">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill=" rgb(104, 95, 95)"
              className="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
            </svg>
            <p style={{ marginBottom: "0px" }}>My Network</p>
          </div>

          <div className="jobs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill=" rgb(104, 95, 95)"
              class="bi bi-briefcase-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
            </svg>
            <p style={{ marginBottom: "0px" }}>Jobs</p>
          </div>

          <div className="messaging">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill=" rgb(104, 95, 95)"
              class="bi bi-chat-dots-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <p style={{ marginBottom: "0px" }}>Messaging</p>
          </div>
          <div className="notification">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill=" rgb(104, 95, 95)"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            <p style={{ marginBottom: "0px" }}>Notification</p>
          </div>

          <div className="outer-div">
            <div className="picture">
              <img
                className="photo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.l28uBsuk_0csHSUxzCZgDwAAAA%26pid%3DApi&f=1"
                alt=""
              />
            </div>
            <div className="wrapper-dropdown">
              <Dropdown as={ButtonGroup}>
                <p
                  style={{
                    marginRight: "5px",
                    fontSize: "x-small",
                    marginBottom: "0px",
                  }}
                >
                  Me
                </p>
                <Dropdown.Toggle split className="dropdown" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="vertical-line"></div>
          <div className="work">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill=" rgb(104, 95, 95)"
              class="bi bi-microsoft"
              viewBox="0 0 16 16"
            >
              <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
            </svg>
            <div className="work-drop">
              <p style={{ marginBottom: "0px", marginRight: "5px" }}>Work</p>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split className="dropdown" />
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="paragraph">
            <p style={{ marginBottom: "0px" }}>Try premium for</p>
            <p>free</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyNavbar;
