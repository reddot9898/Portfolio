import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';
import '../css/about.css';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },

};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row>
                <Col style={styles.introTextContainer}>
                  {parseIntro(data.about)}
                </Col>
              </Row>
              <Row>
                <Col className="introImage1">
                  <img src={data?.imageSource} alt="profile" />
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>

        <Container>
          <Row>
            <Col className="header2">
              <h2> Who I Am </h2>
            </Col>
          </Row>
          <Row>
            <Col className="whoI">
              <div>
                I currently reside in Jacksonville, North Carolina with my beautiful
                wife Alana and amazing daughter Ella. When I&apos;m not working on
                developing my skills as a coder, I&apos;ll most likely be in my garage
                building engines or spending time with my family at the beach. I&apos;m
                a veteran of the United States Marine Corps and have a special
                interest in working with any Organizations that aim to help
                and assist fellow Veterans.

              </div>
            </Col>
          </Row>
          <Row>
            <Col className="introImage2">
              <img src={data?.imageSource2} alt="profile" />
            </Col>
            <Col className="introImage3">
              <img src={data?.imageSource3} alt="profile" />
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
