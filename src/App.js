// import { Card } from 'reactstrap';
// import './App.css';
// import Header from './component/Header'

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Card>

//       </Card>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./styles.css";
import Slider from "./component/Carousel/Slider";
import { Card } from "reactstrap";
import AboutUs from "./component/AboutUs";
import MembershipAndCertification from "./component/MembershipAndCertification/MembershipAndCertification";
import Footer from "./component/Footer/Footer";
import Services from "./component/Services/Services";
import ContactUs from "./component/ContactUs/ContactUs";
import { isMobile } from "react-device-detect";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      itemOpened: "",
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  scroll = (val) => {
    const section = document.querySelector(`#${val}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    const styles = {
      container: {
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        background: "black",
        maxWidth: "100vw",
        minWidth: "100vw",
        color: "white",
        fontFamily: "Lobster",
        height: "60px",
      },
      logo: {
        margin: "0 0 0 200px",
        fontSize: "33px",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    };
    const menu = ["AboutUs", "Services", "ContactUs"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
            this.setState({ itemOpened: val });
            this.scroll(val);
          }}
        >
          {val}
        </MenuItem>
      );
    });

    return (
      <div>
        <div style={styles.container} className="justify-content-between">
          {/* <div className="col-12"> */}
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
            style={{ position: "absolute" }}
          />
          {!isMobile && <div style={styles.logo}>ATPM</div>}
          <div>
            <i
              style={{
                border: "1px solid white",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
                fontSize: "22px",
              }}
              onClick={() =>
                window.open("whatsapp://send?text=hello&phone=+917000169301")
              }
              className="me-3 fa fa-whatsapp c-p"
              aria-hidden="true"
            >
              {!isMobile &&<span
                style={{
                  fontSize: "22px",
                  margin: "0 10px",
                  verticalAlign: "middle",
                }}
              >
                Contact Us
              </span>}
            </i>
            <i
              style={{
                border: "1px solid white",
                padding: "5px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
                fontSize: "22px",
              }}
              onClick={() => window.open("tel:${+917000169301}")}
              className="me-3 fa fa-phone c-p"
              aria-hidden="true"
            >
              {!isMobile && <span
                style={{
                  fontSize: "22px",
                  margin: "0 10px",
                  verticalAlign: "middle",
                }}
              >
                +917000169301
              </span>}
            </i>
          {/* </div> */}
          </div>
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>

        <div className="pt-1" style={{ marginTop: "60px"}}>
          <Slider />
        </div>
        <div
          id="AboutUs"
          className="mb-3 mt-3 p-5"
          style={{ backgroundColor: "#dedfe090", textAlign: "center" }}
        >
          <h1>About us</h1>
          <Card className="p-5">
            <AboutUs />
          </Card>
        </div>
        <div
          id="Services"
          className="mb-3 p-5"
          style={{ textAlign: "center", backgroundColor: "#fae2aa90" }}
        >
          <h1>Services</h1>
          <Services />
        </div>
        <div
          id="ContactUs"
          className="mb-3 p-5"
          style={{ textAlign: "center", backgroundColor: "#aafaee90" }}
        >
          <h1>Contact us</h1>
          <ContactUs />
        </div>
        {/* <MembershipAndCertification /> */}
        {/* <div style={styles.body}><Footer name='Menu'/></div> */}
        <Footer />
      </div>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay,
      },
    };
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "fixed",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "black",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2,
      },
      menuList: {
        paddingTop: "3rem",
      },
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.state.color,
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px",
      },
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

// /* Footer.jsx */
// function Footer(props) {
//   const styles = {
//     footer: {
//       position: "absolute",
//       bottom: 0,
//       width: "100%",
//       marginTop: "1rem",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       color: props.color,
//     },
//     line: {
//       height: "1px",
//       width: "90%",
//       background: props.color,
//     },
//     text: {
//       padding: "0.5rem",
//     },
//   };

//   return (
//     <div style={styles.footer}>
//       <div style={styles.line}></div>
//       <div style={styles.text}>
//         {props.title} created by Smashcat &copy; 2017
//       </div>
//     </div>
//   );
// }

// Footer.defaultProps = {
//   color: "black",
//   title: "hello world!",
// };

// Footer.propTypes = {
//   color: React.PropTypes.string,
//   title: React.PropTypes.string,
// }

/* Main.jsx */
// class Main extends React.Component {
//   render() {
//     const styles = {
//       main: {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         height: "100vh",
//       },
//     };

//     return (
//       <div style={styles.main}>
//         <App />
//       </div>
//     );
//   }
// }

export default App;
