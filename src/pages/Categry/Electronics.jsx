import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ORDERTABLE_SUPERMARKET } from "../../components/Category/OrderTable";
import { ORDERTABLE_SUPERMARKETI } from "../../components/Category/OrderTableI";
import {ORDERTABLE_SUPERMARKETII} from "../../components/Category/OrderTableII";
import {PRICESLASH_SUPERMARKET} from "../../components/Category/PriceSlash";
import {PRICESLASH_SUPERMARKETI} from "../../components/Category/PriceSlashI";
import {PRICESLASH_SUPERMARKETII} from "../../components/Category/PriceSlashII";
import {PRICESLASH_SUPERMARKETIII} from "../../components/Category/PriceSlashIII";
import {PRICESLASH_SUPERMARKETIV} from "../../components/Category/PriceSlashIV";
import {PRICESLASH_SUPERMARKETV} from "../../components/Category/PriceSlashV";
import {OFFICIALSTORE_SUPERMARKET} from "../../components/Category/OfficialStore";
import {OFFICIALSTORE_SUPERMARKETI} from "../../components/Category/OfficialStoreI";
import { CATSIDENAV_SUPERMARKET } from "../../components/Category/CatSideNav/Index";
import {CATBANNERIMAGE_ELECTRONICSI,  CATBANNERIMAGE_ELECTRONICSII } from "../../components/Category/CatBannerImage";
import CategoryDirection from "../../components/Category/CategoryDirection";
import CategoryAdvert from "../../components/Category/CategoryAdvert";
import { CategoryProvider } from "../../Contexts/CategoryContext";

export default function Electronics() {
    const category = { catName: 'Electronics'}

  return (
    <React.Fragment>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">

      <CategoryProvider value={category}>  
        <CategoryDirection/>

        <CATBANNERIMAGE_ELECTRONICSI />

        <ORDERTABLE_SUPERMARKET headingTitle="Electronics" />

        <PRICESLASH_SUPERMARKET headingTitle="Budget" />

        <PRICESLASH_SUPERMARKETI headingTitle="Electronics" />

        <CategoryAdvert />

        <PRICESLASH_SUPERMARKETII headingTitle="Electronics" />

        <ORDERTABLE_SUPERMARKETI headingTitle="Budget" />

        <PRICESLASH_SUPERMARKETIII headingTitle="Electronics" />

        <PRICESLASH_SUPERMARKETIV headingTitle="Budget" />

        <ORDERTABLE_SUPERMARKETII headingTitle="Electronics" />

        <br />
        <br />
        <br />
        <CATBANNERIMAGE_ELECTRONICSII/>

        <OFFICIALSTORE_SUPERMARKET headingTitle="Official Stores" />

        <OFFICIALSTORE_SUPERMARKETI headingTitle="Electronics" />

        <PRICESLASH_SUPERMARKETV headingTitle="Budget" />

        <CATSIDENAV_SUPERMARKET />
        </CategoryProvider>

      </div>
      <Footer />
    </React.Fragment>
  );
}
