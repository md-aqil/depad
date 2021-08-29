import { Col, Progress } from "antd";
import { differenceInDays } from "date-fns";
import ArroTop from "../../images/arro-top.png";
import Download from "../../images/download 1.png";
import Github from "../../images/github.png";
import Telegram from "../../images/telegram.png";
import Thumb from "../../images/thumb.png";
import Twitter from "../../images/twitter.png";
import Web from "../../images/website.png";
import { Link } from "react-router-dom";
export default function PoolCard({ pool, navigation, address }) {
    return (
        <Col span={8}>
            <div className="content-div-one">
                <div className="badge">
                    <div>
                        Opens in{" "}
                        {differenceInDays(
                            new Date(pool.basicIdoDetails.saleStartTime * 1000),
                            new Date()
                        )}{" "}
                        days
                    </div>
                </div>
                <div className="upcomming-div-head">
                    <div className="logo-container">
                        <div className="upcomming-logo">
                            <img
                                src={pool.projectInformation.logo || Download}
                                alt=""
                            />
                        </div>
                        <div className="name">
                            <h3>
                                {pool.projectInformation.saleTitle ||
                                    "Soku Swap"}
                            </h3>
                        </div>
                    </div>
                    <div className="in-days-progress">
                        <div
                            onClick={() => console.log(navigation)}
                            className="arro-top"
                        >
                            <Link to={`/detail/${address}`}>
                                <img src={ArroTop} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="light-para">
                    {pool.basicIdoDetails.tokenPrice} BNB PER TOKEN
                </p>
                <div className="display-flex">
                    <div className="progress-container">
                        {" "}
                        <div className="">
                            <div>
                                <Progress percent={50} />
                            </div>
                            <div className="progress-text">
                                <div>
                                    <p className="light-para">
                                        <span className="primary"> Yes </span>{" "}
                                        39087{" "}
                                    </p>
                                </div>
                                <div>
                                    <p className="light-para">
                                        <span className="danger"> No </span>{" "}
                                        39087{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="thumb-contain">
                        <img src={Thumb} alt="" />
                    </div>
                </div>
                <p className="light-para">
                    Yes - No Votes &gt; 15% of max supply
                </p>
                <div className="upcomming-info">
                    <div className="min">
                        <p className="small-para">Liquidity Allocation</p>
                        <h3 className="percent">
                            {pool.pcsListingDetails.allocationToLPInBP / 100} %
                        </h3>
                    </div>
                    <div className="access">
                        <p className="small-para">Connect</p>
                        <div className="link-pin">
                            {pool.projectInformation.github && (
                                <div className="github">
                                    <a
                                        href={
                                            "http://" +
                                            pool.projectInformation.github
                                        }
                                    >
                                        <img src={Github} alt="" />
                                    </a>
                                </div>
                            )}
                            {pool.projectInformation.telegram && (
                                <div className="telegram">
                                    <a href={pool.projectInformation.telegram}>
                                        <img src={Telegram} alt="" />
                                    </a>
                                </div>
                            )}
                            {pool.projectInformation.twitter && (
                                <div className="twitter">
                                    <a href={pool.projectInformation.twitter}>
                                        <img src={Twitter} alt="" />
                                    </a>
                                </div>
                            )}
                            {pool.projectInformation.website && (
                                <div className="web">
                                    <a href={pool.projectInformation.website}>
                                        <img src={Web} alt="" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
}
