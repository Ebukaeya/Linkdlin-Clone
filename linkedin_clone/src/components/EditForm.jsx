import { useState, useEffect } from "react";

const EditForm = ({ controlDisplay, data, dataUpdat }) => {
  /* props are received and used to fill in the initial form value and the the state */

  const [formValue, setFormValue] = useState({
    name: data.name,
    surname: data.surname,
    email: data.email,
    bio: data.bio,
    title: data.title,
    area: data.area,
  });
  /* const [] =  */

  const handleEdit = async (e) => {
    e.preventDefault();
    /* disstructuring the state which holds the finally value of the form */
    dataUpdat(formValue);
    controlDisplay(false);
    let { name, surname, email, bio, title, area } = formValue;

    /* make a put request using tje values of the state */
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization: "Bearer " + data.token,
            "Content-type" : "application/json"
          },
          method: "PUT",
          body: JSON.stringify(formValue)
        }
      );
     let resData = await res.json()
     console.log(resData);
     /*  if (resData.ok) {
        alert("you successfully updated profile");
      } */
    } catch (error) {
      console.log(error);
    }
  };

  const closeDisplay = () => {
    controlDisplay(false);
  };

  return (
    <>
      <div className="backgroundDiv">
        <div className="formDivWrapperEdit">
          <div>
            <p>
              <strong>Edit Profile</strong>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
              onClick={closeDisplay}
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="horizontalLine"></div>
          <div className="editFormDiv">
            <form onSubmit={(e) => handleEdit(e)}>
              <div className="formInputFieldandLabel">
                <p>Name</p>
                <input
                  type={"text"}
                  name={"name"}
                  value={formValue.name}
                  onChange={(e) =>
                    setFormValue({ ...formValue, name: e.target.value })
                  }
                />
              </div>
              <div className="formInputFieldandLabel">
                <p>Surname</p>
                <input
                  type={"text"}
                  name={"surname"}
                  value={formValue.surname}
                  onChange={(e) =>
                    setFormValue({ ...formValue, surname: e.target.value })
                  }
                />
              </div>
              <div className="formInputFieldandLabel">
                <p>Email</p>
                <input
                  type={"text"}
                  name={"email"}
                  value={formValue.email}
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                />
              </div>
              <div className="formInputFieldandLabel">
                <p>Bio</p>
                <input
                  type={"text"}
                  name={"bio"}
                  value={formValue.bio}
                  onChange={(e) =>
                    setFormValue({ ...formValue, bio: e.target.value })
                  }
                />
              </div>
              <div className="formInputFieldandLabel">
                <p>Title</p>
                <input
                  type={"text"}
                  name={"title"}
                  value={formValue.title}
                  onChange={(e) =>
                    setFormValue({ ...formValue, title: e.target.value })
                  }
                />
              </div>
              <div className="formInputFieldandLabel">
                <p>Area</p>
                <input
                  type={"text"}
                  name={"area"}
                  value={formValue.area}
                  onChange={(e) =>
                    setFormValue({ ...formValue, area: e.target.value })
                  }
                />
              </div>

              <div className="formFooter">
                <div className="horizontalLine"></div>
                <div className="divButtonForm">
                  <button>Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditForm;
