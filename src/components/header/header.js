import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return ( <
      header >
      <
      div className = "logo" >
      <
      img src = "favicon.ico"
      alt = "logo" / >
      <
      /div>
    
      </header>
    );
  }
}

export default Header;
