import React from "react";
import { isMobile, isMobileOnly } from "react-device-detect";
import { Card } from "reactstrap";

const AboutUs = () => {
  return (
    <div>
      <div className={!isMobile ? "d-flex" : ""} >
        <div className="mt-3">
          <img width={isMobileOnly ? "200px" : ''} src="data:image/jpeg;base64,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" />
          <div className="mt-2">
            <strong>Mr. Ashok Kumar Maheshwari</strong>
          </div>
          <div>
            <span>Director</span>
          </div>
        </div>
        <div className="m-3" style={{ textAlign: "justify" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chu
        </div>
      </div>
      <hr />
      <div  className={!isMobile ? "d-flex" : ""}>
        <div className="mt-3">
          <img width={isMobileOnly ? "200px" : ''} src="data:image/jpeg;base64,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" />
          <div className="mt-2">
            <strong>Mr. Taran Maheshwari</strong>
          </div>
          <div>
            <span>CEO</span>
          </div>
        </div>
        <div className="m-3" style={{ textAlign: "justify" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham. Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
          written in 45 BC. This book is a treatise on the theory of ethics,
          very popular during the Renaissance. The first line of Lorem Ipsum,
          "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chu
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
