import React from "react";
import { isMobileOnly } from "react-device-detect";
import "./styles.css";

const Footer = () => {
  return (
    <div className="d-flex footer">
      <div className="logo">ATPM</div>
      <div className="p-4 w-100">
        <div>Contact Us</div>
        <div className={isMobileOnly ? "" : "d-flex justify-content-between align-items-center"}>
          <div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-map-marker" aria-hidden="true"></i>
              <span className="middle">Raipur</span>
            </div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-phone" aria-hidden="true"></i>
              <span className="middle">+91 7000169301</span>
            </div>
          </div>
          <div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-map-marker" aria-hidden="true"></i>
              <span className="middle">Bhilai</span>
            </div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-phone" aria-hidden="true"></i>
              <span className="middle">+91 7000169301</span>
            </div>
          </div>
          <div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-map-marker" aria-hidden="true"></i>
              <span className="middle">Bilaspur</span>
            </div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-phone" aria-hidden="true"></i>
              <span className="middle">+91 7000169301</span>
            </div>
          </div>
          <div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-map-marker" aria-hidden="true"></i>
              <span className="middle">Rajnandgaon</span>
            </div>
            <div className="my-2">
              <i style={{fontSize: '22px'}} class="fa fa-phone" aria-hidden="true"></i>
              <span className="middle">+91 7000169301</span>
            </div>
          </div>
        </div>
        <div style={{textAlign: 'end', marginTop: '20px'}}>
            {/* <div style={{ textAlign: "left", display: 'inline-block' }}>Follow Us</div> */}
            <div className="d-inline-block">
                <i className="facebook m-2"></i>
                <i className="instagram m-2"></i>
                <i className="twitter m-2"></i>
                <i className="linkedin m-2"></i>
                <i className="youtube m-2"></i>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
