import { Row, Col, Form } from "react-bootstrap";
import {
  BsLinkedin,
  BsQuestionCircleFill,
  BsFillGearFill,
} from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MyFooter = () => {
  return (
    <>
      <Row
        className="d-flex align-items-center pl-3 "
        style={{ color: "blue" }}
      >
        <h1 className="my-0">Linked</h1>
        <BsLinkedin className="footer-logo" />
      </Row>
      <Row>
        <Col xs={6}>
          <Row className="footer-text">
            <Col xs={4} className=" mt-2">
              About
            </Col>
            <Col xs={4} className=" mt-2">
              Accessibility
            </Col>
            <Col xs={4} className="mt-2">
              Talent Solutions
            </Col>
            <Col xs={4} className="mt-2">
              Community Guidelines
            </Col>
            <Col xs={4} className=" mt-2">
              Careers
            </Col>
            <Col xs={4} className=" mt-2">
              Marketing Solutions
            </Col>
            <Col xs={4} className="mt-2">
              Privacy & Terms
              <MdOutlineKeyboardArrowDown />
            </Col>
            <Col xs={4} className="mt-2">
              Ad Choices
            </Col>
            <Col xs={4} className="mt-2">
              Advertising
            </Col>
            <Col xs={4} className="mt-2">
              Sales Solutions
            </Col>
            <Col xs={4} className="mt-2">
              Mobile
            </Col>
            <Col xs={4} className="mt-2">
              Small Business
            </Col>
            <Col xs={4} className="mt-2">
              Safety Center
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <Row>
            <Col xs={6} className="d-flex align-items-start px-0">
              <BsQuestionCircleFill className="footer-icon mr-2" />
              <div>
                <p className="footer-right my-0">Questions?</p>
                <p className="footer-right1 my-0">Visit our Help Center.</p>
              </div>
            </Col>
            <Col xs={6}>
              <label htmlFor="language" className="select1 my-0">
                Select Language
              </label>
              <select id="language" className="py-1">
                <option>English</option>
                <option>Finnish</option>
                <option>German</option>
              </select>
            </Col>
            <Col xs={6} className="d-flex align-items-start px-0">
              <BsFillGearFill className="mr-2" />
              <div>
                <p className="footer-right my-0">
                  Manage your account and privacy
                </p>
                <p className="footer-right1 my-0">Go to your Settings.</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="corporate pl-3 my-2">LinkedIn Corporation © 2022 </Row>
    </>
  );
};

export default MyFooter;
