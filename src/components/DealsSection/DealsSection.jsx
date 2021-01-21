import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DealsSectionContent from "./DealsSectionContent";
import samsung1 from "../../assets/Products/samsungGalaxy.png";
import shoe1 from "../../assets/Products/shoe.png";
import laptop1 from "../../assets/Products/laptop.png";
import dress1 from "../../assets/Products/dress.png";
import fridge1 from "../../assets/Products/fridge.png";

function DealsSection() {
  return (
    <div>
      <Container fluid className="dealsSectionContainer">
        <Row>
          <Col md="12" className="dealsSectionTitle__container">
            <div className="dealsSectionTitle bgWhite">
              <p>Recommended for you</p>
            </div>
          </Col>

          <DealsSectionContent productImage={samsung1} />
          <DealsSectionContent productImage={shoe1} />
          <DealsSectionContent productImage={laptop1} />
          <DealsSectionContent productImage={dress1} />
          <DealsSectionContent productImage={fridge1} />
          <DealsSectionContent productImage={shoe1} />
        </Row>
      </Container>
    </div>
  );
}

export default DealsSection;
