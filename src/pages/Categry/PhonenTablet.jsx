// import React from "react";
// import Footer from "../../components/Footer/Footer";
// import Header from "../../components/Header/Header";
// import { OrderTable } from "../../components/Category/OrderTable";
// import { OrderTableI } from "../../components/Category/OrderTableI";
// import { OrderTableII } from "../../components/Category/OrderTableII";
// import { PriceSlash } from "../../components/Category/PriceSlash";
// import { PriceSlashI } from "../../components/Category/PriceSlashI";
// import { PriceSlashII } from "../../components/Category/PriceSlashII";
// import { PriceSlashIII } from "../../components/Category/PriceSlashIII";
// import { PriceSlashIV } from "../../components/Category/PriceSlashIV";
// import { PriceSlashV } from "../../components/Category/PriceSlashV";
// import { OfficialStore } from "../../components/Category/OfficialStore";
// import { OfficialStoreI } from "../../components/Category/OfficialStoreI";
// import CATSIDENAV_PHONESNTABLET from "../../components/Category/CatSideNav/Index";
// import {
//   CatBannerImageI,
//   CatBannerImageII,
// } from "../../components/Category/CatBannerImage";
// import CategoryDirection from "../../components/Category/CategoryDirection";
// import CategoryAdvert from "../../components/Category/CategoryAdvert";
// import { CategoryProvider } from "../../Contexts/CategoryContext";
// import { ProductOrders } from "../../DB/Categories/PhonenTabletData";

// export default function PhonenTablet() {
//   const category = { catName: "Phone & Tablets" };

//   return (
//     <React.Fragment>
//       <Header showHamburger={true} />
//       <div className="body__wrapper putAtMiddle">
//         <CategoryProvider value={category}>
//           <CategoryDirection />

//           <CatBannerImageI />

//           <OrderTable headingTitle={`Phone & Tablets`} />

//           <PriceSlash headingTitle="Budget Smartphones" />

//           <PriceSlashI headingTitle="Large Screen Phones" />

//           <CategoryAdvert />

//           <PriceSlashII headingTitle="Top Picks for you" />

//           <OrderTableI headingTitle="Phone Accessories" />

//           <PriceSlashIII headingTitle="Landline Phones" />

//           <PriceSlashIV headingTitle="Mobile Game Controllers" />

//           <OrderTableII headingTitle="Tablet Accessories" />

//           <CatBannerImageII />

//           <OfficialStore headingTitle="Official Stores" />

//           <OfficialStoreI headingTitle="Tablet Accessories" />

//           <PriceSlashV headingTitle="Mobile Game Controllers" />

//           <CATSIDENAV_PHONESNTABLET products={ProductOrders} />
//         </CategoryProvider>
//       </div>
//       <Footer />
//     </React.Fragment>
//   );
// }



import React from "react";
import CategoryDisplay from ".";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CATSIDENAV_PHONESNTABLET from "../../components/Category/CatSideNav/Index";
import { ProductOrders } from "../../DB/Categories/PhonenTabletData";
import { CategoryProvider } from "../../Contexts/CategoryContext";

export default function PhonenTablet() {
  const category = { catName: "Phone & Tablets" };

  return (
    <React.Fragment>
      <Header showHamburger={true} />
      <div className="body__wrapper putAtMiddle">
        <CategoryProvider value={category}>
          <CategoryDisplay
            categoryDirectionProps={{}}
            catBannerImageIProps={{ imageURL: "" }}
            catBannerImageIIProps={{ imageURL: "" }}
            categoryAdvertProps={{}}
            orderTableProps={{ headingTitle: `Phone & Tablets` }}
            orderTableIProps = {{ headingTitle:"Phone Accessories" }}
            orderTableIIProps = {{headingTitle:"Tablet Accessories" }}
            priceSlashProps={{ headingTitle: "Budget Smartphones" }}
            priceSlashIProps={{ headingTitle:"Large Screen Phones" }}
            priceSlashIIProps={{ headingTitle:"Top Picks for you" }}
            priceSlashIIIProps={{ headingTitle: "Landline Phones" }}
            priceSlashIVProps={{ headingTitle:"Mobile Game Controllers"}}
            priceSlashVProps={{ headingTitle:"Mobile Game Controllers"}}
            officialStoreProps={{ headingTitle:"Official Stores"}}
            officialStoreIProps={{ headingTitle:"Tablet Accessories" }}

          />

      <CATSIDENAV_PHONESNTABLET products={ProductOrders} />
        </CategoryProvider>
      </div>
      <Footer />
    </React.Fragment>
  );
}
