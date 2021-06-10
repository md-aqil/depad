import { Row, Col } from 'antd';
import { SearchOutlined } from  '@ant-design/icons';
import Shape from "../images/Shape.png";
import logo from '../images/upcomming-logo.png'
import Frame from '../images/Frame.png'
import { Progress } from 'antd';
import "../styles/featured.css";
import ArroTop from '../images/arro-top.png';
import Link from '../images/link.png';
import Download from '../images/download 1.png';
import Thumb from '../images/thumb.png';
import PaginateRight from "../images/paginate-right.png";
import PaginateLeft from "../images/paginate-left.png";
import Almuni from "./layouts/Almuni"

import React, { useState } from 'react';
import { Menu, Dropdown, Button, Space  } from 'antd';


function AllPools() {


    const menu = (
        <Menu>
          <Menu.Item>
            All
          </Menu.Item>
          <Menu.Item>
             Started
          </Menu.Item>
          <Menu.Item>
              Ended
          </Menu.Item>
          <Menu.Item>
              Certified
          </Menu.Item>
          <Menu.Item>
            Voting
          </Menu.Item>
          <Menu.Item>
              Filled
          </Menu.Item>
          <Menu.Item>
              Not filled
          </Menu.Item>
          <Menu.Item>
              Cancelled
          </Menu.Item>
        </Menu>
      );

    const [visible, setVisible] = useState(false);


    

      return (

        
          
        <div className="all-pools spacer-bottom">
     
    
   
       
            <div className="container">
                <h1 className="all-pools-heading">
                    all pools - all
                </h1>
                  
                    <div className="search-area">
                        <Row>
                            <Col   span={23}>
                                <form action="">
                                    <input className="search" placeholder="Search by Name, Token contract address, Token description" type="text" />
                                    <div className="search-icon">
                                    <SearchOutlined />
                                    </div>
                                </form>
                            </Col>
                            <Col span={1}>
                                <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                                    <button className="shape" ><img src={Shape} alt="" /></button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>

                    {/* all-pools pagination div */}
                    <div className="little-space"></div>
                    <div className="little-space"></div>

                    <div className="feature-content-div">
                        <div className="content-div-one">
                        <div className="badge">
                            <div>Opens in 11 days</div>
                        </div>
                            <div className="upcomming-div-head">

                                <div className="logo-container">
                                    <div className="upcomming-logo">
                                        <img src={Download} alt="" />
                                    </div>
                                    <div className="name">
                                        <h3>Soku Swap IDO ( SOKU )</h3>
                                    </div>
                                </div>

                                <div className="in-days-progress">
                                    <div className="arro-top"><img src={ArroTop} alt="" /></div>
                                    
                                </div>

                            </div>

                            <p className="light-para">
                                    0.00000220.000226 BNB PER  TOKEN6
                            </p>

                        <div className="display-flex">
                            <div className="progress-container">  <div className="">
                                    <div> <Progress percent={50} /></div>
                                <div className="progress-text">
                                    <div>
                                        <p className="light-para"><span className="primary"> Yes </span> 39087 </p>
                                    </div>
                                    <div>
                                        <p className="light-para"><span className="danger"> No </span> 39087 </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                            <div className="thumb-contain">
                                <img src={Thumb} alt="" />
                            </div>
                        </div>
                            <p className="light-para">
                                Yes - No Votes > 15% of max supply
                            </p>


                            <div className="upcomming-info">
                                <div className="min">
                                    <p className="small-para">Liquidity Allocation</p>
                                    <h3 className="percent">%</h3>
                                </div>

                            
                                <div className="access">
                                    <p className="small-para">Connect</p>
                                    <div className="display-flex link-pin">
                                        <div><img src={Link} alt="" /></div>
                                        <div><img src={Link} alt="" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    
                
                        <div className="content-div-one">
                        <div className="badge">
                            <div>Opens in 11 days</div>
                        </div>
                            <div className="upcomming-div-head">

                                <div className="logo-container">
                                    <div className="upcomming-logo">
                                        <img src={Download} alt="" />
                                    </div>
                                    <div className="name">
                                        <h3>Soku Swap IDO ( SOKU )</h3>
                                    </div>
                                </div>

                                <div className="in-days-progress">
                                    <div className="arro-top"><img src={ArroTop} alt="" /></div>
                                    
                                </div>

                            </div>

                            <p className="light-para">
                                    0.00000220.000226 BNB PER  TOKEN6
                            </p>

                        <div className="display-flex">
                            <div className="progress-container">  <div className="">
                                    <div> <Progress percent={50} /></div>
                                <div className="progress-text">
                                    <div>
                                        <p className="light-para"><span className="primary"> Yes </span> 39087 </p>
                                    </div>
                                    <div>
                                        <p className="light-para"><span className="danger"> No </span> 39087 </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                            <div className="thumb-contain">
                                <img src={Thumb} alt="" />
                            </div>
                        </div>
                            <p className="light-para">
                                Yes - No Votes > 15% of max supply
                            </p>


                            <div className="upcomming-info">
                                <div className="min">
                                    <p className="small-para">Liquidity Allocation</p>
                                    <h3 className="percent">%</h3>
                                </div>

                            
                                <div className="access">
                                    <p className="small-para">Connect</p>
                                    <div className="display-flex link-pin">
                                        <div><img src={Link} alt="" /></div>
                                        <div><img src={Link} alt="" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    
                        <div className="content-div-one">
                        <div className="badge">
                            <div>Opens in 11 days</div>
                        </div>
                            <div className="upcomming-div-head">

                                <div className="logo-container">
                                    <div className="upcomming-logo">
                                        <img src={Download} alt="" />
                                    </div>
                                    <div className="name">
                                        <h3>Soku Swap IDO ( SOKU )</h3>
                                    </div>
                                </div>

                                <div className="in-days-progress">
                                    <div className="arro-top"><img src={ArroTop} alt="" /></div>
                                    
                                </div>

                            </div>

                            <p className="light-para">
                                    0.00000220.000226 BNB PER  TOKEN6
                            </p>

                        <div className="display-flex">
                            <div className="progress-container">  <div className="">
                                    <div> <Progress percent={50} /></div>
                                <div className="progress-text">
                                    <div>
                                        <p className="light-para"><span className="primary"> Yes </span> 39087 </p>
                                    </div>
                                    <div>
                                        <p className="light-para"><span className="danger"> No </span> 39087 </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                            <div className="thumb-contain">
                                <img src={Thumb} alt="" />
                            </div>
                        </div>
                            <p className="light-para">
                                Yes - No Votes > 15% of max supply
                            </p>


                            <div className="upcomming-info">
                                <div className="min">
                                    <p className="small-para">Liquidity Allocation</p>
                                    <h3 className="percent">%</h3>
                                </div>

                            
                                <div className="access">
                                    <p className="small-para">Connect</p>
                                    <div className="display-flex link-pin">
                                        <div><img src={Link} alt="" /></div>
                                        <div><img src={Link} alt="" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    

                        <div className="content-div-one">
                        <div className="badge">
                            <div>Opens in 11 days</div>
                        </div>
                            <div className="upcomming-div-head">

                                <div className="logo-container">
                                    <div className="upcomming-logo">
                                        <img src={Download} alt="" />
                                    </div>
                                    <div className="name">
                                        <h3>Soku Swap IDO ( SOKU )</h3>
                                    </div>
                                </div>

                                <div className="in-days-progress">
                                    <div className="arro-top"><img src={ArroTop} alt="" /></div>
                                    
                                </div>

                            </div>

                            <p className="light-para">
                                    0.00000220.000226 BNB PER  TOKEN6
                            </p>

                        <div className="display-flex">
                            <div className="progress-container">  <div className="">
                                    <div> <Progress percent={50} /></div>
                                <div className="progress-text">
                                    <div>
                                        <p className="light-para"><span className="primary"> Yes </span> 39087 </p>
                                    </div>
                                    <div>
                                        <p className="light-para"><span className="danger"> No </span> 39087 </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                            <div className="thumb-contain">
                                <img src={Thumb} alt="" />
                            </div>
                        </div>
                            <p className="light-para">
                                Yes - No Votes > 15% of max supply
                            </p>


                            <div className="upcomming-info">
                                <div className="min">
                                    <p className="small-para">Liquidity Allocation</p>
                                    <h3 className="percent">%</h3>
                                </div>

                            
                                <div className="access">
                                    <p className="small-para">Connect</p>
                                    <div className="display-flex link-pin">
                                        <div><img src={Link} alt="" /></div>
                                        <div><img src={Link} alt="" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    

                        <div className="content-div-one">
                        <div className="badge">
                            <div>Opens in 11 days</div>
                        </div>
                            <div className="upcomming-div-head">

                                <div className="logo-container">
                                    <div className="upcomming-logo">
                                        <img src={Download} alt="" />
                                    </div>
                                    <div className="name">
                                        <h3>Soku Swap IDO ( SOKU )</h3>
                                    </div>
                                </div>

                                <div className="in-days-progress">
                                    <div className="arro-top"><img src={ArroTop} alt="" /></div>
                                    
                                </div>

                            </div>

                            <p className="light-para">
                                    0.00000220.000226 BNB PER  TOKEN6
                            </p>

                        <div className="display-flex">
                            <div className="progress-container">  <div className="">
                                    <div> <Progress percent={50} /></div>
                                <div className="progress-text">
                                    <div>
                                        <p className="light-para"><span className="primary"> Yes </span> 39087 </p>
                                    </div>
                                    <div>
                                        <p className="light-para"><span className="danger"> No </span> 39087 </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                            <div className="thumb-contain">
                                <img src={Thumb} alt="" />
                            </div>
                        </div>
                            <p className="light-para">
                                Yes - No Votes > 15% of max supply
                            </p>


                            <div className="upcomming-info">
                                <div className="min">
                                    <p className="small-para">Liquidity Allocation</p>
                                    <h3 className="percent">%</h3>
                                </div>

                            
                                <div className="access">
                                    <p className="small-para">Connect</p>
                                    <div className="display-flex link-pin">
                                        <div><img src={Link} alt="" /></div>
                                        <div><img src={Link} alt="" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    

                        <div className="content-div-one">
                        <div className="badge">
                            <div>Opens in 11 days</div>
                        </div>
                            <div className="upcomming-div-head">

                                <div className="logo-container">
                                    <div className="upcomming-logo">
                                        <img src={Download} alt="" />
                                    </div>
                                    <div className="name">
                                        <h3>Soku Swap IDO ( SOKU )</h3>
                                    </div>
                                </div>

                                <div className="in-days-progress">
                                    <div className="arro-top"><img src={ArroTop} alt="" /></div>
                                    
                                </div>

                            </div>

                            <p className="light-para">
                                    0.00000220.000226 BNB PER  TOKEN6
                            </p>

                        <div className="display-flex">
                            <div className="progress-container">  <div className="">
                                    <div> <Progress percent={50} /></div>
                                <div className="progress-text">
                                    <div>
                                        <p className="light-para"><span className="primary"> Yes </span> 39087 </p>
                                    </div>
                                    <div>
                                        <p className="light-para"><span className="danger"> No </span> 39087 </p>
                                    </div>
                                </div>
                            </div>
                    </div>
                            <div className="thumb-contain">
                                <img src={Thumb} alt="" />
                            </div>
                        </div>
                            <p className="light-para">
                                Yes - No Votes > 15% of max supply
                            </p>


                            <div className="upcomming-info">
                                <div className="min">
                                    <p className="small-para">Liquidity Allocation</p>
                                    <h3 className="percent">%</h3>
                                </div>

                            
                                <div className="access">
                                    <p className="small-para">Connect</p>
                                    <div className="display-flex link-pin">
                                        <div><img src={Link} alt="" /></div>
                                        <div><img src={Link} alt="" /></div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    

                    </div>

                    {/* end all pools pagination div */}

                    {/* pagination-tab */}

                    <div className="pagination text-center">
                        <div className='paginate-right'>
                            <img src={PaginateRight} alt="" />
                        </div>
                        <div className='pagination-number'>
                            <div>1</div>
                            <div className="paginate-active">2</div>
                            <div>3</div>
                        </div>
                        <div className="paginate-left">
                            <img src={PaginateLeft} alt="" />
                        </div>

                    </div>

                    {/* end pagination tab */}
             
            </div>
            <Almuni></Almuni>
        </div>
        
      )
  
}

export default AllPools;