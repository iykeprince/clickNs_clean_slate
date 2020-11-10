import React from "react";
import { Row, Col } from "react-bootstrap";
import RightSideCard from "./RightSideCard";
import samsungGalaxyA70 from "../../assets/samsungGalaxyA70.png";
import samsungFrontBack from "../../assets/samsungFrontBack.png";

function ProductDetailRowThree() {
  return (
    <div>
      <Row>
        <Col md="2">PRODUCT DETAILS</Col>
        <Col md="2">REVIEWS</Col>
        <Col md="2">PRODUCT SPECIFICATION</Col>
      </Row>

      <Row>
        <Col lg="9">
          <img src="/images/GalaxyA50.png" alt="galaxy a50" />
          <p>
            Following in the tradition of the powerful Samsung A series, here
            comes the Samsung Galaxy A50 smartphone. The A50 mobile features a
            6.4 inch (16.26 cm) display with a screen resolution of 1080 x 2340
            pixels and runs on Android 9.0 (Pie) operating system. The super
            smart device is powered by Octa-core (2.3 GHz, Quad core, Cortex A73
            + 1.7 GHz, Quad core, Cortex A53) processor paired with 4GB of RAM.
            The battery has 4000mAh capacity and the rear cameras are 25MP + 5MP
            + 8MP.
          </p>
          <br/>
          <p>
            Other features include Light sensor, Proximity sensor,
            Accelerometer, Gyroscope. So, does it have a fingerprint sensor?
            Yes, it does. For graphical performance that makes games run
            smoothly, the Samsung Galaxy A50 is powered with the Mali-G72 MP3
            GPU and the ROM docks at 64 GB and yes! You can expand it to 512GB.
            The super slim design of the A50 (7.7 mm width and 166 grams weight)
            makes it a winner every time.
          </p>
        </Col>
        <Col lg="3">
          <p>Sponsored Product</p>
          <RightSideCard productImage={samsungGalaxyA70} />
          <RightSideCard productImage={samsungFrontBack} />
          <RightSideCard productImage={samsungFrontBack} />
        </Col>
        
      </Row>
    </div>
  );
}

export default ProductDetailRowThree;
