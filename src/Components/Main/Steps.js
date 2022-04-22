import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const btn = { backgroundColor: '#F16E10' };

function Steps() {
    return (
        <Container variant="primary">
            <Row className="icon-cards__heading" >
                <Col sm={5}>sm=5</Col>
                <Col sm={5}>sm=5</Col>
            </Row>
            <Row>
            </Row>
        </Container>
    );
}

export default Steps;
