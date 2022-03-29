import { Form, Button, Container, Row, Col } from "react-bootstrap";
const { useState } = require("react");

const LoginPage = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
  });

  const fetchResult = async (username) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQyY2NiZmRhMTNhZjAwMTUyYzFjNWYiLCJpYXQiOjE2NDg1NDQ5NTksImV4cCI6MTY0OTc1NDU1OX0.tsm5CZt_7IR4idrP7BfoKsUvMqz8E9toxItKwwtrJgg",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        alert("success!");
      } else {
        alert("something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitFetch = () => {
    return fetchResult();
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Form onSubmit={submitFetch}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Username"
                  value={info.username}
                  onChange={(e) =>
                    setInfo({
                      ...info,
                      username: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
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
              </Form.Group>

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
