import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
import { moreInfo2 } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import myImage from "../marine-profile.jpg";
import myImage2 from "../components/profile-images/ella-alana.jpg";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 28rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-right">
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-flex flex-column text-right">
              <Container>
                <p>{bio}</p>
                {moreInfo2 && <p>{moreInfo2}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "20rem" }}
              />
            </Col>
            <Col className="d-none d-md-block text-center">
              {/* Add the image here */}
              <img
                src={myImage2} // Set the src attribute to the imported image
                alt="Your Image Alt Text"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "20rem" }}
              />
            </Col>
            <Col className="d-none d-md-block text-center">
              {/* Add the image here */}
              <img
                src={myImage} // Set the src attribute to the imported image
                alt="Your Image Alt Text"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "20rem" }}
              />
            </Col>

          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
