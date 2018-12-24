import React, {Component} from 'react';
import './Home.css';
import Base from './Base';

class Home  extends Component {
    render() {
      return (
        <div>
          <Base/>
          <p className = "Home__paragraph">
            Pocket is a band from Cincinnati, Ohio. Comprised of 5 members, Ryan Mangan as vocalist and rhythm guitarist, 
            Amanda as bass guitarist, Kirk Tegtmeier and Drew Lowry as lead guitarists, and DK Dews on the drums.
          </p>
        </div>
      );
    }
  }

export default Home;


