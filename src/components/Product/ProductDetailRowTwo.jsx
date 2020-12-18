import React from "react";
import slotLogo from '../../assets/slotLogo.png';
import phoneImagex from '../../assets/phone2108.png';
import samsungLogo from '../../assets/samsungLogo.png';
import sparLogo from '../../assets/sparLogo.png';
import gameLogo from '../../assets/gameLogo.png';
import SlimCard from '../SlimHorizontalCard/SlimCard';
import './ProductDetailsRowTwo.css'
import { Col, Row } from "react-bootstrap";


function ProductDetailRowTwo() {
  return (
    <Row>
    <Col lg='9' className='slimCard__wrapper'>
      <SlimCard companyLogo={slotLogo} productImg={phoneImagex}/>
      <hr className='separator2'/>
      <SlimCard companyLogo={samsungLogo} productImg={phoneImagex}/>
      <hr className='separator2'/>
      <SlimCard companyLogo={sparLogo} productImg={phoneImagex}/>
      <hr className='separator2'/>
      <SlimCard companyLogo={gameLogo} productImg={phoneImagex}/>
      </Col>

      
    </Row>
  );
}

export default ProductDetailRowTwo;
