import React from 'react'
import styles from "./Footer.module.css";
import {
  Container,
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Container fluid>
          <Row className={styles.rowOne__wrapper}>
            <Col lg="2" className={styles.smallInfoGroup}>
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
            <Col lg="2" className={styles.smallInfoGroup}>
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
            <Col lg="2" className={styles.smallInfoGroup}>
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
            <Col lg="3" className={styles.smallInfoGroup}>
              <div>
                <div className={styles.newsLetterSection}>
                <h2>Newsletter</h2>
                <p>
                  Don’t miss any updates or promotions by signing up to our
                  newsletter.
                </p>

                <InputEmail/>

                </div>

                <div>
                  <h2>Social</h2>
                  <div className={styles.images}>
                    <img src="/images/facebook.svg" alt="facebook" className={styles.socialMedia}/>
                    <img src="/images/instagram.svg" alt="instagram" className={styles.socialMedia}/>
                    <img src="/images/twitter.svg" alt="twitter" className={styles.socialMedia}/>
                    <img src="/images/youtube.svg" alt="youtube" className={styles.socialMedia}/>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="3" className={styles.smallInfoGroup}>
              <div className={styles.blog}>
                <h2>Blog</h2>
                <img
                  src="/images/black-friday.png"
                  alt="blackFriday"
                  className={styles.bonusimg}
                />

                <div className={styles.shop}>
                  <span >
                    <h5>Best Shopping Store To Buy </h5>
                    <h5>Everything You Need</h5>
                  </span>
                  <div className={styles.smallCard}>
                    <p>18</p>
                    <p>May</p>
                  </div>
                </div>
                <p>
                  The trend of online shopping is increasing regularly. All
                  individuals love to shop for hings online instead of visiting
                  the market...
                </p>
                <div className={`${styles.flex} ${styles.bgd}`}>
                  <span className={styles.flex}>
                    <span className={styles.readCount}>
                      <img src="/images/eye.png" alt="eye" />
                      <span>50</span>
                    </span>
                    <span className={styles.readCount}>
                      <img src="/images/msg.png" alt="message" />
                      <span>8</span>
                    </span>
                  </span>
                  <span className={styles.readMore}>Read More</span>
                </div>
              </div>
            </Col>
          </Row>

          <Row className={styles.lastRow}>
            <Col md="6" className={styles.eConnectLimited}>
              <p>2020, eConnect NetPower Limited. All Rights Reserved</p>
            </Col>

            <Col md="6" className={styles.playSection}>
              <div className={styles.secondRow}>
                <span className={styles.econnectLogo}>
                  <img src="/images/econnect.png" alt="econnect" />
                </span>
                <span className={styles.googlePlay}>
                  <img src="/images/GooglePlay.svg" alt="google play" />
                </span>
                <span className={styles.appStore}>
                  <img src="/images/AppStore.svg" alt="apple store" />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
