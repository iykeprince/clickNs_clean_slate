import React from "react";
import { bannerImage_Computing } from "../../DB/Categories/ComputingData";
import { bannerImage_Electronics } from "../../DB/Categories/ElectronicsData";
import { bannerImage_Fashion } from "../../DB/Categories/FashionData";
import { bannerImage_PhoneTablet } from "../../DB/Categories/PhonenTabletData";
import { bannerImage_Supermarket } from "../../DB/Categories/SupermarketData";
import { bannerImage_HomenOffice} from "../../DB/Categories/HomenOfficeData";
import { bannerImage_HealthnBeauty } from "../../DB/Categories/HealthnBeautyData";
import { bannerImage_Sports } from "../../DB/Categories/SportsData";
import { bannerImage_BabyProducts } from "../../DB/Categories/BabyProductsData";
import { bannerImage_OtherCategories } from "../../DB/Categories/OtherCategories";
import { bannerImage_Gaming } from "../../DB/Categories/GamingData";

export function CatBannerImageI() {
  return (
    <div className="top_badge">
      {bannerImage_PhoneTablet.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CatBannerImageII() {
  return (
    <div className="top_badge">
      {bannerImage_PhoneTablet.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_BABYPRODUCTSI() {
  return (
    <div className="top_badge">
      {bannerImage_BabyProducts.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_BABYPRODUCTSII() {
  return (
    <div className="top_badge">
      {bannerImage_BabyProducts.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}


export function CATBANNERIMAGE_SUPERMARKETI() {
  return (
    <div className="top_badge">
      {bannerImage_Supermarket.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_SUPERMARKETII() {
  return (
    <div className="top_badge">
      {bannerImage_Supermarket.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_FASHIONI() {
  return (
    <div className="top_badge">
      {bannerImage_Fashion.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_FASHIONII() {
  return (
    <div className="top_badge">
      {bannerImage_Fashion.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_ELECTRONICSI() {
  return (
    <div className="top_badge">
      {bannerImage_Electronics.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_ELECTRONICSII() {
  return (
    <div className="top_badge">
      {bannerImage_Electronics.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_COMPUTINGI() {
  return (
    <div className="top_badge">
      {bannerImage_Computing.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_COMPUTINGII() {
  return (
    <div className="top_badge">
      {bannerImage_Computing.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_HOMEOFFICEI() {
  return (
    <div className="top_badge">
      {bannerImage_HomenOffice.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_HOMEOFFICEII() {
  return (
    <div className="top_badge">
      {bannerImage_HomenOffice.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}




export function CATBANNERIMAGE_HEALTHBEAUTYI() {
  return (
    <div className="top_badge">
      {bannerImage_HealthnBeauty.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_HEALTHBEAUTYII() {
  return (
    <div className="top_badge">
      {bannerImage_HealthnBeauty.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}


export function CATBANNERIMAGE_SPORTSI() {
  return (
    <div className="top_badge">
      {bannerImage_Sports.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_SPORTSII() {
  return (
    <div className="top_badge">
      {bannerImage_Sports.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_GAMINGI() {
  return (
    <div className="top_badge">
      {bannerImage_Gaming.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_GAMINGII() {
  return (
    <div className="top_badge">
      {bannerImage_Gaming.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_OTHERSI() {
  return (
    <div className="top_badge">
      {bannerImage_OtherCategories.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage1}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}

export function CATBANNERIMAGE_OTHERSII() {
  return (
    <div className="top_badge">
      {bannerImage_OtherCategories.map((e, i) => {
        return (
          <img
            key={i}
            src={e.bannerImage2}
            className="top_banner_img"
            alt="top_banner_image"
          />
        );
      })}
    </div>
  );
}