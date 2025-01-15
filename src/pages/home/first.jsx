import React, { useState } from 'react';
import './first.css';
import img1 from '../../images/newonline.png'
import img2 from '../../image/home1.png'
import img3 from '../../image/home2.png'
import img4 from '../../image/home2.webp'

const First = () => {

  return (
    <>  
      <div className="first_container" id='home'>
        <div className="fleft">
        <h2>Your Ideas, Our Expertise</h2> 
        <p><span>You know what? </span>We turn your ideas into global online identities
          <br />
            <span>Discover ! </span> how we create digital solutions that resonate worldwide.</p>
        <a href="#services"><button>Our Services</button></a>
        </div>
        <div className="fright">
          <div className="fallimages">
          <img src={img4} alt="" />
          {/* <img src={img4} alt="" />
          <img src={img4} alt="" /> */}
          </div>
        </div>
      </div>
        
    </>
  );
};

export default First;