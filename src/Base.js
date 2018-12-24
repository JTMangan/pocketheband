import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './Base.css';

class Base  extends Component {
    render() {
      return (
        <div>
          <p className = "Base__title">Pocket</p>
          <button className = "Base__Social1"> </button>
          <button className = "Base__Social2"> </button>
          <button className = "Base__Social3"> </button>
          <div>
            <Link to='/'>
                <button className = "Base__button">
                  Home
                </button>
            </Link>
            <Link to='/music'>
                <button className = "Base__button">
                  Music
                </button>
            </Link>
            <Link to='/live'>
                <button className = "Base__button">
                  Live
                </button>
            </Link>
            <Link to='/contact'>
                <button className = "Base__button">
                  Contact
                </button>
            </Link>
          </div>
        </div>
      );
    }
  }

export default Base;