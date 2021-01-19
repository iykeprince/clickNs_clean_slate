import React from "react";
// import { ProductOrders } from "../DB/PhonenTabletData";
import { PRODUCTORDERS_SUPERMARKET } from "../DB/SupermarketData";
import ProductRow from "./GenericProductRow";

// export const PhoneTabletrows = () => {
//   const [listView] = React.useState(true);
//   const [gridView] = React.useState(false);

//   return ProductOrders.map((product) => {
//     return (
//       <ProductRow
//         key={product.id}
//         data={product}
//         listView={listView}
//         gridView={gridView}
//       />
//     );
//   });
// };

// let rows = ProductOrders.map((product) => {
//   return (
//     <ProductRow
//       key={product.id}
//       data={product}
//       listView={this.state.listView}
//       gridView={this.state.gridView}
//     />
//   );
// });

export const Supermarketrows = () => {
  const [listView] = React.useState(true);
  const [gridView] = React.useState(false);

  return PRODUCTORDERS_SUPERMARKET.map((product) => {
    return (
      <ProductRow
        key={product.id}
        data={product}
        listView={listView}
        gridView={gridView}
      />
    );
  });
};
