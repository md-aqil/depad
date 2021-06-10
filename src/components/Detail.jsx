
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





function Featured() {
  return (
    <div>
            
        <div className="stats padding-top">
            <div className="container">
                      
                <div className="">
                    <div className="stats-div">
                        <div className="upcomming-div-head">

                            <div className="logo-container">
                                <div className="upcomming-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="name-stats">
                                    <h3>Drops B</h3>
                                    <p>A new music service with official albums, singles, videos, remixes, live performances and more for Android, iOS and desktop. It's all here.</p>
                                    <div className="primary-para">175,017 ($2, 502, 743.1)</div>
                                </div>
                            </div>

                            <div className="in-days-progress">
                                <div>
                                    <div className="filled-green">
                                       filled
                                    </div>
                                </div>
                            </div>

                        </div>

                      

                        <div className="">
                            <div className="per-token">
                                <div>
                                    <p className="para">1001.00 per token</p>
                                    <p className="para-orange">90090.90BNB Raised</p>
                                </div>
                                <div>
                                    <p className="progress-para">770 Participent</p>
                                </div>
                            </div>
                           
                            <Progress percent={90} />

                            <div className="progress-text">
                                <div>
                                    <p className="light-para"><span className="primary">100% </span>(Min. 51%)</p>
                                </div>
                                <div>
                                    <p className="light-para">166599/1666000</p>
                                </div>
                            </div>
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

                        <div className="upcomming-info">
                            <div className="min">
                                <p className="small-para">hardcap</p>
                                <h1>2000BNB</h1>
                            </div>

                            <div className="min">
                                <p className="small-para">PancakeSwapn listing</p>
                                <h1>709,983BNB</h1>
                            </div>

                            <div className="max">
                                <p className="small-para">liquidity lock duration</p>
                                <h1>365 days</h1>
                            </div>

                            <div className="access">
                                <p className="small-para">Close Time</p>
                                <h1>May 23, 2021 13:00 PM GMT</h1>
                            </div>

                        </div>

                    
                    </div>

                    </div>


            {/* investment */}
                    
                    <div className="stats-div investment">
                        <h2 className="third-heading">your investment</h2>
                        <div className="upcomming-info">

                            <div className="min">
                                <p className="small-para">Your Tokens</p>
                                <h1>0.000000</h1>
                                <button className="btn-btn-default">clain tokens</button>
                            </div>

                            <div className="min">
                                <p className="small-para">Your BNB Investment</p>
                                <h1>0.000BNB</h1>
                                <button className="btn-btn-default">get refund</button>
                            </div>

                            <div className="max">
                                <p className="small-para">Buy Tokens</p>
                                <h1>1 Token = 0.000400 BNT</h1>
                                <button className="btn-btn-default primary-button">buy</button>
                            </div>


                        </div>

            
                    </div>

            {/* important links */}

                    <div className="stats-div investment">
                        <h2 className="third-heading">important links</h2>
                        <div className="upcomming-info">

                            <div className="min">
                                <p className="small-para">token contract address</p>
                                <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                            </div>

                            <div className="min">
                            <p className="small-para">token contract address</p>
                                <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                            </div>



                        </div>

                        <div className="upcomming-info">

                        <div className="min">
                            <p className="small-para">locked liquidity address</p>
                            <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                        </div>

                        <div className="min">
                        <p className="small-para">locked liquidity address</p>
                            <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                        </div>



                   </div>


                   <div className="upcomming-info">

                        <div className="min">
                            <p className="small-para">Presale contract address</p>
                            <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                        </div>

                        <div className="min">
                        <p className="small-para">conenct</p>
                            <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                            <div className="sociel-links">
                                <div><img src={twit} alt="" /></div>
                                <div><img src={fb} alt="" /></div>
                                <div><img src={linkdin} alt="" /></div>
                                <div><img src={youtube} alt="" /></div>
                            </div>
                        </div>



                    </div>

                    </div>

            {/* audit */}
            <div className="stats-div investment">
                        <h2 className="third-heading">audit</h2>
                      

                            <div className="audit">
                                <div className="audit-name">
                                   <span className="varified"> varified </span>
                                   <span className="audit-para">
                                       <span> by </span>
                                       <span className="primary"> &nbsp; RB smantha </span>
                                   </span>
                                </div>
                                <h5 className="important-primary-para">0.000220.000226 bnb per tokens6</h5>
                            </div>


             
             
                    </div>



                    {/* kyc */}
                    <div className="stats-div investment">
                        <h2 className="third-heading">KYC information</h2>
                      

                            <div className="audit">
                                
                                <h5 className="important-primary-para">0.000220.000226 bnb per tokens60.000220.000226 bnb token6.pdf</h5>
                            </div>


             
             
                    </div>

                {/* disclaimer */}
                <div className="stats-div investment">
                        <h2 className="third-heading">KYC information</h2>
                      

                           
                                
                                <p className="para">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                          


             
             
                    </div>


                </div>
            </div>

    </div>
    
  );
}
export default Featured;