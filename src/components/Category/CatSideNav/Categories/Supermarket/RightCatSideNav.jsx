import React, { useContext } from "react";
import CategoryContext from "../../../../../Contexts/CategoryContext";
import CatApp from "./CatApp";
import Sort from "../../Sort";

export default function RIGHTCATSIDENAV_SUPERMARKET () {
  const category = useContext(CategoryContext);

  return (
    <div className="mainer">
      <div className="d-flex">
        <span className="listGridTopic">
          {category.catName}
          </span>

        <span className="lefter">
          <Sort />
        </span>
      </div>
      <div className="listGrid__header">
        <CatApp/>
      </div>
    </div>
  );
}

