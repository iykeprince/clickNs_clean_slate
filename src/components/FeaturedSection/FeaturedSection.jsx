import React from 'react'
import styles from "./FeaturedSection.module.css";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

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
        
          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/laptop.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Desktops</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/wigs.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Wigs</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/solarpanel.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Solar Panels</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/gen.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Generators</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/cabinet.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Wardrobes</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/trouser.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Trousers</p>
            </div>
          </Col>
        </Row>

        <Row className={styles.featureRow}>
          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/microwave.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Microwaves </p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/flower.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Plants</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/bag.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Bags</p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/shoe.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Shoes </p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/headset.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Headsets </p>
            </div>
          </Col>

          <Col sm="6" md="4" lg="2">
            <div className={styles.featuredImage}>
              <img src="/images/Products/chair.png" alt="product" />
            </div>
            <div className={styles.featuredName}>
              <p className="">Chair</p>
            </div>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
}

export default FeaturedSection;
