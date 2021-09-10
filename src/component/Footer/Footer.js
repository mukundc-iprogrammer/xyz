import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="d-flex footer">
      <div className="logo">ATPM</div>
      <div className="p-4 w-100">
        <div>Contact Us</div>
        <div className="d-flex justify-content-between align-items-center">
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
      </div>
    </div>
  );
};

export default Footer;
