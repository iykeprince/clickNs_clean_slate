import React, { useContext } from "react";
import CategoryContext from "../../../Contexts/useContext";
import CatApp from "./CatApp";
import Sort from "./Sort";

function RightCatSideNav() {
  const category = useContext(CategoryContext);

  return (
    <div className="mainer">
      <div className="d-flex">
        <span className="listGridTopic">
          {category.name}
          </span>

        <span className="lefter">
          <Sort />
        </span>
      </div>
      <div className="listGrid__header">
        <CatApp />
      </div>
    </div>
  );
}

export default RightCatSideNav;
