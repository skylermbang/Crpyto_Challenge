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
        <Image src="https://avatars.githubusercontent.com/u/32551541?v=4" style={{ height: "300px", width: "400px" }}></Image>
        <h2>Skyler Minsu Bang</h2>
        <a href="https://github.com/skylermbang">  <Button variant="success">Github</Button>{' '}</a>
        <a href="https://www.linkedin.com/in/skyler-minsu-bang-250072148/" style={{ marginLeft: "10px" }}><Button variant="info"> LinkedIn </Button></a>
        <a href="https://skyler-world.tistory.com/284#comment21548659" style={{ marginLeft: "12px" }}><Button variant="danger"> Personal Blog </Button></a>

      </div>
    </div>)
  }


  const Manual = () => {
    return (<div>
      <h1> User Manual Guide </h1>
      <iframe width="1424" height="620" src="https://www.youtube.com/embed/owpV-vNYeHY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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
                <Nav.Link eventKey="first">AboutUs</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Manual</Nav.Link>
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


      <GridWrapper style={{ marginBottom: "400px" }}>

      </GridWrapper ></div >
  )
}

export default About