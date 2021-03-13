import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import facebookImg from "../../assets/images/footer/facebook.png";
import instaImg from "../../assets/images/footer/instagram.png";
import twitterImg from "../../assets/images/footer/twitter.png";
import wifiImg from "../../assets/images/footer/wifi.png";
import upImg from "../../assets/images/footer/up.png";
import woozImg from "../../assets/images/footer/wooz.png";
import entertainImg from "../../assets/images/footer/entertainment.png";
import eleganceImg from "../../assets/images/footer/elegance.png";
import excellenceImg from "../../assets/images/footer/excellence.png";
import getInTouchImg from "../../assets/images/footer/get-intouch.png";
import { DynamicButtonTwo } from "../Button/DynamicButton";

function NewFooter() {
  return (
    <React.Fragment>
      <footer className="mt-5">
        <div className="footer-red">
          <div className="body__wrapper mx-auto position-relative">
            <div className="move-up">
              <img src={upImg} alt="Move up" />
            </div>
          </div>
        </div>
        <div className="affirmation-block text-white">
          <div className="body__wrapper mx-auto position-relative">
            <div className="small-circle affirm-circle"></div>
            <img
              src={woozImg}
              alt="Woozeee logo"
              className="affirm-logo mx-auto"
            />
            <div className="col-9 mx-auto">
              <Row className="mt-3">
                <Col md={{ span: 4, offset: 3 }}>
                  <div className="affirmation">
                    <img src={entertainImg} alt="Entertainment" />
                    <p className="white">Entertainment</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="affirmation">
                    <img src={eleganceImg} alt="Entertainment" />
                    <p className="white">Elegance</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="affirmation">
                    <img src={excellenceImg} alt="Entertainment" />
                    <p className="white">Excellence</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="footer-wrap position-relative text-white">
          <div className="body__wrapper mx-auto">
            <img src={getInTouchImg} alt="Get in touch" className="intouch" />
            <div>
              <Row>
                <Col md={2}>
                  <h3 className="white w-bold">CONTACT INFO</h3>
                  <div className="mt-3">
                    <h4 className="white w-bold font-sm mb-0">ADDRESS:</h4>
                    <p className="white font-sm">
                      60 Landbridge Avenue, Oniru, VI
                    </p>
                  </div>
                  <div className="mt-3">
                    <h4 className="white w-bold font-sm mb-0">PHONE:</h4>
                    <p className="white font-sm">09088877765</p>
                  </div>
                  <div className="mt-3">
                    <h4 className="white w-bold font-sm mb-0">EMAIL:</h4>
                    <p className="white font-sm">info@woozeee.com</p>
                  </div>
                  <div className="mt-3">
                    <h4 className="white w-bold font-sm mb-0">
                      WORKING DAYS/HOUR:
                    </h4>
                    <p className="white font-sm">Mon - Fri / 9:00AM - 5:00PM</p>
                  </div>
                </Col>
                <Col md={2}>
                  <h3 className="white w-bold">WHO WE ARE</h3>
                  <div className="quick-links">
                    <Link to="/about" className="white d-block">
                      About
                    </Link>
                    <Link to="/team" className="white d-block">
                      Team
                    </Link>
                    <Link to="/carrers" className="white d-block">
                      Work With Us
                    </Link>
                  </div>
                </Col>
                <Col md={2}>
                  <h3 className="white w-bold">woozeee</h3>
                  <div className="quick-links">
                    <Link to="/" className="white d-block">
                      Features
                    </Link>
                    <Link to="/" className="white d-block">
                      Payments
                    </Link>
                    <Link to="/" className="white d-block">
                      Marketing
                    </Link>
                    <Link to="/" className="white d-block">
                      Shipping
                    </Link>
                    <Link to="/" className="white d-block">
                      Extension store
                    </Link>
                    <Link to="/" className="white d-block">
                      eCommerce blog
                    </Link>
                    <Link to="/" className="white d-block">
                      Development blog
                    </Link>
                    <Link to="/" className="white d-block">
                      Ideas board
                    </Link>
                    <Link to="/" className="white d-block">
                      Mobile App
                    </Link>
                    <Link to="/" className="white d-block">
                      Community
                    </Link>
                    <Link to="/" className="white d-block">
                      Style Guide
                    </Link>
                    <Link to="/" className="white d-block">
                      Email Newsletter
                    </Link>
                  </div>
                </Col>
                <Col md={2}>
                  <h3 className="white w-bold">MORE INFORMATION</h3>
                  <div className="quick-links">
                    <Link to="/" className="white d-block">
                      Sell on SmartShop
                    </Link>
                    <Link to="/" className="white d-block">
                      Participate in challeges
                    </Link>
                    <Link to="/" className="white d-block">
                      Become an Affiliate Partner
                    </Link>
                    <Link to="/" className="white d-block">
                      Become a Logistics Service Partner
                    </Link>
                    <Link to="/" className="white d-block">
                      Become a Vendor Service Provider
                    </Link>
                    <Link to="/" className="white d-block">
                      Refer a Friend
                    </Link>
                  </div>
                </Col>
                <Col md={2}>
                  <h3 className="white w-bold">Support</h3>
                  <div className="quick-links">
                    <Link to="/" className="white d-block">
                      Help & FAQS
                    </Link>
                    <Link to="/" className="white d-block">
                      Documentation
                    </Link>
                    <Link to="/" className="white d-block">
                      Customization
                    </Link>
                    <Link to="/" className="white d-block">
                      Support Policy
                    </Link>
                    <Link to="/" className="white d-block">
                      Contact
                    </Link>
                    <Link to="/" className="white d-block">
                      COVID-19 Resources
                    </Link>
                    <Link to="/" className="white d-block">
                      Terms and Conditions
                    </Link>
                  </div>
                </Col>
                <Col md={2}>
                  <h3 className="white w-bold">Subscribe newsletter</h3>
                  <p className="white font-sm white">
                    Get all the latest information on events, sales, challenges
                    and offers. Sign up for newsletter:
                  </p>
                  <form className="mt-2">
                    <Form.Group>
                      <Form.Control type="email" placeholder="Email address" className="w-100 px-2" />
                    </Form.Group>
                    <div className="mt-2">
                    <DynamicButtonTwo
                      color="white"
                      height="2.5rem"
                      width="8rem"
                      backgroundColor="var(--woozRed)"
                      boxShadow="none"
                      borderRadius="5px"
                      border="none !important"
                      fontWeight="500"
                      fontSize="0.875rem"
                      hoverBoxShadow="0 4px 8px 0 rgb(0 0 0 / 20%)"
                    >
                        Subscribe
                    </DynamicButtonTwo>
                    </div>
                   
                  </form>
                </Col>
              </Row>
              <div className="footer-apps">
                <img src="/images/econnect.png" alt="econnect logo" />
                <img src="/images/GooglePlay.svg" alt="app" />
                <img src="/images/AppStore.svg" alt="app" />

              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="body__wrapper mx-auto">
            <div className="social-feeds">
              <div className="social-media-icons">
                <Link to="/">
                  <img src={twitterImg} alt="Twitter field" />
                </Link>
                <Link to="/">
                  <img src={facebookImg} alt="Twitter field" />
                </Link>
                <Link to="/">
                  <img src={wifiImg} alt="Twitter field" />
                </Link>
                <Link to="/">
                  <img src={instaImg} alt="Twitter field" />
                </Link>
              </div>
              <div>
                <p className="copyright font-sm">
                  COPYRIGHT woozeee 2020 -
                  <Link to="/" className="black">
                    TERMS & CONDITIONS
                  </Link>
                  <Link to="/" className="black">
                    PRIVACY POLICY
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default NewFooter;
