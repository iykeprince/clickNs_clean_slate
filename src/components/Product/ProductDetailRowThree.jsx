import React from "react";
import { Row, Col } from "react-bootstrap";
import RightSideCard from "./RightSideCard";
import samsungGalaxyA70 from "../../assets/samsungGalaxyA70.png";
import samsungFrontBack from "../../assets/samsungFrontBack.png";
// import "./ProductDetailRowThree.css";
import { Link } from "react-router-dom";

function ProductDetailRowThree() {
  return (
    <div className="productDetailRowThree">
      <Row className="Descriptions">
        <Col>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <Link class="nav-link active title1" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">PRODUCT DETAILS</Link>
            </li>
            <li class="nav-item"  role="presentation">
              <Link class="nav-link title2" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">REVIEWS</Link>
            </li>
            <li class="nav-item"  role="presentation">
              <Link class="nav-link title3" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">PRODUCT SPECIFICATION </Link>
            </li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg="9">
          <div className="productDescription tab-content"  id="myTabContent">
            <div className="innerDetail tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <img src="/images/GalaxyA50.png" alt="galaxy a50" />
              <p>
                Following in the tradition of the powerful Samsung A series,
                here comes the Samsung Galaxy A50 smartphone. The A50 mobile
                features a 6.4 inch (16.26 cm) display with a screen resolution
                of 1080 x 2340 pixels and runs on Android 9.0 (Pie) operating
                system. The super smart device is powered by Octa-core (2.3 GHz,
                Quad core, Cortex A73 + 1.7 GHz, Quad core, Cortex A53)
                processor paired with 4GB of RAM. The battery has 4000mAh
                capacity and the rear cameras are 25MP + 5MP + 8MP.
              </p>
              <br />
              <br />
              <p>
                Other features include Light sensor, Proximity sensor,
                Accelerometer, Gyroscope. So, does it have a fingerprint sensor?
                Yes, it does. For graphical performance that makes games run
                smoothly, the Samsung
              </p>
              <br />
              <p>
                Galaxy A50 is powered with the Mali-G72 MP3 GPU and the ROM
                docks at 64 GB and yes! You can expand it to 512GB. The super
                slim design of the A50 (7.7 mm width and 166 grams weight) makes
                it a winner every time.
              </p>
            </div>

            <div className="innerDetail tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <img src="/images/phoneProduct.png" alt="galaxy a50" />
              <p>
              Featuring a 5.7-inch Full HD display, the Gionee S11 lite smartphone measures 153.8 x 72.6 x 7.9 mm, 
              compact for the screen and battery size. You've got the powerful Qualcomm Snapdragon 430 chipset with
               an octa-core CPU, 4GB RAM onboard with 64GB built-in storage which you can further expand with 256GB 
               microSD. 
               It's got 3 cameras: 13MP + 2MP back & 16MP selfie camera. The fast charging 2970mAh - 3,030mAh battery
                lasts for several hours and this smartphone supports multi-band 2G/3G/4G and LTE, as well as Bluetooth 4.0
                 and runs on Android 7.1 operating system.
              </p>
              <br />
              <br />
              <p>
                Other features include Light sensor, Proximity sensor,
                Accelerometer, Gyroscope. So, does it have a fingerprint sensor?
                Yes, it does. For graphical performance that makes games run
                smoothly, the Samsung
              </p>
              <br />
              <p>
                Galaxy A50 is powered with the Mali-G72 MP3 GPU and the ROM
                docks at 64 GB and yes! You can expand it to 512GB. The super
                slim design of the A50 (7.7 mm width and 166 grams weight) makes
                it a winner every time.
              </p>
            </div>

            <div className="innerDetail tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <img src="/images/GalaxyA50.png" alt="galaxy a50" />
              <p>
                Following in the tradition of the powerful Samsung A series,
                here comes the Samsung Galaxy A50 smartphone. The A50 mobile
                features a 6.4 inch (16.26 cm) display with a screen resolution
                of 1080 x 2340 pixels and runs on Android 9.0 (Pie) operating
                system. The super smart device is powered by Octa-core (2.3 GHz,
                Quad core, Cortex A73 + 1.7 GHz, Quad core, Cortex A53)
                processor paired with 4GB of RAM. The battery has 4000mAh
                capacity and the rear cameras are 25MP + 5MP + 8MP.
              </p>
              <br />
              <br />
              <p>
                Other features include Light sensor, Proximity sensor,
                Accelerometer, Gyroscope. So, does it have a fingerprint sensor?
                Yes, it does. For graphical performance that makes games run
                smoothly, the Samsung
              </p>
              <br />
              <p>
                Galaxy A50 is powered with the Mali-G72 MP3 GPU and the ROM
                docks at 64 GB and yes! You can expand it to 512GB. The super
                slim design of the A50 (7.7 mm width and 166 grams weight) makes
                it a winner every time.
              </p>
            </div>
          </div>
        </Col>
        <Col lg="3" className="RightSide2">
          <div className="sponsoredRight">
            <p className="sponsoredTitle">Sponsored Product</p>
            <RightSideCard productImage={samsungGalaxyA70} />
            <RightSideCard productImage={samsungFrontBack} />
            <RightSideCard productImage={samsungFrontBack} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ProductDetailRowThree;
