import React from "react";
import { Row, Col } from "react-bootstrap";
// import "./ProductDetailRowOne.css";
import imgPrev from "../../assets/prevLeft.svg";
import phonesmall1 from "../../assets/phoneSmall47.svg";
import phonesmall2 from "../../assets/phoneSmall45.svg";
import phonesmall3 from "../../assets/phoneSmall46.svg";
import nextImg from "../../assets/nextRight.svg";
import loveIcon from "../../assets/loveIcon.svg";
import VariableImage from "../Image/VariableImage";
import DiscountPercent from "../DiscountPercent/DiscountPercent";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa"
import LargeButton from "../Button/LargeButton";

function ProductDetailRowOne() {
  return (
    <Row className="rowOne__wrapper">
      <Col lg="9">
        <Row className="rows__wrapper">
          <Col md="4">
            <div>
              <img src="/images/phoneProduct.png" alt="phone" className='phoneProduct' />
            </div>
            <div className="prevNext">
              <VariableImage Img={imgPrev} altText="previous" />
              <VariableImage Img={phonesmall1} altText="phoneSmall" />
              <VariableImage Img={phonesmall2} altText="phoneSmall" />
              <VariableImage Img={phonesmall3} altText="phoneSmall" />
              <VariableImage Img={phonesmall1} altText="phoneSmall" />
              <VariableImage Img={nextImg} altText="next" />
            </div>
            <hr className='separator'/>
            <p className="shareProduct">SHARE THIS PRODUCT</p>
            <div>
              <img
                src="/images/facebook12.svg"
                alt="facebookIcon"
                className="socialFacebook"
              />
              <img
                src="/images/twitter12.svg"
                alt="twitterIcon"
                className="socialTwitter"
              />
            </div>
          </Col>
          <Col md="8">
            <div>
              <div className='topSec'>
              <span className="textBig">{`Samsung Galaxy A50 6.4-Inch (4GB,128GB ROM) Android 9 Pie,
              (25MP+5MP+ 8MP)+ 25MP 4000mAh 4G Dual SIM Smartphone - White`}</span>
              <VariableImage Img={loveIcon}  altText="loveIcon"/>
              </div>
              
              <span className="textSmallOne">Brand: </span>
              <Link className="textSmallTwo">{`Samsung | Similar products from Samsung`}</Link>
            </div>

            <div className="ratings__wrapper">
              <span>
                <img src="/images/ratingsIcon.svg" alt="ratings" />
              </span>
              <Link className="textSmallThree"> (4 ratings) </Link>
            </div>

            <p className="originalPrice">&#8358; 124,000</p>
            <span className="discountedPrice">&#8358; 150,000</span>
            <DiscountPercent DiscountText="-10%" />
            <div className="largeButton__wrapper">
              <Link to='/cart'>
              <LargeButton buttonName='ADD TO CART'/>
              </Link>
                 
            </div>
            <div className="offers">
              <span>3 offers starting from &#8358; 124,990</span>
              <Link className="textLink">See More Offers</Link>
            </div>
            <div className="offers2">
              <span>YOU CAN ALSO BUY:</span>
              <Link className="textLink">Details</Link>
            </div>
            <Row className="borderWrapperOne">
              <Col sm='1'>
              <img src="/images/econnectProtect.svg" alt="" />
              </Col>
              <Col sm='11' className='protectPolicy'>
              <span >Econnect Protect - Device Insurance </span>
              <p>+ &#8358; 19,650 </p>
              </Col>
            </Row>
            <div className="borderWrapperTwo">
              <div>
              <p className='totalPriceText'>Total Price: </p>
              <p className='totalPriceFig'>+ &#8358; 19,650 </p>
              </div>
              <div>
              <button type="button" className='smallButton'>BUY BOTH</button>
              </div>
            </div>

            <div className='promotionsWrapper'>
              <p className='promotionTitle'> PROMOTIONS</p>
              <div className='promotionLineOne'>
                <img src="/images/promotionsBadge.svg" alt="promotionsBadge" className='promotionIcon'/>
                <span>
                  Buy airtime {`&`} data on woozeee and get up to &#8358; 19,650
                </span>
              </div>
              <div  className='promotionLineTwo'>
                <img src="/images/starBadge.svg" alt="starBadge" className='promotionIcon'/>
                <span>woozeee prime: Enjoy Free Delivery on all local orders </span>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg="3" className='rightSide'>
        <div className="rightSectionOne">
          <p className="rightSectionTitle">DELIVERY AND RETURNS</p>
          <Row className='newRowWrap'>
            <div className='rightSectionWrapper col'>
              <div  className='rightSelGrp'>
              <img src="/images/deliveryBus.svg" alt="delivery Bus" className='topRightImgIcon' />
              <div>
                <span className='smallTextHeadr'>Delivery Information</span>
                <p className="smallText">
                  Shipped from abroad. Delivered between Thursday 19 Dec and
                  Thursday 26 Dec.
                </p>
                <Link className="smallText textLink">See more </Link>
              </div>
              </div>
           
              <div className='rightSelGrp'> 
                <img src="/images/returnPolicyIcon.svg" alt="returnPolicy Icon" className='topRightImgIcon'/>
                <div>
                <span className='smallTextHeadr'>Return Policy</span>
                <p className="smallText">
                  Free return within 15 days for Jumia Mall items and 7 days for
                  other eligible items.
                </p>
                <Link className="smallText textLink">See more </Link>
                </div>

              </div>
              
              <div  className='rightSelGrp'>
                <img src="/images/warantyIcon.svg" alt="warantyIcon" className='topRightImgIcon' />
                <div>
                  <span className='smallTextHeadr'>Warranty</span>
                <p className="smallText">24 Months</p>
                </div>
                
              </div>
            </div>












          </Row>
        </div>

        <div className="sellerInfo">
          <div>
            <p className="rightSectionTitle">SELLER INFORMATION</p>
          </div>
          <div className='woozStoreWrapper'>
          <div className='woozSell'>
            <p>woozeee store</p>
            <p>90% Seller score</p>
          </div>
          <hr className='horizontalLine'/>
          <div className='sellerGroup'>
            <p className='sellerText'>Seller Performance</p>
            <div className='sellerTwo'>
              <img src="/images/greenStar.svg" alt="green star" className='starIcon'/>
              <span>Order Fulfillment Rate: Excellent</span>
            </div>
            <div>
              <img src="/images/greenStar.svg" alt="green star" className='starIcon'/>
              <span>Quality Score: Excellent</span>
            </div>
          </div>
          </div>
          
        </div>

        <div className="toSell">
          <div>
          <p>Have one to Sell?</p>
          <p>Click here to list your product</p>
          </div>
          <div className='rightIcon'>
          <FaIcon.FaChevronRight/>
          </div>
          
        </div>
      </Col>
    </Row>
  );
}

export default ProductDetailRowOne;
