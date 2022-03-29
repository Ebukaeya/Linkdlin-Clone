import { Container, Row } from "react-bootstrap";
import { BsQuestionCircleFill } from "react-icons/bs";

const MySidebarEdit = () => {
  return (
    <Container>
      <Row>
        <div className="side-edit-bar px-2 border">
          <p className="py-3  border-bottom d-flex justify-content-between">
            Edit public Profile & Url
            <BsQuestionCircleFill />
          </p>
          <p className="py-3 d-flex justify-content-between">
            Add profile in another language
            <BsQuestionCircleFill />
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default MySidebarEdit;
