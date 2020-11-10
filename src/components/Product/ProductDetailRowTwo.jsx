import React from "react";
import slotLogo from '../../assets/slotLogo.png';
import phoneImagex from '../../assets/phone2108.png';
import samsungLogo from '../../assets/samsungLogo.png';
import sparLogo from '../../assets/sparLogo.png';
import gameLogo from '../../assets/gameLogo.png';
import SlimCard from '../SlimHorizontalCard/SlimCard';
import './ProductDetailsRowTwo.css'


function ProductDetailRowTwo() {
  return (
    <div>
    <div className='slimCard__wrapper'>
      <SlimCard companyLogo={slotLogo} productImg={phoneImagex}/>
      <SlimCard companyLogo={samsungLogo} productImg={phoneImagex}/>
      <SlimCard companyLogo={sparLogo} productImg={phoneImagex}/>
      <SlimCard companyLogo={gameLogo} productImg={phoneImagex}/>
      </div>

      
    </div>
  );
}

export default ProductDetailRowTwo;
