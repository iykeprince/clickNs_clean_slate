import React from 'react'
import {
  Row,
  Col,
} from "react-bootstrap";
import InputEmail from "../InputEmail/InputEmail";

function Footer() {
  const item1 = [
    "Information",
    "About Us",
    "Privacy Policy	",
    "Delivery Information",
    "Terms and Conditions",
  ];
  // const item1_url = [
  //   "/information",
  //   "/about",
  //   "/privacy-policy",
  //   "/privacy-policy",
  // ]
  const item2 = [
    "My Account",
    "Help & FAQ",
    "Returns",
    "Order History",
    "My Account",
  ];
  const item3 = [
    "More Info",
    "Sell on SmartShop",
    "Become an Affiliate Partner",
    "Become a Logistics Service Partner",
    "Become a Vendor Service Provider",
  ];
  return (
    <footer className='footer'>
      <div className='fcontainer body__wrapper putAtMiddle'>
        <div className='Container'>
          <Row className='frowOne__wrapper'>
            <Col lg="2" className='smallInfoGroup'>
              <div>
                {item1.map((item, index) => {
                  if (index === 0) {
                    return <h2 key={index}>{item}</h2>;
                  } else {
                    return <p key={index}>{item}</p>;
                  }
                })}
              </div>
            </Col>
            <Col lg="2" className='smallInfoGroup'>
              <div>
                {item2.map((item, index) => {
                  if (index === 0) {
                    return <h2 key={index + item}>{item}</h2>;
                  } else {
                    return <p key={index}>{item}</p>;
                  }
                })}
              </div>
            </Col>
            <Col lg="2" className='smallInfoGroup'>
              <div>
                {item3.map((item, index) => {
                  if (index === 0) {
                    return <h2 key={index}>{item}</h2>;
                  } else {
                    return <p key={index}>{item}</p>;
                  }
                })}
              </div>
            </Col>
            <Col lg="3" className='smallInfoGroup'>
              <div>
                <div className='newsLetterSection'>
                <h2>Newsletter</h2>
                <p>
                  Don’t miss any updates or promotions by signing up to our
                  newsletter.
                </p>

                <InputEmail/>

                </div>

                <div>
                  <h2>Social</h2>
                  <div className='images'>
                    <img src="/images/facebook.svg" alt="facebook" className='socialMedia'/>
                    <img src="/images/instagram.svg" alt="instagram" className='socialMedia'/>
                    <img src="/images/twitter.svg" alt="twitter" className='socialMedia'/>
                    <img src="/images/youtube.svg" alt="youtube" className='socialMedia'/>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" className='smallInfoGroup'>
              <div className='blog'>
                <h2>Blog</h2>
                <img
                  src="/images/black-friday.png"
                  alt="blackFriday"
                  className='bonusimg'
                />

                <div className='shop'>
                  <span >
                    <h5>Best Shopping Store To Buy </h5>
                    <h5>Everything You Need</h5>
                  </span>
                  <div className='smallCard'>
                    <p>18</p>
                    <p>May</p>
                  </div>
                </div>
                <p>
                  The trend of online shopping is increasing regularly. All
                  individuals love to shop for hings online instead of visiting
                  the market...
                </p>
                <div className='flex bgd'>
                  <span className='flex'>
                    <span className='readCount'>
                      <img src="/images/eye.png" alt="eye" />
                      <span>50</span>
                    </span>
                    <span className='readCount'>
                      <img src="/images/msg.png" alt="message" />
                      <span>8</span>
                    </span>
                  </span>
                  <span className='readMore'>Read More</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className='lastRow'>
            <div className='eConnectLimited col-12 col-lg-6'>
              <p>2020, eConnect NetPower Limited. All Rights Reserved</p>
            </div>

            <div className='playSection col-12 col-lg-6'>
              <div className='secondRow'>
                <span className='econnectLogo'>
                  <img src="/images/econnect.png" alt="econnect" />
                </span>
                <span className='googlePlay'>
                  <img src="/images/GooglePlay.svg" alt="google play" />
                </span>
                <span className='appStore'>
                  <img src="/images/AppStore.svg" alt="apple store" />
                </span>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
