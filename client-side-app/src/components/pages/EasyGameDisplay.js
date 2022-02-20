import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// import CardItem from './components/Card/Card.tsx';

function EasyGameDisplay () {

    return (

        <div className="App">
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col >
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                  <Col>
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                  <Col> 
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                  <Col>
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                  <Col> 
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                </Row>
                <Row>
                  <Col >
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                  <Col>
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                  <Col> 
                    <div className="container-div image-bg border-radius"></div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>

    )
}

export default EasyGameDisplay;