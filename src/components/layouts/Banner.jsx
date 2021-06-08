
import React from 'react';
import { Row, Col } from 'antd';
import '../../styles/banner.css';
import  bannerBottomImg  from '../../images/banner-bottom-img.png';




function Banner(props) {
  return (
    <div className="banner">
        <div className="banner-text-container text-center">
            <h1 className="banner-heading">Decentralize <span className="primary"> Multi-Chain </span> Launchpad</h1>
        </div>

       <div className="">
           <div className="banner-para">

              
                <p className="para para-light-mode">
                    This beutiful collection of UI components is part of the recently released Purpose Design System. It is a powerful tool for Figma including 300+ ready
                </p>

                <div className="para-dark-mode">
                     <p className="para">
                    This beutiful collection of UI components is part of the recently released Purpose Design System. It is a powerful tool for Figma including 300+ ready
                    </p>
                    <p className="para">
                    This beutiful collection of UI components is part of the recently released Purpose Design System. It is a powerful tool for Figma including 300+ ready
                    </p>
                </div>
              
               
            </div>

            <div className="text-center banner-buttons">
                <div>
                    <button className="primary-btn">view pools</button>
                </div>
                <div>
                    <button className="default-btn">take part</button>
                </div>
            </div>
            
        </div>

        <img className="banner-bottom-img" src={bannerBottomImg} alt="" />
    </div>
    
  );
}
export default Banner;