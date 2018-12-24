import React, {Component} from 'react';
import Base from './Base';
import './Live.css';

class Live  extends Component {
    render() {
      return (
        <div>
          <Base/>
          <p className = "Live__paragraph">
            Here will go a list of times and places that you're playing.
          </p>
        </div>
      );
    }
  }

export default Live;