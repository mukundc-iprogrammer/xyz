// import React from "react";
// import $ from "jquery";
// import "./styles.css";

// export default class Component extends React.Component {
//   render() {
//     const platforms = document.querySelector(".platforms .slide-track");

//     const rollingAnimation = platforms.animate(
//       [
//         { transform: "translateX(0)" },
//         { transform: `translateX(${-200 * 13}px)` },
//       ],
//       { iterations: Infinity, duration: 80 * 1000 }
//     );

//     function rollCarousel() {
//       rollingAnimation.play();
//     }

//     function pauseCarousel() {
//       rollingAnimation.pause();
//     }

//     platforms.addEventListener("mouseover", pauseCarousel);
//     platforms.addEventListener("mouseout", rollCarousel);

//     if (window.matchMedia("(max-width: 800px)").matches) {
//         platforms.style.transform = `translateX(${-150 * 13}px)`
//     }

//     $("a.taphover").on("touchstart", function (e) {
//       // "use strict"; //satisfy the code inspectors
//       var link = $(this); //preselect the link
//       if (link.hasClass("hover")) {
//         return true;
//       } else {
//         link.addClass("hover");
//         $("a.taphover").not(this).removeClass("hover");
//         e.preventDefault();
//         return false; //extra, and to make sure the function has consistent return points
//       }
//     });

//     return (
//       <div>
//         <div className="platforms">
//           <div className="slide-track">
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/phriendle.html"
//               alt="Phriendle"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/arches-national-park-patch.png" />
//               <h2>Arches</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/piccial.html"
//               alt="Piccial"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/biscayne-national-park-patch.png" />
//               <h2>Biscayne</h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/textcial.html"
//               alt="Textcial"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/carlsbad-caverns-national-park-design.png" />
//               <h2>Carlsbad Caverns</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/phaveit.html"
//               alt="Phaveit"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/denali-national-park-design.png" />
//               <h2>Denali</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/connectcial.html"
//               alt="Connectcial"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/yosemite-national-park-half-dome-patch.png" />
//               <h2>Dry Tortugas</h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/steyelhtml"
//               alt="Steyel"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/yosemite-national-park-half-dome-patch.png" />
//               <h2>Everglades</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/phreetime.html"
//               alt="Phreetime"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/yosemite-national-park-half-dome-patch.png" />
//               <h2>Glacier</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/noteiphy.html"
//               alt="Noteiphy"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/noteiphy-icon-white.png" />
//               <h2>Noteiphy</h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/phindnow.html"
//               alt="Phindnow"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phindnow-icon-white.png" />
//               <h2>Phindnow</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/phinances.html"
//               alt="Phinances"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phinances-icon-white.png" />
//               <h2>Phincances</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/phlanet.html"
//               alt="Phlanet"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phlanet-icon-white.png" />
//               <h2>Phlanet</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/phreeviews.html"
//               alt="Phreeviews"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phreeviews-icon-white.png" />
//               <h2>Phreeviews</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/pinge-giiving.html"
//               alt="Phinge Giving"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phinge-giving-icon-white.png" />
//               <h2>
//                 Phinge
//                 <br /> Giving
//               </h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/phriendle.html"
//               alt="Phriendle"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/2/6/0/126018873/custom_themes/914341087787011171/files/images/yosemite-national-park-half-dome-patch.png" />
//               <h2>Yosemite</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/piccial.html"
//               alt="Piccial"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/piccial-icon-white.png" />
//               <h2>Piccial</h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/textcial.html"
//               alt="Textcial"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/textcial-icon-white.png" />
//               <h2>Textcial</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/phaveit.html"
//               alt="Phaveit"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phaveit-icon-white.png" />
//               <h2>Phaveit</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/connectcial.html"
//               alt="Connectcial"
//             >
//               <img
//                 src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/connectial-icon-white.png"
//                 id="6"
//               />
//               <h2>Connectcial</h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/steyelhtml"
//               alt="Steyel"
//             >
//               <img
//                 src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/steyel-icon-white.png"
//                 id="7"
//               />
//               <h2>Steyel</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/phreetime.html"
//               alt="Phreetime"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phreetime-icon-white.png" />
//               <h2>PhreeTime</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/noteiphy.html"
//               alt="Noteiphy"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/noteiphy-icon-white.png" />
//               <h2>Noteiphy</h2>
//             </a>
//             <a
//               className="taphover"
//               id="top"
//               href="https://www.phinge.com/phindnow.html"
//               alt="Phindnow"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phindnow-icon-white.png" />
//               <h2>Phindnow</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/phinances.html"
//               alt="Phinances"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phinances-icon-white.png" />
//               <h2>Phincances</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/phlanet.html"
//               alt="Phlanet"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phlanet-icon-white.png" />
//               <h2>Phlanet</h2>
//             </a>
//             <a
//               className="taphover"
//               id="bottom"
//               href="https://www.phinge.com/phreeviews.html"
//               alt="Phreeviews"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phreeviews-icon-white.png" />
//               <h2>Phreeviews</h2>
//             </a>
//             <a
//               className="taphover"
//               id="middle"
//               href="https://www.phinge.com/pinge-giiving.html"
//               alt="Phinge Giving"
//             >
//               <img src="https://www.weebly.com/editor/uploads/1/1/8/4/118407766/custom_themes/170592326218648048/files/images/phinge-giving-icon-white.png" />
//               <h2>
//                 Phinge
//                 <br /> Giving
//               </h2>
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
