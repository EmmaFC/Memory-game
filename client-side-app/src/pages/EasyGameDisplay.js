import {Container, Row, Col} from 'react-bootstrap';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Button from './components/Button/Button.tsx';
import Card from './components/Card/Card.tsx';

<div className="App">

<Header />
  <body>
    
  <Row>
    <Col sm={4}>
   
    </Col>
    <Col sm={8}>
        <Container>
            <Row>
                    <Col>
                    <Card />
                    </Col>
                    <Col>
                    <Card />
                    </Col>
                    <Col>
                    <Card />
                    </Col>
            </Row>
            <Row>
                    <Col>
                    <Card />
                    </Col>
                    <Col>
                    <Card />
                    </Col>
                    <Col>
                    <Card />
                    </Col>
            </Row>
            <Row>
                    <Col>
                    <Card />
                    </Col>
                    <Col>
                    <Card />
                    </Col>
                    <Col>
                    <Card />
                    </Col>
            </Row>
        </Container>
    </Col>
  </Row>
      <Button />
  </body>

<Footer/>

</div>