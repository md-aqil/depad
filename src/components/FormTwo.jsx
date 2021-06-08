import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'


function FormTwo() {

      return (
        <div className="voting">
          
            <div>
                
                <div className="little-space"></div>
                <div className="stats-div">
                    <h3 className="primary-heading">pancakeSwap listing and liquidity lock</h3>
                    <div className="apply-presale-form">
                        <form action="">
                        <Row gutter={[30, 30]}>
                            <Col span="12">
                                <label className="presale-lable" htmlFor="listing-rate">Listing Rate (BNB Per Token)</label>
                                <input className="presale-input" id="listing-rate" type="text" />
                            </Col>
                            <Col span="12">
                                <label className="presale-lable" htmlFor="allocated">percentage allocated to lp</label>
                                <input className="presale-input" id="allocated" type="text" />
                            </Col>
                        </Row>
                        <Row gutter={[30, 30]}>
                            <Col span="12">
                                <label className="presale-lable" htmlFor="listing-time">liquidity listing time</label>
                                <input className="presale-input" id="listing-time" type="text" />
                            </Col>
                            <Col span="12">
                                <label className="presale-lable" htmlFor="hardcap">liquidity lock duration (days)</label>
                                <input className="presale-input" id="hardcap" type="text" />
                            </Col>
                        </Row>

                      
                   

                    
                        </form>
                    </div>
                </div>

                <div className="text-center">
                    
                    <div className="little-space"></div>
                       <br />
                   <div className="presale-form-buttons">
                       <div>
                           <Link to="/form-presale/">
                               <button className="default-btn ">BACK</button>
                            </Link>
                       </div>
                       <div>
                           <Link to="/form-presale/form-three">
                               <button className="btn-btn-default primary-button">NEXT</button>
                            </Link>
                       </div>
                     
                   </div>
                </div>
            
            </div>
       
        </div>
      )
  
}

export default FormTwo;