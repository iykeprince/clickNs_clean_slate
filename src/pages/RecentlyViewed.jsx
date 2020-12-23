import React from "react";
import CardGroupTitle from "../components/Cards/CardGroupTitle";
import ProductCardGroupBig from "../components/Cards/ProductCardGroupBig";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function RecentlyViewed() {
  return (
    <div>
      <Header />

      <div className="body__wrapper">
        <div className="prodWrapper">
          <div className="prodBigWrapper">
            <CardGroupTitle titleText="Recently Viewed" />
            <hr className='Separator2'/>
            <ProductCardGroupBig />
            <ProductCardGroupBig />
            <ProductCardGroupBig />
            <ProductCardGroupBig />
            <ProductCardGroupBig />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RecentlyViewed;
