import React from "react";
import { Row, Col } from "react-bootstrap";

function ProductDetailRowOne() {
  return (
    <Row>
      <Col lg="3">
        <div>
          <img src="/images/phoneProduct.png" alt="phone" />
        </div>
        <div>
          <img src="/images/prevLeft.svg" alt="previous" />
          <img src="/images/phoneSmall47.svg" alt="phoneSmall" />
          <img src="/images/phoneSmall45.svg" alt="phoneSmall" />
          <img src="/images/phoneSmall46.svg" alt="phoneSmall" />
          <img src="/images/phoneSmall47.svg" alt="phoneSmall" />
          <img src="/images/nextRight.svg" alt="next" />
        </div>
        <p>SHARE THIS PRODUCT</p>
        <div>
          <img src="/images/facebook12.svg" alt="facebookIcon" />
          <img src="/images/twitter12.svg" alt="twitterIcon" />
        </div>
      </Col>
      <Col lg="6">
        <div>
          <p>{`Samsung Galaxy A50 6.4-Inch (4GB,128GB ROM) Android 9 Pie,
              (25MP+5MP+ 8MP)+ 25MP 4000mAh 4G Dual SIM Smartphone - White`}</p>
          <p>{`Brand: Samsung | Similar products from Samsung`}</p>
        </div>
        <span>
          <img src="/images/ratingsIcon.svg" alt="ratings" />
        </span>
        <span> (4 ratings) </span>
        <p>&#8358; 124,000</p>
        <span>&#8358; 150,000</span>
        <span>-10%</span>
        <div className="largeButton">
          <button type="button">ADD TO CART</button>
        </div>
        <div>
          <span>3 offers starting from &#8358; 124,990</span>
          <span>See More Offers</span>
        </div>
        <div>
          <span>YOU CAN ALSO BUY:</span>
          <span>Details</span>
        </div>
        <div>
          <img src="/images/econnectProtect.svg" alt="" />
          <span>Jumia Protect - Device Insurance </span>
          <p>+ &#8358; 19,650 </p>
        </div>
        <span>Total Price </span>
        <span>+ &#8358; 19,650 </span>
        <span>
          <button type="button">BUY BOTH</button>
        </span>
        <div>
          <p>PROMOTIONS</p>
          <div>
            <img src="/images/promotionsBadge.svg" alt="promotionsBadge" />
            <span>
              Buy airtime {`&`} data on woozeee and get up to &#8358; 19,650
            </span>
          </div>
          <div>
            <img src="/images/starBadge.svg" alt="starBadge" />
            <span>{`woozeee prime: Enjoy Free Delivery on all local orders 
    `}</span>
          </div>
        </div>
      </Col>
      <Col lg="3">
        <div>
          <p>DELIVERY AND RETURNS</p>
          <div>
            <img src="/images/deliveryBus.svg" alt="delivery Bus" />
            <span>Delivery Information</span>
            <p>
              Shipped from abroad. Delivered between Thursday 19 Dec and
              Thursday 26 Dec.
            </p>
            <p>See more </p>
          </div>
          <div>
            <img src="/images/returnPolicyIcon.svg" alt="returnPolicy Icon" />
            <span>Return Policy</span>
            <p>
              Free return within 15 days for Jumia Mall items and 7 days for
              other eligible items.
            </p>
            <p>See more </p>
          </div>
          <div>
            <img src="/images/warantyIcon.svg" alt="warantyIcon" />
            <span>Warranty</span>
            <p>24 Months</p>
          </div>
        </div>

        <div>
          <div>
            <p>SELLER INFORMATION</p>
          </div>
          <div>
            <p>woozeee store</p>
            <p>90% Seller score</p>
          </div>
          <div>
            <p>Seller Performance</p>
            <div>
              <img src="/images/greenStar.svg" alt="green star" />
              <span>Order Fulfillment Rate: Excellent</span>
            </div>
            <div>
              <img src="/images/greenStar.svg" alt="green star" />
              <span>Quality Score: Excellent</span>
            </div>
          </div>
        </div>

        <div>
          <p>Have one to Sell?</p>
          <p>Click here to list your product</p>
        </div>
      </Col>
    </Row>
  );
}

export default ProductDetailRowOne;
