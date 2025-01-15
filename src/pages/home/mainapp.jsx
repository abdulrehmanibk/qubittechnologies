import React from 'react';
import './mainapp.css';
import Bubbles from '../../components/Bubbles';
import First from './first';
import './mainapp.css';
import Second from './second';
import Third from './third';
import Fourth from './fourth';

const Mainapp = () => {
  return (
    <>
    <div className="container">
      <div className="bcontainer">
        <Bubbles/>
      </div>
      <div className="first" id='home'>
          <First/>
      </div>
      <div className="second" id='services'>
          <Second/>
      </div>
      <div className="third" id='trustedBy'>
          <Third/>
      </div>
      <div className="fourth" id='contact'>
          <Fourth/>
      </div>
    </div>
    </>
  );
};

export default Mainapp;