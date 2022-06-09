import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
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
  return (
    <div> <GridWrapper>
      <h2>About Page</h2>
      <div> <p>
        <h2>Skyler Minsu Bang</h2>
        <a href="https://github.com/skylermbang">  <Button variant="success">Github</Button>{' '}</a>
        <a href="https://www.linkedin.com/in/skyler-minsu-bang-250072148/"><Button variant="info"> LinkedIn</Button></a>
        <a href="https://skyler-world.tistory.com/284#comment21548659"><Button variant="danger"> Personal Blog </Button></a>

      </p></div>

      <h2> Crypto Analyzer </h2>

    </GridWrapper ></div >
  )
}

export default About