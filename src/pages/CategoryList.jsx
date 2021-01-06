import React from "react";
import { Link } from "react-router-dom";
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

class CategoryList extends React.Component {
  render() {
    return (
      <React.Fragment>
        
          <Header/>
          <div className=''>

          <div className="containe putAtMiddle">
            <div className="top_banner "></div>
          </div>
          <div className="body__wrapper putAtMiddle">
            <ol className="breadcrumb ">
              <li className="breadcrumb-item">
                <Link to="/" className="active">
                  <b>Home</b>
                </Link>
              </li>
              <li className="breadcrumb-item active">Phones & Tablets</li>
            </ol>


            <div className="top_badge">
              <img
                src="./images/phones/2924 1.png"
                className="top_banner_img"
                alt="top_banner_image"
              />
            </div>

            <OrderTable />

            <PriceSlash />

            <PriceSlashI />

            <div></div>

            {/* <PhoneTablets/> */}

            <div className="grid-container">
              <div className="grid-item">
                <img
                  src="./images/phones/image 790.png"
                  alt="fun images"
                  className="funImages"
                />
              </div>
              <div className="grid-item">
                <img
                  src="./images/phones/1111.png"
                  alt="fun images"
                  className="funImages"
                />
              </div>
              <div className="grid-item">
                <img
                  src="./images/phones/2924 1 (1).png"
                  alt="fun images"
                  className="funImages"
                />
              </div>
            </div>
            {/* <PhoneTablets/> */}
            {/* <PhoneTabletsII/> */}

            <PriceSlashII />

            <OrderTableI />

            <PriceSlashIII />

            <PriceSlashIV />

            <OrderTableII />

            <br />
            <br />
            <br />

            <div className="top_badge">
              <img
                src="./images/phones/21914 1.png"
                alt="top_banner_image"
                style={{ width: "100%", marginTop: " 3rem !important" }}
              />
            </div>

            <OfficialStore />

            <OfficialStoreI />

            <PriceSlashV />

            <CatSideNav />
          </div>

          </div>
          <Footer />
        
      </React.Fragment>
    );
  }
}

export default CategoryList;
