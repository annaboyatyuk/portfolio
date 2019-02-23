import React, { Component, Fragment } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import '../../style/sanitize.scss';
import '../../style/style.scss';

export default class App extends Component {

  render() {
    return (
      <Fragment>
          <div className='main-body'>

          
          <Header />
          <div className='main-stuff'>

          <p>GOOD MORNING VIETNAM</p>
          
          </div>

          <Footer />
        </div>
      </Fragment>
    );
  }
}