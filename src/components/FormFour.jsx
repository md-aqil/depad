import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'

function FormTwo(props) {
    const {handleSubmit,saleTitle, setSaleTitle,shortDescription,setShortDescription, website,setWebsite, telegram,setTelegram, github,setGithub, twitter,setTwitter, logo,setLogo, whitePaper,setWhitePaper, kyc,setKyc} = props
      return (
        <div className="voting">
            <div>
                <div className="little-space"></div>
                <div className="stats-div">
                    <h3 className="primary-heading">product information</h3>
                    <div className="apply-presale-form">
                        <form action="">
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="sale-title">sale title</label>
                                    <input className="presale-input"onChange={(e)=>setSaleTitle(e.target.value)} value={saleTitle} id="sale-title" type="text" />
                                </Col>
                                <Col  xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="short-desc">short description</label>
                                    <input className="presale-input"value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} id="short-desc" type="text" />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12}  span="12">
                                    <label className="presale-lable" htmlFor="website">website</label>
                                    <input className="presale-input" value={website} onChange={(e)=>setWebsite(e.target.value)} id="website" type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="telegram">telegram (username only)</label>
                                    <input className="presale-input"value={telegram} onChange={(e)=>setTelegram(e.target.value)} id="telegrame" type="text" />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="github">github (username only)</label>
                                    <input className="presale-input"value={github} onChange={(e)=>setGithub(e.target.value)} id="github" type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="twitter">twitter (username only)</label>
                                    <input className="presale-input" id="twitter" type="text" value={twitter} onChange={(e)=>setTwitter(e.target.value)} />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="logo">logo</label>
                                    <input className="presale-input" id="logo" type="text" value={logo}onChange={(e)=>setLogo(e.target.value)} />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="kyc">kyc information</label>
                                    <input className="presale-input" value={kyc}onChange={(e)=>setKyc(e.target.value)} id="kyc" type="text" />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="whitepaper">whitepaper</label>
                                <input className="presale-input" value = {whitePaper} onChange={(e)=>setWhitePaper(e.target.value)} id="whitepaper" type="text" />
                            </Col>
                            {/* <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="category">category </label>
                                <input className="presale-input" value={category} onChange={(e)=>setCategory(e.target.value)} />id="category" type="text" />
                            </Col> */}
                        </Row>
                        </form>
                    </div>
                </div>

                <div className="text-center">
                    <div className="little-space"></div>
                       <br />
                   <div className="presale-form-buttons">
                       <div>
                           <Link to="/form-presale/form-three">
                               <button className="default-btn ">BACK</button>
                            </Link>
                       </div>
                       <div>
                            <button onClick = {handleSubmit} className="btn-btn-default primary-button">FINISH</button>
                       </div>
                     
                   </div>
                </div>
            
            </div>
       
        </div>
      )
  
}

export default FormTwo;