import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'




function FormOne(props) {
    const {tokenContract,setTokenContract ,tokenPrize ,setTokenPrize ,softCap ,setSoftCap ,hardCap,
    setHardCap ,minBNB ,setMinBNB ,allocationFactor ,setAllocationFactor ,saleStartTime ,setSaleStartTime ,
    saleEndTime ,setSaleEndTime ,tokenDecimal ,setTokenDecimal ,unsoldTokenAddress ,setUnsoldTokenAddress ,
    headStart ,setHeadStart}=props
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
                                    <input className="presale-input" id="token-contract" value={tokenContract} onChange={(e)=>setTokenContract(e.target.value)} type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="token-price">Token Price</label>
                                    <input className="presale-input"value = {tokenPrize} onChange = {(e)=>setTokenPrize(e.target.value)} id="token-price" type="text" />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="softcap">SoftCap (BNB)</label>
                                    <input className="presale-input"value = {softCap} onChange = {(e)=>setSoftCap(e.target.value)} id="softcap" type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="hardcap">HardCap (BNB)</label>
                                    <input className="presale-input" id="hardcap" type="text" value={hardCap} onChange={(e)=>setHardCap(e.target.value)} />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="per-wallet">Min BNB Per Wallet</label>
                                    <input className="presale-input" id="per-wallet" value = {minBNB} onChange = {(e)=>setMinBNB(e.target.value)} type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="factor">BNB Allocation Factor</label>
                                    <input className="presale-input" id="factor" value={allocationFactor} onChange={(e)=>setAllocationFactor(e.target.value)} type="text" />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="start-time">Sale Start Time (In Your Timeone)</label>
                                    <input className="presale-input" id="start-time" value={saleStartTime} onChange={(e)=>setSaleStartTime(e.target.value)} type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="end-time">Sale End Time (In Your Time Zone)</label>
                                    <input className="presale-input" id="end-time" value={saleEndTime} onChange={(e)=>setSaleEndTime(e.target.value)} type="text" />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="decimal">Token Decimal</label>
                                    <input className="presale-input" id="decimal" value={tokenDecimal} onChange={(e)=>setTokenDecimal(e.target.value)} type="text" />
                                </Col>
                                <Col xs={24} md={12} span="12">
                                    <label className="presale-lable" htmlFor="unsold">Unsold Tokens Address</label>
                                    <input className="presale-input" id="unsold" type="text" value={unsoldTokenAddress} onChange={(e)=>setUnsoldTokenAddress(e.target.value)} />
                                </Col>
                            </Row>
                            <Row gutter={[30, 30]}>
                            <Col xs={24} md={12} span="12">
                                <label className="presale-lable" htmlFor="head-start">HeadStart(in Seconds)</label>
                                <input className="presale-input" id="head-start" type="text" value={headStart} onChange={(e)=>setHeadStart(e.target.value)} />
                            </Col>
                            <Col span="12"></Col>
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