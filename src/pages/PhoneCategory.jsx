import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import OrderTable from "../components/OrderTable";
import OrderTableI from "../components/OrderTableI";
import OrderTableII from "../components/OrderTableII";
import PriceSlash from "../components/PriceSlash";
import PriceSlashI from "../components/PriceSlashI";
import PriceSlashII from "../components/PriceSlashII";
import PriceSlashIII from "../components/PriceSlashIII";
import PriceSlashIV from "../components/PriceSlashIV";
import PriceSlashV from "../components/PriceSlashV";
import OfficialStore from "../components/OfficialStore";
import OfficialStoreI from "../components/OfficialStoreI";
import CatSideNav from "../components/CatSideNav/Index";
import CatBannerImage from "../components/CategoryTwo/CatBannerImage";
import CategoryDirection from "../components/CategoryTwo/CategoryDirection";
import CategoryAdvert from "../components/CategoryTwo/CategoryAdvert";
import { ProductCatNameProvider } from "../components/Context/useContext";

export default function PhoneCategory() {
  return (
    <React.Fragment>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">

      <ProductCatNameProvider valueName={`Phone & Tablets`}>
        <CategoryDirection categoryName={`Phone & Tablets`}/>

        <CatBannerImage bannerImageSource="./images/phones/2924 1.png" />

        <OrderTable headingTitle={`Phone & Tablets`} />

        <PriceSlash headingTitle="Budget Smartphones" />

        <PriceSlashI headingTitle="Large Screen Phones" />

        <CategoryAdvert />

        <PriceSlashII headingTitle="Top Picks for you" />

        <OrderTableI headingTitle="Phone Accessories" />

        <PriceSlashIII headingTitle="Landline Phones" />

        <PriceSlashIV headingTitle="Mobile Game Controllers" />

        <OrderTableII headingTitle="Tablet Accessories" />

        <br />
        <br />
        <br />
        <CatBannerImage bannerImageSource="./images/phones/21914 1.png" />

        <OfficialStore headingTitle="Official Stores" />

        <OfficialStoreI headingTitle="Tablet Accessories" />

        <PriceSlashV headingTitle="Mobile Game Controllers" />

        <CatSideNav />
        </ProductCatNameProvider>

      </div>
      <Footer />
    </React.Fragment>
  );
}
