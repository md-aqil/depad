
import React from 'react';
import { Row, Col } from 'antd';
import arroLeft from '../images/arro-left.png';
import arroRight from '../images/arro-right.png'
import logo from '../images/upcomming-logo.png'
import '../styles/upcomming.css';





function Upcomming() {
  return (
    <div className="upcomming-bg">
          <div className="upcomming-pool">
            <div className="upper-space"></div>
        
            <div className="upcomming-content">
                <div className="container">
                    <Row>
                        <Col span={20}>
                            <h1  className="second-heading">upcomming pools</h1>
                        </Col>
                        <Col span={4}>
                            <Row>
                                <Col span={6}>
                                    <div className="left-arro">
                                        <img src={arroLeft} alt="" />
                                    </div>
                                </Col>
                                <Col span={6}>
                                    <div className="right-arro">
                                    <img src={arroRight} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                
                
               

                <div className="upcomming-content-div">
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
    </div>
    
  );
}
export default Upcomming;