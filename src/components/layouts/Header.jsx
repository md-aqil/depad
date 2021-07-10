
import React from 'react';
import { Row, Col } from 'antd';
import '../../styles/header.css';
import whiteMoon from '../../images/moon-white.png'
import sunBlue from '../../images/sun-blue.png';
import Moon from "../../images/moon.png"
import Sun from "../../images/sun.png"
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { useWeb3 } from '../../hooks/ethereum';

function Header(props) {
  const { Header, Content, Footer } = Layout;
  const {onConnectWallets} = props;
  const {connect, isConnected} = useWeb3();
  return (
   <div>
      <nav className="nav navigation bg-color navbar-dark navbar overlay navbar-expand-lg">
      <div className="container">
         <div className="logo">
               <Link to="/">
                     <h1>dePad</h1>
                  </Link>
               </div>
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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
         <div className="collapse text-center nav-item navbar-collapse" id="collapsenavbar">
               <div className="links">
                     <ul>
                        <li>
                           <Link to="/all-pools">all pools</Link>
                        </li>
                        <li>
                           <Link to="/presale-voting">voting</Link>
                        </li>
                  <li>
                        <Link to="/stats">Stats</Link>
                  </li>
                        <li>
                           <Link to="#">staking</Link>
                        </li>
                     </ul>
               </div>
               <div className="nav-buttons">
                  { isConnected ? <button className="light-btn">Disconnect</button> : <button onClick={()=>connect()} className="light-btn">Connect Wallet</button> }
                  <Link component="button" className="default-btn" to="/form-presale">Creat pool</Link>
               </div>
            </div>
         </div>
      </nav>
   </div>
  );
}
export default Header;