import { SearchOutlined } from "@ant-design/icons";
import { Col, Dropdown, Row } from "antd";
import React from "react";
import { useAsync } from "react-use";
import { useWeb3 } from "../hooks/ethereum";
import Shape from "../images/Shape.png";
import "../styles/featured.css";
import Almuni from "./layouts/Almuni";
import Loading from "./layouts/loading";
import { fetchAllPool } from "./pools/data";
import Menus from "./pools/menus";
import PoolCard from "./pools/poolCard";

// const Error = ({ error }) => {
//     if (error) {
//         return <h1>error...</h1>;
//     }
//     return null;
// };

function AllPools() {
    const { instance: web3 } = useWeb3();

    const { loading, value } = useAsync(() => fetchAllPool(web3));
    const { pools, addresses } = value || {};

    return (
        <div className="all-pools ">
            <div className="container">
                <h1 className="all-pools-heading">all pools - all</h1>
                <div className="search-area">
                    <Row>
                        <Col span={23}>
                            <form action="">
                                <input
                                    className="search"
                                    placeholder="Search by Name, Token contract address, Token description"
                                    type="text"
                                />
                                <div className="search-icon">
                                    <SearchOutlined />
                                </div>
                            </form>
                        </Col>
                        <Col span={1}>
                            <Dropdown
                                overlay={<Menus />}
                                trigger={["click"]}
                                placement="bottomLeft"
                            >
                                <button className="shape">
                                    <img src={Shape} alt="" />
                                </button>
                            </Dropdown>
                        </Col>
                    </Row>
                </div>
                <div className="little-space"></div>
                <div className="little-space"></div>
                {loading ? (
                    <Loading state={loading} />
                ) : (
                    <Row gutter={20} className="feature-content-div">
                        {pools.map((pool, index) => (
                            <PoolCard
                                key={index}
                                pool={pool}
                                address={addresses[index]}
                            />
                        ))}
                    </Row>
                )}
            </div>
            <Almuni />
        </div>
    );
}

export default AllPools;
