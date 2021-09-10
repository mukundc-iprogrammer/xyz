import React, { useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { Card } from "reactstrap";
import "./styles.css";

const Services = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".class1").style.display = "block";
    }, 1000);
    setTimeout(() => {
      document.querySelector(".class2").style.display = "block";
    }, 1500);
    setTimeout(() => {
      document.querySelector(".class3").style.display = "block";
    }, 2000);
    setTimeout(() => {
      document.querySelector(".class4").style.display = "block";
    }, 2500);

    setTimeout(() => {
        document.querySelector(".class5").style.display = "block";
      }, 1000);
      setTimeout(() => {
        document.querySelector(".class6").style.display = "block";
      }, 1500);
      setTimeout(() => {
        document.querySelector(".class7").style.display = "block";
      }, 2000);
      setTimeout(() => {
        document.querySelector(".class8").style.display = "block";
      }, 2500);
  }, []);
  return (
    <div>
      <Card className="p-5 mb-3">
        <h1 style={{ textAlign: "left" }}>Forex</h1>
        <div className="d-flex">
          <div>
            <div style={{ textAlign: "justify", marginRight: "30px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design. Lorem ipsum is typically a corrupted version of 'De
              finibus bonorum et malorum', a 1st century BC text by the Roman
              statesman and philosopher Cicero, with words altered, added, and
              removed to make it nonsensical and improper Latin.
            </div>
          </div>
          <div>
            <img
              height=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6YQpkyztFRNd-mZI-C0nxJ7A-XsAPRy21A&usqp=CAU"
            />
          </div>
        </div>
        <Waypoint>
          <div className="row"  style={{textAlign: 'justify'}}>
            <div
              className="col-6 class1"
              id="animated_div1"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Currency Exchange</span>
            </div>
            <div
              className="col-6 class2"
              id="animated_div2"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Forex Card</span>
            </div>
            <div
              className="col-6 class3"
              id="animated_div3"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Remittance</span>
            </div>
            <div
              className="col-6 class4"
              id="animated_div4"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Money Transfer</span>
            </div>
          </div>
        </Waypoint>
      </Card>
      <Card className="p-5 mb-3">
        <h1 style={{ textAlign: "left" }}>Tours & Travels</h1>
        <div className="d-flex">
          <div>
            <img
              height=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6YQpkyztFRNd-mZI-C0nxJ7A-XsAPRy21A&usqp=CAU"
            />
          </div>
          <div>
            <div style={{ textAlign: "justify", marginLeft: "30px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design. Lorem ipsum is typically a corrupted version of 'De
              finibus bonorum et malorum', a 1st century BC text by the Roman
              statesman and philosopher Cicero, with words altered, added, and
              removed to make it nonsensical and improper Latin.
            </div>
          </div>
        </div>
        <Waypoint>
          <div className="row" style={{textAlign: 'justify'}}>
            <div
              className="col-6 class5"
              id="animated_div5"
              style={{ display: "none"}}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Air Tickets</span>
            </div>
            <div
              className="col-6 class6"
              id="animated_div6"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>International Holiday Packages</span>
            </div>
            <div
              className="col-6 class7"
              id="animated_div7"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Travel Insurance</span>
            </div>
            <div
              className="col-6 class8"
              id="animated_div8"
              style={{ display: "none" }}
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGp1OmXdumHVyrR3MoNRdFDi9Goc7U2YCHZw&usqp=CAU" />
              <span>Domestic Holiday Packages</span>
            </div>
          </div>
        </Waypoint>
      </Card>
      <Card className="p-5 mb-3">
        <h1 style={{ textAlign: "left" }}>Visa</h1>
        <div className="d-flex">
          <div>
            <div style={{ textAlign: "justify", marginRight: "30px" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available. It is
              also used to temporarily replace text in a process called
              greeking, which allows designers to consider the form of a webpage
              or publication, without the meaning of the text influencing the
              design. Lorem ipsum is typically a corrupted version of 'De
              finibus bonorum et malorum', a 1st century BC text by the Roman
              statesman and philosopher Cicero, with words altered, added, and
              removed to make it nonsensical and improper Latin.
            </div>
          </div>
          <div>
            <img
              height=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6YQpkyztFRNd-mZI-C0nxJ7A-XsAPRy21A&usqp=CAU"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Services;
