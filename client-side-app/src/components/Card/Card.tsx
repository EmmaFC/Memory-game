import {Figure} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import React, {Component} from 'react';

class CardItem extends Component {

  
  render (){
    return (
      <div className="App">
        <Button variant="outline-secondary">
            <Figure>
            <Figure.Image
                width={90}
                height={160}
                alt="171x180"
                src="https://picsum.photos/seed/picsum/200/300"
            />
            </Figure>
        </Button>{' '}
      </div>
    );
  }
}
  export default CardItem;
  