import React from "react";
import { isMobile } from "react-device-detect";

const Slide = (props) => {
  const btnContainer = {
    display: "inline-block",
    float: "right"
  };
  const btn = {
    border: "none",
    background: "blue",
    color: "white",
    fontSize: "22px",
    padding: "5px 10px",
    borderRadius: "10px",
    margin: "0 10px"
  };
  return (
    <React.Fragment>
      <img src={props.image.link} height={!isMobile ? "500px" : "300px"} alt="Sliderr_image" style={{objectFit: 'cover', minWidth: '100vw', maxWidth: '100vw'}} />
      {/* <img src={props.image.link} width={!isMobile ? "100%" : "100vw"} height={!isMobile ? "500px" : "300px"} alt="Sliderr_image" style={{objectFit: 'cover'}} /> */}
      {/* <h1>
        {props.image.title}
        <span style={btnContainer}>
          <button style={btn} onClick={props.slidePrev}>
            {"<"} Prevs
          </button>
          |
          <button style={btn} onClick={props.slideNext}>
            {">"} Next
          </button>
        </span>
      </h1> */}
    </React.Fragment>
  );
};
const Slider = (props) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      id: 1,
      title: "First Slide",
      link: "https://wallpaperaccess.com/full/1209562.jpg"
    },
    {
      id: 2,
      title: "Second Slide",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEgN8HwZINnbr8nbBzo7kMveTC66pUouWOQ&usqp=CAU"
    },
    {
      id: 3,
      title: "Third Slide",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzG_yHwcgrgJD67eyyVVYIB44SHeOBWkoxw&usqp=CAU"
    },
    {
      id: 4,
      title: "Fourth Slide",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7uA0O7sVp7E-CUrbotqvViQQOaQJ7v3Kww&usqp=CAU"
    }
  ];
  const slideNext = (e) => {
    setCurrentSlide((prev) => {
      return prev + 1 === slides.length ? 0 : currentSlide + 1;
    });
  };
  const slidePrev = (e) => {
    setCurrentSlide((prev) => {
      return prev === 0 ? slides.length - 1 : currentSlide - 1;
    });
  };
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => {
        return prev + 1 === slides.length ? 0 : prev + 1;
      });
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <React.Fragment>
      {/* <h1>
        React Slider{" "}
        <small>
          <em>(we have {slides.length} slides)</em>
        </small>
      </h1> */}
      <Slide
        image={slides[currentSlide]}
        slideNext={slideNext}
        slidePrev={slidePrev}
      />
    </React.Fragment>
  );
};

export default Slider;