
import React from 'react';
import { Row, Col } from 'antd';
import { Progress } from 'antd';
import linkdin from '../../images/in.png';
import twit from '../../images/twit.png';
import youtube from "../../images/youtube.png";
import fb from '../../images/fb.png';
import { Divider } from 'antd';

import "../../styles/almuni.css"
import { Link } from 'react-router-dom'






function Almuni() {
  return (
    <div>
          <div className="get-alert">
              <div className="container">
                <div className="email-section">
                    <h1>get alert for new brands</h1>
                    <div className="subscribe">
                            <form action="">
                                <input type="text" placeholder="Enter your email" />
                              <button type="submit">subscribe</button>
                            </form>
                    </div>
                </div>
              </div>
          </div>  

          <div className="footer">
               <div className="container footer-content">
                   <div className="company">
                       <h4 className="footer-heading">company</h4>
                        <ul>
                            <li>About us</li>
                            <li>we are hiring</li>
                            <li>TMI reviews</li>
                            <li>term & condition</li>
                        </ul>
                    </div>
                    <div className="info">
                        <h4 className="footer-heading">info area</h4>
                        <ul>
                            <li>homes</li>
                            <li>apartments</li>
                            <li>resorts</li>
                            <li>hostels</li>
                        </ul>
                    </div>
                    <div className="info-two">
                        <h4 className="footer-heading">pages</h4>
                        <ul>
                     

                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/all-pools">All pools</Link>
                            </li>
                            <li>
                                <Link to="/stats">Stats</Link>
                            </li>
                            <li>
                                <Link to="/presale-voting">Presale voting</Link>
                            </li>

                            <li>
                                <Link to="/form-presale">form</Link>
                            </li>
                            <li>
                                <Link to="/detail">Detail</Link>
                            </li>
                            <li>
                                <Link to="/model">model</Link>
                            </li>
                          
                        </ul>
                    </div>

                    <div className="info-three ">
                        <h4 className="footer-heading">other service       </h4>
                        <ul>
                            <li>destination weddings MICE</li>
                            <div className="sociel-links">
                                <div><img src={twit} alt="" /></div>
                                <div><img src={fb} alt="" /></div>
                                <div><img src={linkdin} alt="" /></div>
                                <div><img src={youtube} alt="" /></div>
                            </div>
                        </ul>
                    </div>
               </div>
               <div className="container">
               <Divider />
               </div>

               <div className="copyrite">
                    &copy; 2021 de-pad privated limited | all rights reserved
               </div>
          </div>
    </div>
    
  );
}
export default Almuni;