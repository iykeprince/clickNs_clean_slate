import React from "react";
import { Link } from "react-router-dom";
import IconStore from "../../store/IconStore";
import LargeButton from "../Button/LargeButton";
import NoDataUI from "./NoDataUI";

function MySavedItemsUI() {
  return (
    <div>
      <h3 className="titleHeader mbottom">Saved Items</h3>
      <NoDataUI
        Image={IconStore.orderShopBag}
        Topic="You haven’t saved an item yet!"
        Explanation="Found something you like? 
        Tap on the heart shaped icon next to the item to add it to your wishlist!
        All your saved items will appear here."
      />
      <div className="button__wrap">
      <Link to='/'><LargeButton buttonName="CONTINUE SHOPPING" /></Link>
      </div>
    </div>
  );
}

export default MySavedItemsUI;
