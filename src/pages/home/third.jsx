import React from 'react';
import './third.css';
import img3 from '../../images/third.webp';
import imgr from '../../images/cuser.png';
const Third = () => {
  return (
    <>
    {/* <span className='theading'>Trusted by</span> */}
    <div className="tcontainer">
    <div className="tleft">
        <img src={img3} alt="" />
    </div>
    <div className="tright">
    <div className='theading'>Trusted by</div>
        <div className="allReviews">
        <div className="review" id='slide-1'>
            <div className="rimg">
            <img src={imgr} alt="" />
            <p> Abdul .R <br /> Senior Lead Developer.</p>
            </div>
            
            <p>Leading with code and compassion, in the world of zeros and ones, we build bridges between imagination and implementation.</p>
        </div>
        <div className="review" id='slide-2'>
            <div className="rimg">
            <img src={imgr} alt="" />
            <p>Ibrahim. K<br />Senior Database Consultant.</p>
            </div>
            {/* <hr /> */}
            <p>The silent guardians of data integrity, with precision and prowess, we sculpt the digital landscapes.</p>
        </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Third;