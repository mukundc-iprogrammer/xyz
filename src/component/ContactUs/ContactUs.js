import React from "react";
import { isMobileOnly } from "react-device-detect";
import { Card } from "reactstrap";
import "./styles.css";

const ContactUs = () => {
  return (
    <div>
      <Card className="p-5 mb-3">
        <div className={!isMobileOnly ? "d-flex justify-content-between mb-4" : ""}>
          <div>
            <h5 style={{ textAlign: "left" }}>Taran Maheshwari</h5>
            <div style={{ textAlign: "left" }}>
              <i
                style={{ fontSize: "22px" }}
                class="fa fa-phone"
                aria-hidden="true"
              ></i>
              <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
                +917000169301
              </span>
            </div>
            <div style={{ textAlign: "left" }}>
              <i
                style={{ fontSize: "22px" }}
                class="fa fa-envelope-o"
                aria-hidden="true"
              ></i>
              <span
                style={{ verticalAlign: "text-bottom", marginLeft: "10px" }}
              >
                xyz@gmail.com
              </span>
            </div>
          </div>
          <div>
            <h5 style={{ textAlign: "left" }}>Follow Us</h5>
            <div className="d-flex">
                <i className="facebook m-2"></i>
                <i className="instagram m-2"></i>
                <i className="twitter m-2"></i>
                <i className="linkedin m-2"></i>
                <i className="youtube m-2"></i>
            </div>
          </div>
        </div>
        <div className={!isMobileOnly ? "d-flex justify-content-between mb-3" : ""}>
          <div style={{ maxWidth: "350px" }} className={isMobileOnly ? "" : "borderRight"}>
            <h3 className="mb-4" style={{ textAlign: "left" }}>Head Office</h3>
            <h5 className="mb-3" style={{ textAlign: "left" }}>
              Bhilai
            </h5>
            <div
              className=""
              style={{ textAlign: "left", display: "flex" }}
            >
              <span>
                <i
                  style={{ fontSize: "22px" }}
                  class="fa fa-map-marker"
                  aria-hidden="true"
                ></i>
              </span>
              <span
                style={{
                  verticalAlign: "super",
                  marginLeft: "10px",
                  wordWrap: "break-word",
                }}
              >
                Gf 115 khichariya comolex nehru nagar square, Bhilai,
                Chhattisgarh 490001
              </span>
            </div>
            <div style={{ textAlign: "left", cursor: "pointer" }}>
              <i
                style={{ fontSize: "22px" }}
                class="fa fa-globe"
                aria-hidden="true"
              ></i>
              <span
                onClick={() =>
                  window.open(
                    "https://www.google.com/search?q=atpm%20bhilai&oq=atpm&aqs=chrome.1.69i59l2j69i57j0i10i512l2j0i512j0i10i512j0i512j0i10i512l2.2930j0j7&sourceid=chrome&ie=UTF-8&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&tbm=lcl&sxsrf=AOaemvIrZDyrcwZ-W67kpO3uUybHdEYnSA:1631336891857&rflfq=1&num=10&rldimm=9606451252048518533&lqi=CgthdHBtIGJoaWxhaUjfha_4ia-AgAhaExAAGAAYASILYXRwbSBiaGlsYWmSARljdXJyZW5jeV9leGNoYW5nZV9zZXJ2aWNlqgEMEAEqCCIEYXRwbSgA&ved=2ahUKEwi2scq_k_byAhXr-nMBHXYJDVwQvS56BAgJECo&rlst=f#rlfi=hd:;si:9606451252048518533,l,CgthdHBtIGJoaWxhaUjfha_4ia-AgAhaExAAGAAYASILYXRwbSBiaGlsYWmSARljdXJyZW5jeV9leGNoYW5nZV9zZXJ2aWNlqgEMEAEqCCIEYXRwbSgA;mv:[[21.2376187,81.4584078],[21.1783242,81.3003566]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                  )
                }
                style={{
                  color: "blue",
                  verticalAlign: "text-bottom",
                  marginLeft: "10px",
                }}
              >
                Google Map
              </span>
            </div>
            <div style={{ textAlign: "left" }}>
              <i
                style={{ fontSize: "22px" }}
                class="fa fa-phone"
                aria-hidden="true"
              ></i>
              <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
                +917000169301
              </span>
            </div>
          </div>
          <div className="row ms-3" style={{ maxWidth: "700px" }}>
            <h3 className="mb-4" style={{ textAlign: "left" }}>Our Branches</h3>
            <div className="col-12 col-md-6 col-lg-6 mb-4">
              <div style={{ maxWidth: "300px" }}>
                <h5 className="mb-3" style={{ textAlign: "left" }}>
                  Raipur
                </h5>
                <div
                  className=""
                  style={{ textAlign: "left", display: "flex" }}
                >
                  <span>
                    <i
                      style={{ fontSize: "22px" }}
                      class="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    style={{
                      verticalAlign: "super",
                      marginLeft: "10px",
                      wordWrap: "break-word",
                    }}
                  >
                    19C - SECOND FLOOR SHYAM PLAZA, Pandri, Raipur, Chhattisgarh
                    492004
                  </span>
                </div>
                <div style={{ textAlign: "left", cursor: "pointer" }}>
                  <i
                    style={{ fontSize: "22px" }}
                    class="fa fa-globe"
                    aria-hidden="true"
                  ></i>
                  <span
                    onClick={() =>
                      window.open(
                        "https://www.google.com/search?q=currency+exchange+in+raipur+atpm&tbm=lcl&sxsrf=AOaemvLZeSNjU6amOqVEogVETxbUuPOc_A%3A1631337420907&ei=zDs8Yef5NqmA1e8PmcWYkAc&oq=currency+exchange+in+raipur+atpm&gs_l=psy-ab.3..33i10i160k1l2.26471.28800.0.29741.5.5.0.0.0.0.296.1286.2-5.5.0....0...1c.1.64.psy-ab..0.5.1284...0i512k1j0i22i30k1j33i160k1.0.00pBvfXCsFg#rlfi=hd:;si:;mv:[[21.2588223,81.67786319999999],[21.2220062,81.630711]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
                      )
                    }
                    style={{
                      color: "blue",
                      verticalAlign: "text-bottom",
                      marginLeft: "10px",
                    }}
                  >
                    Google Map
                  </span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <i
                    style={{ fontSize: "22px" }}
                    class="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
                    +917000169301
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-3">
              <div style={{ maxWidth: "300px" }}>
                {/* <h3 style={{ textAlign: "left", height: "25px" }}></h3> */}
                <h5 className="mb-3" style={{ textAlign: "left" }}>
                  Rajnandgaon
                </h5>
                <div
                  className=""
                  style={{ textAlign: "left", display: "flex" }}
                >
                  <span>
                    <i
                      style={{ fontSize: "22px" }}
                      class="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    style={{
                      verticalAlign: "super",
                      marginLeft: "10px",
                      wordWrap: "break-word",
                    }}
                  >
                    F-16, Near water tank, Station road, Rajnandgaon,
                    Chhattisgarh, 491441
                  </span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <i
                    style={{ fontSize: "22px" }}
                    class="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
                    +917000169301
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-3">
              <div style={{ maxWidth: "300px" }}>
                <h5 className="mb-3" style={{ textAlign: "left" }}>
                  Dongargarh
                </h5>
                <div
                  className=""
                  style={{ textAlign: "left", display: "flex" }}
                >
                  <span>
                    <i
                      style={{ fontSize: "22px" }}
                      class="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    style={{
                      verticalAlign: "super",
                      marginLeft: "10px",
                      wordWrap: "break-word",
                    }}
                  >
                    Near Canara Bank, Behind Agrasen Bhawan, Mahaveer Para,
                    Dongargarh, Chhattisgarh, 491445
                  </span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <i
                    style={{ fontSize: "22px" }}
                    class="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
                    +917000169301
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mb-3">
              <div style={{ width: "300px" }}>
                <h5 className="mb-3" style={{ textAlign: "left" }}>
                  Bilaspur
                </h5>
                <div
                  className="mb-3"
                  style={{ textAlign: "left", display: "flex" }}
                >
                  <span className="text-danger">Opening Soon</span>
                  {/* <span>
                    <i
                      style={{ fontSize: "22px" }}
                      class="fa fa-map-marker"
                      aria-hidden="true"
                    ></i>
                  </span>
                  <span
                    style={{
                      verticalAlign: "super",
                      marginLeft: "10px",
                      wordWrap: "break-word",
                    }}
                  >
                    19C - SECOND FLOOR SHYAM PLAZA, Pandri, Raipur, Chhattisgarh
                    492004
                  </span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <i
                    style={{ fontSize: "22px" }}
                    class="fa fa-phone"
                    aria-hidden="true"
                  ></i>
                  <span style={{ verticalAlign: "super", marginLeft: "10px" }}>
                    +917000169301
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactUs;
