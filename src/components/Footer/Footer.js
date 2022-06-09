//REACT
import React from 'react'
//BOOTSTRAP
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footer() {
    return (
        <div className="footer">
            <Container>

                <Row>
                    <Col> Skyler Minsu Bang
                        <a href="https://github.com/skylermbang">  <Button variant="secondary">Github</Button>{' '}</a></Col>
                    <Col >
                        <div style={{ display: "flex", alignItems: "center" }}>
                            © 2022 Coin Analyzer. All Rights Reserved.


                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container >
        </div >
    )
}

export default Footer