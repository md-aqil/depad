
import React from 'react';
import { Row, Col } from 'antd';
import logo from '../../images/w.png'
import Frame from '../../images/Frame.png'
import { Progress } from 'antd';
import "../../styles/almuni.css"
import Slider from "react-slick";




function Almuni() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div>
            
        <div className="almuni-pools padding-top">
            <div className="container ">
         
                    <h2  className="second-heading">upcomming pools</h2>
                    <div className="little-space"> </div>
                    <div className="little-space"> </div>
                <Slider {...settings}>
                
                    <Pool name="Hello Pool 1" day={1} logo={logo} price={100} />
                    <Pool name="Hello Pool 2" day={2} logo={logo} price={100} />
                    <Pool name="Hello Pool 3" day={3} logo={logo} price={100} />
                    <Pool name="Hello Pool 4" logo={logo} price={100} />
                        
                </Slider>
                   


         


                </div>


            </div>

    </div>
    
  );
}



function Pool({name, logo, day, price}) {

   
    return (
        <div style={{padding: "0.5rem"}}> 
        <div className="content-div-one">

        <div className="almuni-progress">
            <div className="upcomming-logo">
                <img src={logo} alt="" />
            </div>
            <div className="name">
                <h3>wilder world 1</h3>
                <p>total raise</p>
                <div className="eth">
                    37 ETH
                </div>
            </div>
            <div className="participate">
                <p>participants</p>
                <div className="eth">
                    479
                </div>
            </div>

            <div className="participate">
                <p>Max ETH</p>
                <div className="eth">
                    0.0781
                </div>
            </div>

            <div className="participate">
                <p>acecc</p>
                <div className="eth">
                   private
                </div>
            </div>

        </div>

    </div>

    </div>

    )
}
export default Almuni;