import React from 'react'

import { Container, Row, Col, Badge, Button } from 'react-bootstrap';


function Footer() {
    return (
        <div className="footer">
            <Container>

                <Row>
                    <Col> Skyler Minsu Bang
                        <a href="https://github.com/skylermbang">  <Button variant="secondary">Github</Button>{' '}</a></Col>
                    <Col> <Badge pill bg="secondary">
                        © 2022 Coin Analyzer. All Rights Reserved.

                    </Badge>{' '}
                        <Badge pill bg="success">

                        </Badge>{' '}</Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer