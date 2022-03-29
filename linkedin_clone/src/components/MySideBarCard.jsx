import { Row, Col, Button } from "react-bootstrap";

const MySideBarCard = ({ profiles }) => {
  return (
    <Row>
      <Col xs={3}>
        <img
          className="sidebar-image1"
          src={
            profiles.image
              ? profiles.image
              : require("../assets/strive-logo.jpeg")
          }
          alt="profile pics"
        />
      </Col>
      <Col xs={9}>
        <h6 className="sidebar-name">
          {profiles.name} {""} {profiles.surname}
        </h6>
        <p className="mb-1 sidebar-title">{profiles.title}</p>
        <Button className="sidebar-button1 py-1" variant="outline-secondary">
          Connect
        </Button>
      </Col>
    </Row>
  );
};

export default MySideBarCard;
