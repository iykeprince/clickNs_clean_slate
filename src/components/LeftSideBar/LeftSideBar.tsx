import React from "react";
import styles from "./LeftSideBar.module.css";

const LeftSideBarData = {
  "/images/LeftSideBar/phone.svg": "Phone & Tablets",
  "/images/LeftSideBar/supermarket.svg": "Supermarket",
  "/images/LeftSideBar/Fashion.svg": "Fashion",
  "/images/LeftSideBar/electronics.svg": "Electronics",
  "/images/LeftSideBar/Computing.svg": "Computing",
  "/images/LeftSideBar/Home.svg": "Home & Office",
  "/images/LeftSideBar/health.svg": "Health & Beauty",
  "/images/LeftSideBar/Gaming.svg": "Gaming",
  "/images/LeftSideBar/Sports.svg": "Sporting Goods",
  "/images/LeftSideBar/BabyProduct.svg": "Baby Products",
  "/images/LeftSideBar/others.svg": "Other Categories",
};
const htmlData = [];
for (let key in LeftSideBarData) {
  let value = LeftSideBarData[key];
  htmlData.push(
    <div>
      <img src={key} alt="icon" className={styles.leftSideBar__icon} />
      <span className={styles.leftSideBar__text}>{value} </span>
    </div>
  );
}

function LeftSideBar() {
  return <div className={styles.leftSidebar__container}>{htmlData}</div>;
}

export default LeftSideBar;
