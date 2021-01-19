import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import OrderTable from "../../components/Category/OrderTable";
import OrderTableI from "../../components/Category/OrderTableI";
import OrderTableII from "../../components/Category/OrderTableII";
import PriceSlash from "../../components/Category/PriceSlash";
import PriceSlashI from "../../components/Category/PriceSlashI";
import PriceSlashII from "../../components/Category/PriceSlashII";
import PriceSlashIII from "../../components/Category/PriceSlashIII";
import PriceSlashIV from "../../components/Category/PriceSlashIV";
import PriceSlashV from "../../components/Category/PriceSlashV";
import OfficialStore from "../../components/Category/OfficialStore";
import OfficialStoreI from "../../components/Category/OfficialStoreI";
import CatSideNav from "../../components/Category/CatSideNav/Index";
import CatBannerImage from "../../components/Category/CatBannerImage";
import CategoryDirection from "../../components/Category/CategoryDirection";
import CategoryAdvert from "../../components/Category/CategoryAdvert";
import { CategoryProvider } from "../../Contexts/useContext";

export default function PhonenTablet() {
  const category = { name: 'Phone & Tablets'}

  return (
    <React.Fragment>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">

      <CategoryProvider value={category}>  
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
        </CategoryProvider>

      </div>
      <Footer />
    </React.Fragment>
  );
}
