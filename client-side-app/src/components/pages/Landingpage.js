// import CardItem from './components/Card/Card.tsx';
import React from 'react'
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Card';
import {CardItem} from './components/Card.js';
function landingpage ()  {

      return (

        <div className="App">
          <nav>
            <CardItem />
          <Button type="button" variant="secondary" className="image-bg"></Button>
            <Link to="/easy-game"><Button type="button" variant="secondary">Easy Game</Button></Link>
            <Link to="/medium-game"><Button type="button" variant="secondary">Medium Game</Button></Link>
            <Link to="/hard-game"><Button type="button" variant="secondary">Hard Game</Button></Link>
          </nav>
        </div>
        
      )

}

export default landingpage;