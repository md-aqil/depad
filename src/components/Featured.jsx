
import React from 'react';
import { Row, Col } from 'antd';
import logo from '../images/upcomming-logo.png'
import Frame from '../images/Frame.png'
import { Progress } from 'antd';
import "../styles/featured.css"





function Featured() {
  return (
    <div>
            
        <div className="spacer">
            <div className="container">
                    <h1  className="second-heading">featured pools</h1>
                      
                <div className="feature-content-div">
                    <div className="content-div-one">
                        <div className="upcomming-div-head">

                            <div className="logo-container">
                                <div className="upcomming-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="name">
                                    <h3>Drops B</h3>
                                    <p>1ETH = 4480.00 DOP</p>
                                </div>
                            </div>

                            <div className="in-days-progress">
                                <div><img src={Frame} alt="" /></div>
                                <div>
                                    <div className="filled">
                                       <li>filled</li>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="total-raise">
                            <p>total raise</p>
                            <h1>37ETH</h1>
                        </div>

                        <div className="progress">
                            <p className="progress-para">progress</p>
                            <Progress percent={50} />

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
                                <p>min allocation</p>
                                <h1>0</h1>
                            </div>

                            <div className="max">
                                <p>max allocation</p>
                                <h1>tba</h1>
                            </div>

                            <div className="access">
                                <p>access</p>
                                <h1>pols</h1>
                            </div>

                        </div>

                    </div>
                    <div className="content-div-three">
                        <div className="upcomming-div-head">

                            <div className="logo-container">
                                <div className="upcomming-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="name">
                                    <h3>Dotmoves</h3>
                                </div>
                            </div>

                            <div className="in-days">
                                <div><li>in 2 days</li></div>
                            </div>

                        </div>

                        <div className="total-raise">
                            <p>total raise</p>
                            <h1>$300k</h1>
                        </div>

                        <div className="upcomming-info">
                            <div className="min">
                                <p>min allocation</p>
                                <h1>0</h1>
                            </div>

                            <div className="max">
                                <p>max allocation</p>
                                <h1>tba</h1>
                            </div>

                            <div className="access">
                                <p>access</p>
                                <h1>pols</h1>
                            </div>

                        </div>

                    </div>

                    <div className="content-div-one">
                        <div className="upcomming-div-head">

                            <div className="logo-container">
                                <div className="upcomming-logo">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="name">
                                    <h3>Dotmoves</h3>
                                </div>
                            </div>

                            <div className="in-days">
                                <div><li>in 2 days</li></div>
                            </div>

                        </div>

                        <div className="total-raise">
                            <p>total raise</p>
                            <h1>$300k</h1>
                        </div>

                        <div className="upcomming-info">
                            <div className="min">
                                <p>min allocation</p>
                                <h1>0</h1>
                            </div>

                            <div className="max">
                                <p>max allocation</p>
                                <h1>tba</h1>
                            </div>

                            <div className="access">
                                <p>access</p>
                                <h1>pols</h1>
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