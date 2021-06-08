import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal  width={1000} title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="wallet-balance text-center">
            <h1 className="third-heading">your wallet</h1>
            <p className="big-para">BNB Balance</p>
            <p className="stats-heading-primary">0.0781</p>
            <p className="big-para">
                You have earned ) BNB. Click now ‘Claim Rewards’ to  add
                the amount to your balance
            </p>
            <button className="btn-btn-default primary-button">
                claim Reward
            </button>

       
           
        </div>
       <div className="hr">

       </div>
        <div className="balance-form">
            <div>
                <p className="big-para">START balance</p>
                <p className="stats-heading-primary">0.000 START</p>
                <form action="">
                    <input className="modal-wallet-input" type="text" />
                    <div className="lable-wallet">
                        max
                    </div>
                    <button type="submit" className="btn-btn-default primary-button">
                        Stake
                    </button>
                </form>
            </div>
            
            <div>
                <p className="big-para">staked START balance</p>
                <p className="stats-heading-primary">0.000 START</p>
                <form action="">
                    <input className="modal-wallet-input" type="text" />
                    <div className="lable-wallet">
                        max
                    </div>
                    <button type="submit" className="btn-btn-default primary-button">
                        unstake
                    </button>
                </form>
            </div>
        
        </div>
      </Modal>
    </>
  );
};

export default App