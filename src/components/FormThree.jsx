import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

function FormTwo() {
      return (
        <div className="voting">
            <div>
                <div className="little-space"></div>
                <div className="stats-div">
                    <h3 className="primary-heading">whitelist</h3>
                    <div className="apply-presale-form">
                        <form action="">
                        <Row gutter={[30, 30]}>
                            <Col span="24">
                            <label className="presale-lable" htmlFor="address">addresses (one address per line)</label>
                              <textarea className="presale-input" name="" id="address" cols="30" rows="10"></textarea>
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
                           <Link to="/form-presale/form-two">
                               <button className="default-btn ">BACK</button>
                            </Link>
                       </div>
                       <div>
                           <Link to="/form-presale/form-four">
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