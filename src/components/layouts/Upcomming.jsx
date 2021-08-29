import React from "react";
// import { Row, Col } from 'antd';
// import arroLeft from '../../images/arro-left.png';
// import arroRight from '../../images/arro-right.png'
import logo from "../../images/upcomming-logo.png";
import "../../styles/upcomming.css";
import Slider from "react-slick";

function Upcomming() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="upcomming-bg">
            <div className="upcomming-pool">
                <div className="upper-space"></div>

                <div className="upcomming-content">
                    <div className="left-right-arro container">
                        <div>
                            <h2 className="second-heading">upcomming pools</h2>
                            <Slider {...settings} variableWidth>
                                <Pool
                                    name="Hello Pool 1"
                                    day={1}
                                    logo={logo}
                                    price={100}
                                />
                                <Pool
                                    name="Hello Pool 2"
                                    day={2}
                                    logo={logo}
                                    price={100}
                                />
                                <Pool
                                    name="Hello Pool 3"
                                    day={3}
                                    logo={logo}
                                    price={100}
                                />
                                <Pool
                                    name="Hello Pool 4"
                                    day={3}
                                    logo={logo}
                                    price={100}
                                />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Pool({ name, logo, day, price }) {
    return (
        <div style={{ padding: "1rem" }}>
            <div className="content-div-one">
                <div className="upcomming-div-head">
                    <div className="logo-container">
                        <div className="upcomming-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="name">
                            <h3>{name}</h3>
                        </div>
                    </div>

                    <div className="in-days">
                        <div>
                            <li>in {day} days</li>
                        </div>
                    </div>
                </div>

                <div className="total-raise">
                    <p>total raise</p>
                    <h1>${price}k</h1>
                </div>

                <div className="upcomming-info">
                    <div className="min">
                        <p className="small-para">min allocation</p>
                        <h1>0</h1>
                    </div>

                    <div className="max">
                        <p className="small-para">max allocation</p>
                        <h1>tba</h1>
                    </div>

                    <div className="access">
                        <p className="small-para">access</p>
                        <h1>pols</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Upcomming;
