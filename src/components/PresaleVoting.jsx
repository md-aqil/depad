import React from 'react';
import { Row, Col } from 'antd';
import { SearchOutlined } from  '@ant-design/icons';
import Shape from "../images/Shape.png";
import Download from '../images/download 1.png';
import Thumb from '../images/thumb.png';
import { Header, Table, Rating } from 'semantic-ui-react';
import greenThumb from "../images/thum-green.png";
import redThumb from "../images/thumb-red.png";
import  Almuni from "./layouts/Almuni"



function AllPools() {

      return (
        <div className="voting all-pools ">
          
            <div className="container">
            <div className="little-space"></div>
            <div className="little-space"></div>
                <h1 className="all-pools-heading">
                presale voting
                </h1>
                  
                    <div className="search-area">
                        <form action="">
                            <input className="search" placeholder="Search by Name, Token contract address, Token description" type="text" />
                            <div className="search-icon">
                            <SearchOutlined />
                            </div>
                        </form>
                    </div>


                    {/* table of voting */}


            <div className="table-area">
            <Table celled padded>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >Name</Table.HeaderCell>
                        <Table.HeaderCell>Price(BNB)</Table.HeaderCell>
                        <Table.HeaderCell>Softcap</Table.HeaderCell>
                        <Table.HeaderCell>Hardcap</Table.HeaderCell>
                        <Table.HeaderCell>Opens in</Table.HeaderCell>
                        <Table.HeaderCell>Voting</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <div  className="table-name">
                                <img src={Download} alt="" />
                                <div>
                                    Soku Swap IDO (SOKU)
                                </div>
                            </div>
                    
                        </Table.Cell>

                        <Table.Cell >
                            <div className="price-table">
                            <p>0.0006</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            <div className="softcap">
                            <p className="table-para">50 BNB</p> 
                            </div>
                        </Table.Cell>

                        <Table.Cell >
                            <div className="hard-cap">
                                <p className="table-para">200 BNB</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="opens-in">
                            <p className="table-para">22:07:28</p>
                        </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="voting-table">
                            <div>
                                <div className="green-thumb"> 
                                <p className="sucess">0.00% <img src={greenThumb} alt="" /> </p>
                                </div>
                                <div>
                                    <p  className="danger">0.00% <img src={redThumb} alt="" /> </p>
                                </div>
                            </div>
                        </div>
                        </Table.Cell>

                    </Table.Row>
                

                    <Table.Row>
                        <Table.Cell>
                            <div  className="table-name">
                                <img src={Download} alt="" />
                                <div>
                                    Soku Swap IDO (SOKU)
                                </div>
                            </div>
                    
                        </Table.Cell>

                        <Table.Cell >
                            <div className="price-table">
                            <p>0.0006</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            <div className="softcap">
                            <p className="table-para">50 BNB</p> 
                            </div>
                        </Table.Cell>

                        <Table.Cell >
                            <div className="hard-cap">
                                <p className="table-para">200 BNB</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="opens-in">
                            <p className="table-para">22:07:28</p>
                        </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="voting-table">
                            <div>
                                <div className="green-thumb"> 
                                <p className="sucess">0.00% <img src={greenThumb} alt="" /> </p>
                                </div>
                                <div>
                                    <p  className="danger">0.00% <img src={redThumb} alt="" /> </p>
                                </div>
                            </div>
                        </div>
                        </Table.Cell>

                    </Table.Row>
                

                    <Table.Row>
                        <Table.Cell>
                            <div  className="table-name">
                                <img src={Download} alt="" />
                                <div>
                                    Soku Swap IDO (SOKU)
                                </div>
                            </div>
                    
                        </Table.Cell>

                        <Table.Cell >
                            <div className="price-table">
                            <p>0.0006</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            <div className="softcap">
                            <p className="table-para">50 BNB</p> 
                            </div>
                        </Table.Cell>

                        <Table.Cell >
                            <div className="hard-cap">
                                <p className="table-para">200 BNB</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="opens-in">
                            <p className="table-para">22:07:28</p>
                        </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="voting-table">
                            <div>
                                <div className="green-thumb"> 
                                <p className="sucess">0.00% <img src={greenThumb} alt="" /> </p>
                                </div>
                                <div>
                                    <p  className="danger">0.00% <img src={redThumb} alt="" /> </p>
                                </div>
                            </div>
                        </div>
                        </Table.Cell>

                    </Table.Row>
                

                    <Table.Row>
                        <Table.Cell>
                            <div  className="table-name">
                                <img src={Download} alt="" />
                                <div>
                                    Soku Swap IDO (SOKU)
                                </div>
                            </div>
                    
                        </Table.Cell>

                        <Table.Cell >
                            <div className="price-table">
                            <p>0.0006</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            <div className="softcap">
                            <p className="table-para">50 BNB</p> 
                            </div>
                        </Table.Cell>

                        <Table.Cell >
                            <div className="hard-cap">
                                <p className="table-para">200 BNB</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="opens-in">
                            <p className="table-para">22:07:28</p>
                        </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="voting-table">
                            <div>
                                <div className="green-thumb"> 
                                <p className="sucess">0.00% <img src={greenThumb} alt="" /> </p>
                                </div>
                                <div>
                                    <p  className="danger">0.00% <img src={redThumb} alt="" /> </p>
                                </div>
                            </div>
                        </div>
                        </Table.Cell>

                        

                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            <div  className="table-name">
                                <img src={Download} alt="" />
                                <div>
                                    Soku Swap IDO (SOKU)
                                </div>
                            </div>
                    
                        </Table.Cell>

                        <Table.Cell >
                            <div className="price-table">
                            <p>0.0006</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                            <div className="softcap">
                            <p className="table-para">50 BNB</p> 
                            </div>
                        </Table.Cell>

                        <Table.Cell >
                            <div className="hard-cap">
                                <p className="table-para">200 BNB</p>
                            </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="opens-in">
                            <p className="table-para">22:07:28</p>
                        </div>
                        </Table.Cell>

                        <Table.Cell>
                        <div className="voting-table">
                            <div>
                                <div className="green-thumb"> 
                                <p className="sucess">0.00% <img src={greenThumb} alt="" /> </p>
                                </div>
                                <div>
                                    <p  className="danger">0.00% <img src={redThumb} alt="" /> </p>
                                </div>
                            </div>
                        </div>
                        </Table.Cell>

                    </Table.Row>
                
                

                    </Table.Body>
                </Table>

            </div>




     {/* end table of voting */}

                  
            </div>

            <Almuni></Almuni>
       
        </div>
      )
  
}

export default AllPools;