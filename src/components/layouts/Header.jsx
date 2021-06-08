
import React from 'react';
import { Row, Col } from 'antd';
import '../../styles/header.css';
import whiteMoon from '../../images/moon-white.png'
import sunBlue from '../../images/sun-blue.png';
import Moon from "../../images/moon.png"
import Sun from "../../images/sun.png"
import { Link } from 'react-router-dom'



function Header(props) {
  return (
    <div>
      
        <div className="nav">

<div className="container">
     <Row>
         
        <Col span={6}>
            <div className="logo">
              <Link to="/">
                 <h1>dePad</h1>
              </Link>
                
             </div>
        </Col>
        
        <Col span={2}>
            <div className="switch">
                 <div className="switch-box">
                     <div className={`night ${props.mode =='light'?'':'active'}`} onClick={() => props.setMode(props.mode === "light" ? "dark" : "light")}>
                        {props.mode == 'light'? <img src={Moon} alt="" /> :<img src={whiteMoon} alt="" />}
                         
                     </div>
                     <div className={`day ${props.mode =='light'?'active':''}`}  onClick={() => props.setMode(props.mode === "light" ? "dark" : "light")}>
                      {props.mode == 'light'? <img src={Sun} alt="" /> :<img src={sunBlue} alt="" />}
                     </div>
                 </div>
             </div>
        </Col>

        <Col span={8}>
            <div className="links">
                 <ul>
                   <li>
                     <Link to="/all-pools">all pools</Link>
                   </li>
                   <li>
                    <Link to="/presale-voting">
                      voting
                    </Link>
                   </li>
               
                <li>
                <Link to="/stats">
                    Stats
                </Link>
                </li>
                
                    
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

    </div>
   
  );
}
export default Header;