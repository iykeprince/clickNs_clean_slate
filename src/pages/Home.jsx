import React from "react";
import Header from "../components/Header/Header";
import HomeBodyTop from "../components/Home/HomeBodyTop";
import BodyNav from "../components/BodyNav/BodyNav";
import BottomAboutSection from "../components/BottomAboutSection/BottomAboutSection";
import DealsSection from "../components/Product/DealsSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
// import DealsSectionTwo from "../components/DealsSection/DealsSectionTwo";
import DoubleImage from "../components/ImageCard/DoubleImage";
import SingleImage from "../components/ImageCard/SingleImage";
// import DealsSectionFour from "../components/DealsSection/DealsSectionFour";
// import DealsSectionThree from "../components/DealsSection/DealsSectionThree";
import NewFooter from "../components/Footer/NewFooter";
// import Footer from "../components/Footer/Footer";


// Redux
// import { connect } from "react-redux"; 

let homeImgs = {
  shoe: "/images/imageSection/ShoesAd.png",
  youghurt: "/images/imageSection/youghurtAd.png",
  megaSale: "/images/imageSection/megaSale.png",
  nailPolish: "/images/imageSection/nailPolish.png",
  blackFriday: "/images/imageSection/blackFridayImage.png",
};

function Home() {
  return (
    <div>
      <Header />
      <div className="body__wrapper putAtMiddle">
        <HomeBodyTop />
        <BodyNav />
        <DealsSection title="Recommended for you" className1="" className2="bgWhite"/>
        <DealsSection title="Deals of The Day" className1="dealsSectionTwo" className2="bgRed"/>
        <SingleImage img={homeImgs.blackFriday} />
        <FeaturedSection />
        <DoubleImage img1={homeImgs.shoe} img2={homeImgs.youghurt} />
        <DealsSection title="Deals of The Day" className1="dealsSectionTwo" className2="bgYellow"/>
        <DealsSection title="Deals of The Day" className1="dealsSectionTwo" className2="bgGreen"/>
        <DoubleImage img1={homeImgs.megaSale} img2={homeImgs.nailPolish} />
        <BottomAboutSection />
      </div>
      <NewFooter />
    </div>
  );
}

export default Home;
