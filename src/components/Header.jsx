
import React from 'react';
import { Row, Col } from 'antd';
import '../styles/header.css';

import Moon from "../images/moon.png"
import Sun from "../images/sun.png"



function Header() {
  return (
    <div className="nav">
       <div className="container">
            <Row>
                
               <Col span={8}>
                   <div className="logo">
                        <h1>dePad</h1>
                    </div>
               </Col>
               
               <Col span={2}>
                   <div className="switch">
                        <div className="switch-box">
                            <div className="night">
                                <img src={Moon} alt="" />
                            </div>
                            <div className="day active">
                            <img src={Sun} alt="" />
                            </div>
                        </div>
                    </div>
               </Col>

               <Col span={6}>
                   <div className="links">
                        <ul>
                            <li>voting</li>
                            <li>stats</li>
                            <li>staking</li>
                        </ul>
                    </div>
               </Col>
    
               <Col span={8}>
                   
                    <div className="nav-buttons">
                      <Row>
                         <Col span={12}> <button className="light-btn">Connect Wallet</button></Col>
                         <Col span={12}><button className="default-btn">Creat pool</button></Col>
                        
                      </Row>
                    </div>
                        
                  
               </Col>

            </Row>
       </div>
   
    </div>
    
  );
}
export default Header;