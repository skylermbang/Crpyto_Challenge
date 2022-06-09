import React from 'react';
import styled from 'styled-components';
import { Button, Col, Tab, Nav, Row, Image } from 'react-bootstrap';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;

function About() {


  const About = () => {
    return (<div>

      <div>
        <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqtcJ4%2FbtrEkpH3Fxi%2FMwcC3y33cjJI1bA6HatDl0%2Fimg.png"></Image>
        <h2>Skyler Minsu Bang</h2>
        <a href="https://github.com/skylermbang">  <Button variant="success">Github</Button>{' '}</a>
        <a href="https://www.linkedin.com/in/skyler-minsu-bang-250072148/"><Button variant="info"> LinkedIn</Button></a>
        <a href="https://skyler-world.tistory.com/284#comment21548659"><Button variant="danger"> Personal Blog </Button></a>

      </div>
    </div>)
  }


  const Manual = () => {
    return (<div>
      <h1> User Manual Guide </h1>
      <div>
        <iframe
          src="https://www.youtube.com/embed/E7wJTI-1dvQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />{" "}

      </div>

      <h1> User Manual Guide </h1>
    </div>)
  }


  return (
    <div>
      <GridWrapper><Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">User Manual</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <About />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Manual />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container></GridWrapper>


      <GridWrapper>
        <h2>About Page</h2>
        <h2> Crypto Analyzer </h2>




      </GridWrapper ></div >
  )
}

export default About