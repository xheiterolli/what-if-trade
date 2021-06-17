import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import coverPhoto from './assets/cover_photo_small.png'

export const About = () => (

    <Container fluid>
        <Row style={{marginTop: "20px"}}>
            <Col></Col>
            <Col className="d-flex justify-content-center">
                <img src={coverPhoto} />
            </Col>
            <Col>
            <br></br>
            <h2> Xhei Terolli </h2> 
            <h2> Brooklyn College </h2>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3> Contact Info: </h3>
            <h2> Example@gmail.com </h2>
            </Col>
            <Col></Col>
        </Row>
    </Container>
)