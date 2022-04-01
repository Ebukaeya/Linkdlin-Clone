import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
const { useState } = require("react");

const LoginPage = ({ functionData }) => {
  const [info, setInfo] = useState({
    token: "",
  });

  const Navigate = useNavigate();

  const fetchResult = async (token) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        functionData({ ...data, token: token });
        alert("success!");
        Navigate("/profile");
      } else {
        alert("something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitFetch = (e) => {
    e.preventDefault();
    fetchResult(info.token);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          marginTop: "8vh",
        }}
      >
        {" "}
        <svg
        color="#0A66C2"
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          fill="currentColor"
          class="bi bi-linkedin"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </div>
      <Container style={{ marginTop: "1vh" }}>
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Form onSubmit={submitFetch}>
              <Form.Group>
                <Form.Label>Token</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your token here"
                  value={info.token}
                  onChange={(e) =>
                    setInfo({
                      ...info,
                      token: e.target.value,
                    })
                  }
                />
              </Form.Group>

              {/* <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                 
                  type="email"
                  placeholder="Email"
                  value={info.email}
                  onChange={(e) =>
                    setInfo({
                      ...info,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Group> */}

              <Button variant="success" type="submit">
                Log In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LoginPage;
