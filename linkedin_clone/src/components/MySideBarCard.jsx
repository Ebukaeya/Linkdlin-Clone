import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MySideBarCard = ({ profiles }) => {
  // console.log(profiles);
  return (
    <Row>
      <Col xs={3}>
        <img
          className="sidebar-image1"
          src={profiles.image}
          alt="profile pics"
        />
      </Col>
      <Col xs={9}>
        <h6 className="sidebar-name">
          {profiles.name} {""} {profiles.surname}
        </h6>
        <p className="mb-1 sidebar-title">{profiles.title}</p>
        <Link to={`/profile/${profiles._id}/:username`}>
          <div
            className="sidebar-button1 py-1 border w-50 pl-2"
            variant="outline-secondary"
            style={{ cursor: "pointer" }}
          >
            Connect
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default MySideBarCard;
