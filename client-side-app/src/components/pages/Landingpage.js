// import CardItem from './components/Card/Card.tsx';
import React from 'react'
// import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
// import {Figure} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

function landingpage ()  {

      return (

        <div className="App center_items">
          <nav>
          <Row>
          <Col >
          <div className="container-div image-bg"></div>
      </Col>
        <Col>
        <div className="container-div image-bg"></div>
       </Col>

       <Col> <div className="container-div image-bg game-select"></div>
       </Col></Row>

        <Row>
          <Col>
            <Link to="/easy-game" className="center_items">Easy Game</Link>
          </Col>
          <Col>
            <Link to="/medium-game" className="center_items">Medium Game</Link>
          </Col>
          <Col>
            <Link to="/hard-game" className="center_items">Hard Game</Link>
          </Col>
         </Row>
          </nav>
        </div>
        
      )

}

export default landingpage;