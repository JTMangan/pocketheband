import React, {Component} from 'react';
import Base from './Base';
import './Music.css';

class Music  extends Component {
    render() {
      return (
        <div>
          <Base/>
          <div>
            <div className = "Music__album">
            </div>
            <div>
              <a href= "https://open.spotify.com/artist/4jb0NrgEQ2lbuDihZOoyFw?si=Xfn8u99IQBiiyXPz2MLUrg" className = "Music__albumname"> 
                Spotify
              </a>
            </div>
            <div>
              <a href= "https://www.amazon.com/Things-You-Think-At-Night/dp/B074MNXK14" className = "Music__albumname"> 
                Amazon
              </a>
            </div>
            <div>
              <a href= "https://itunes.apple.com/us/artist/pocket/1268558724" className = "Music__albumname"> 
                Apple Music
              </a>
            </div>
          </div>
        </div>
      );
    }
  }

export default Music;
