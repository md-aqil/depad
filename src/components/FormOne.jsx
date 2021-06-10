import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'




function FormOne() {

      return (
        <div className="voting">

          
          
            <div className="">
            
                
                <div className="little-space"></div>
                <div className="stats-div">
                    <h3 className="primary-heading">Presale Details</h3>
                    <div className="apply-presale-form">
                        <form action="">
                        <Row  gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="token-contract">BEP20 Token Contract</label>
                                <input className="presale-input" id="token-contract" type="text" />
                            </Col>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="token-price">Token Price</label>
                                <input className="presale-input" id="token-price" type="text" />
                            </Col>
                        </Row>
                        <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="softcap">SoftCap (BNB)</label>
                                <input className="presale-input" id="softcap" type="text" />
                            </Col>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="hardcap">HardCap (BNB)</label>
                                <input className="presale-input" id="hardcap" type="text" />
                            </Col>
                        </Row>

                        <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="per-wallet">Min BNB Per Wallet</label>
                                <input className="presale-input" id="per-wallet" type="text" />
                            </Col>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="factor">BNB Allocation Factor</label>
                                <input className="presale-input" id="factor" type="text" />
                            </Col>
                        </Row>
                        <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="start-time">Sale Start Time (In Your Timeone)</label>
                                <input className="presale-input" id="start-time" type="text" />
                            </Col>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="end-time">Sale End Time (In Your Time Zone)</label>
                                <input className="presale-input" id="end-time" type="text" />
                            </Col>
                        </Row>
                        <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="decimal">Token Decimal</label>
                                <input className="presale-input" id="decimal" type="text" />
                            </Col>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="unsold">Unsold Tokens Address</label>
                                <input className="presale-input" id="unsold" type="text" />
                            </Col>
                        </Row>
                        <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="head-start">HeadStart(in Seconds)</label>
                                <input className="presale-input" id="head-start" type="text" />
                            </Col>
                            <Col span="12">
                             
                            </Col>
                        </Row>

                    
                        </form>
                    </div>
                </div>

               
            <div className="text-center">
                <div className="little-space"></div>
                <br />

                <Link to="/form-presale/form-two">
                  <button className="btn-btn-default primary-button">NEXT</button>
                </Link>
        
            </div>
            
            </div>
       
        </div>
      )
  
}

export default FormOne;