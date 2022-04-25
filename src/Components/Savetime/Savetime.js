import react from "react";
import image1 from '../../assets/Savetime/1.png';
import image2 from '../../assets/Savetime/2.png';
import image3 from '../../assets/Savetime/3.png';
import image4 from '../../assets/Savetime/4.png';
import image5 from '../../assets/Savetime/5.png';
import { Col, Container, Row, Card } from "react-bootstrap";
import './Savetime.scss';


function Savetime() {
    return (
        <div>
            <Container className="con" fluid>
                <h1 className="heading">Save Time And Money On Your Move</h1>
                <p className="paragraph">We compare verified and trusted conveyancers, chartered surveyors, removal<br></br> and storage companies to help you save money on your move. Take the stress<br></br> out of moving with Compare My Move.</p>

                <Container>
                    <Row className="row">
                        <Col className="Col_Style">
                            <Card>
                                <a href="#" class="a_tag">
                                    <img src={image1} alt="" style={{ width: 100, paddingTop: 39, marginLeft: 75 }} />
                                    <Card.Body>
                                        <Card.Title className="Text_Style">Conveyancing</Card.Title>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col className="Col_Style">
                            <Card>
                                <a href="#">
                                    <img src={image2} alt="" style={{ width: 100, paddingTop: 20, marginLeft: 75 }} />
                                    <Card.Body>
                                        <Card.Title className="Text_Style">Surveying</Card.Title>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col className="Col_Style">
                            <Card>
                                <a href="#">
                                    <img src={image3} alt="" style={{ width: 100, paddingTop: 2, marginLeft: 75 }} />
                                    <Card.Body>
                                        <Card.Title className="Text_Style">Removals</Card.Title>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                        <Col className="Col_Style">
                            <Card>
                                <a href="#">
                                    <img style={{ width: 100, paddingTop: 28, marginLeft: 75 }} src={image4} alt="" />
                                    <Card.Body>
                                        <Card.Title className="Text_Style">Storage</Card.Title>
                                    </Card.Body>
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <Row className="Bott" fluid>
                    <Col>Helping over <strong>500,000 movers</strong> in the UK</Col>
                    <Col>Rated <strong>‘Excellent’</strong> on
                        <img src={image5} alt="" style={{ width: 30, height: 30, backgroundColor: "purple" }} /> <strong>Trustpilot</strong></Col>
                    <Col><strong>Save up to 70%</strong> on the cost of moving</Col>
                </Row>
            </Container>
        </div>
    );
}

export default Savetime;
