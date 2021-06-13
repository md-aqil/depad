
import React from 'react';
import { Row, Col } from 'antd';
import logo from '../images/upcomming-logo.png'
import Frame from '../images/Frame.png'
import { Progress } from 'antd';
import "../styles/featured.css";
import linkdin from '../images/in.png';
import twit from '../images/twit.png';
import youtube from "../images/youtube.png";
import fb from '../images/fb.png';
import Hourglass from "../images/hourglass 1.png";
import LineBg from "../images/upcomming-bg-line.png"
import handStar from "../images/hand-star.png";
import feeOne from "../images/fee 1.png";
import handWhite from "../images/hand-white.png";
import feeWhite from "../images/fee-white.png";
import glassWhite from "../images/glass-white.png"
import lockWhite from "../images/lock-white.png";
import download from "../images/download 2.png";
import doWhite from "../images/do-white.png"
import saveMoney from "../images/save-money 1.png";
import saveMoneyWhite from "../images/save-money-white.png";





function Featured() {
  return (
    <div>
            
        <div className="stats minus-margin-bottom padding-top">
        <div className="background-line-image">
                   <img src={LineBg} alt="" />
                </div>
            <div className="container">
                      
                <div className="">
                    <div className=" primary-div">
                    <h2 className="third-heading">KYC information</h2>
                      

                      <div className="audit">
                          
                          <h5 className="important-primary-para">0.000220.000226 bnb per tokens60.000220.000226 bnb token6.pdf</h5>
                      </div>
                      <div className="little-space"></div>
                      <div className="little-space">

                      </div>

                        <div className="upcomming-info">


                            <div className="min">
                                <p className="small-para">softcap</p>
                                <h1>200BNB</h1>
                            </div>

                            <div className="min">
                                <p className="small-para">presale Rate</p>
                                <h1>709,983BNB</h1>
                            </div>

                            <div className="max">
                                <p className="small-para">Liquidity Allocation</p>
                                <h1>25%</h1>
                            </div>

                            <div className="access">
                                <p className="small-para">Open Time</p>
                                <h1>May 23, 2021 13:00 PM GMT</h1>
                            </div>

                        </div>
           
                    </div>

                    </div>
               
            
            </div>
            
            <div className="price-reward spacer">
             
               <div className="container">
                         
                <div className="stats-content-div">
                    
                    <div className="stats-logo-div text-center">
               
                     <div >
                         <img className="dark-image-icon" src={handStar} alt="" />
                         <img className="white-image-icon" src={handWhite} alt="" />
                         <h1 className="stats-heading">Price and Rewards</h1>
                     </div>
                   
                     <div>
                        <p className="stats-para">token price</p>
                        <h1 className="stats-heading-primary">
                        $12.07
                        </h1>
                     </div>
                   
                     <div>
                        <p className="stats-para">Pending Reward</p>
                        <h1 className="stats-heading-primary">
                        18.78 BNB

                        </h1>
                     </div>

                     <div>
                        <p className="stats-para">Team vesting</p>
                        <h1 className="stats-heading-primary">
                        115,000 START
                        </h1>
                     </div>

                    </div>
                  

                    <div className="stats-logo-div big-div ">
               
                        <div  className="text-center">
                        <img className="dark-image-icon" src={feeOne} alt="" />
                         <img className="white-image-icon" src={feeWhite} alt="" />
                            <h1 className="stats-heading">platform fees</h1>
                        </div>

                      <div className="development-stats">
                       
                            <div>
                                <p className="stats-para">development</p>
                                <h1 className="stats-heading-primary">
                               2.00%
                                </h1>
                            </div>
                            <div className="empty-div"></div>

                            <div>
                                <p className="stats-para">START/WBNB liquidity</p>
                                <h1 className="stats-heading-primary">
                              1.00%
                                </h1>
                            </div>
                            <div>
                                <p className="stats-para">staking rewards</p>
                                <h1 className="stats-heading-primary">
                              0.5%
                                </h1>
                            </div>
                           
                           
                            <div className="empty-div"></div>
                            <div>
                                <p className="stats-para">buyback & burn</p>
                                <h1 className="stats-heading-primary">
                               0.5%
                                </h1>
                            </div>
                           
                            <div>
                                <p className="stats-para">unstaking Burn</p>
                                <h1 className="stats-heading-primary">
                               0.5%
                                </h1>
                            </div>


                          


                        </div>


                    </div>
                  
             
                    <div className="stats-logo-div text-center">
               
               <div>
                       <img className="dark-image-icon" src={Hourglass} alt="" />
                        <img className="white-image-icon" src={glassWhite} alt="" />
                   <h1 className="stats-heading">Price and Rewards</h1>
               </div>
               <div>
                  <p className="stats-para">token price</p>
                  <h1 className="stats-heading-primary">
                  $12.07
                  </h1>
               </div>
               <div>
                  <p className="stats-para">Pending Reward</p>
                  <h1 className="stats-heading-primary">
                  18.78 BNB

                  </h1>
               </div>

               <div>
                  <p className="stats-para">Team vesting</p>
                  <h1 className="stats-heading-primary">
                  115,000 START
                  </h1>
               </div>

              </div>
            
                

            
                
                
               
                    <div className="stats-logo-div text-center">
               
                     <div>
                     
                     <img className="dark-image-icon" src={handStar} alt="" />
                        <img className="white-image-icon" src={lockWhite} alt="" />
                         <h1 className="stats-heading">Price and Rewards</h1>
                     </div>
                     <div>
                        <p className="stats-para">token price</p>
                        <h1 className="stats-heading-primary">
                        $12.07
                        </h1>
                     </div>
                     <div>
                        <p className="stats-para">Pending Reward</p>
                        <h1 className="stats-heading-primary">
                        18.78 BNB

                        </h1>
                     </div>

                     <div>
                        <p className="stats-para">Team vesting</p>
                        <h1 className="stats-heading-primary">
                        115,000 START
                        </h1>
                     </div>

                    </div>
                  

                    <div className="stats-logo-div text-center">
               
                     <div>
                            
                     <img className="dark-image-icon" src={download} alt="" />
                        <img className="white-image-icon" src={doWhite} alt="" />
                         <h1 className="stats-heading">Price and Rewards</h1>
                     </div>
                     <div>
                        <p className="stats-para">token price</p>
                        <h1 className="stats-heading-primary">
                        $12.07
                        </h1>
                     </div>
                     <div>
                        <p className="stats-para">Pending Reward</p>
                        <h1 className="stats-heading-primary">
                        18.78 BNB

                        </h1>
                     </div>

                     <div>
                        <p className="stats-para">Team vesting</p>
                        <h1 className="stats-heading-primary">
                        115,000 START
                        </h1>
                     </div>

                    </div>
                  
             
                    <div className="stats-logo-div text-center">
               
               <div>
                   <img className="dark-image-icon" src={saveMoney} alt="" />
                    <img className="white-image-icon" src={saveMoneyWhite} alt="" />
                   <h1 className="stats-heading">Price and Rewards</h1>
               </div>
               <div>
                  <p className="stats-para">token price</p>
                  <h1 className="stats-heading-primary">
                  $12.07
                  </h1>
               </div>
               <div>
                  <p className="stats-para">Pending Reward</p>
                  <h1 className="stats-heading-primary">
                  18.78 BNB

                  </h1>
               </div>

               <div>
                  <p className="stats-para">Team vesting</p>
                  <h1 className="stats-heading-primary">
                  115,000 START
                  </h1>
               </div>

              </div>
            
                    </div>

                 
               </div>
            </div>
            
        
        </div>

    </div>
    
  );
}



export default Featured;