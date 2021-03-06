import { Row, Col, Container } from "react-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

function SingleExperienceCard({ data }) {
  console.log(data.role);
  return (
    <>
      <Container className="mb-3 border-bottom">
        <Row>
          <Col xs={2}>
            <img className="experience-image mr-0" src={data.image} alt="" />
          </Col>

          <Col xs={9} className="px-0">
            <h5 className="mb-0">{data.role}</h5>
            <div>{data.company}</div>
            <div className="text-secondary">
              {data.startDate.slice(0, 10)} -{" "}
              {data.endDate !== undefined
                ? data.endDate.slice(0, 10)
                : "present"}
            </div>
            <div className="text-secondary">{data.area}</div>
            <p className="mt-2 px-0">{data.description}</p>
          </Col>

          <Col xs={1}>
            {
              <div className="icon1 mr-4">
                <BsPencilSquare />
              </div>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SingleExperienceCard;
