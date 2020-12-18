import React from "react";
import styles from "./FeaturedSection.module.css";
import { Container, Row, Col } from "react-bootstrap";
import FeaturedCard from "./FeaturedCard";
import laptop from "../../assets/Products/laptop.png";
import solarpanel from "../../assets/Products/solarpanel.png";
import wig from "../../assets/Products/wigs.png";
import gen from "../../assets/Products/gen.png";
import cabinet from "../../assets/Products/cabinet.png";
import trouser from "../../assets/Products/trouser.png";
import microwave from "../../assets/Products/microwave.png";
import shoe from "../../assets/Products/shoe.png";
import bag from "../../assets/Products/bag.png";
import headset from "../../assets/Products/headset.png";
import chair from "../../assets/Products/chair.png";


function FeaturedSection() {
  return (
    <div>
      <Container fluid className={styles.featureSectionContainer}>
        <Row>
          <Col md="12">
            <div className={styles.featureSectionTitle}>
              <p>Featured Categories</p>
            </div>
          </Col>
        </Row>
        <div className={styles.secondfeatureSectionWrapper}>
          <Row className={styles.featureRow}>
            <FeaturedCard featuredImage={laptop} featuredName={`Laptops`} />
            <FeaturedCard featuredImage={wig} featuredName={`Wigs`} />
            <FeaturedCard
              featuredImage={solarpanel}
              featuredName={`Solar panels`}
            />
            <FeaturedCard featuredImage={gen} featuredName={`Gen`} />
            <FeaturedCard featuredImage={cabinet} featuredName={`Cabinet`} />
            <FeaturedCard featuredImage={trouser} featuredName={`Trousers`} />
          </Row>

          <Row className={styles.featureRow}>
            <FeaturedCard
              featuredImage={microwave}
              featuredName={`Microwave`}
            />
            <FeaturedCard featuredImage={shoe} featuredName={`Shoes`} />
            <FeaturedCard featuredImage={bag} featuredName={`Bags`} />
            <FeaturedCard featuredImage={gen} featuredName={`Gen`} />
            <FeaturedCard featuredImage={headset} featuredName={`Headsets`} />
            <FeaturedCard featuredImage={chair} featuredName={`Chairs`} />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default FeaturedSection;
