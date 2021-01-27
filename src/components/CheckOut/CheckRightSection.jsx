import React from 'react'

export default function CheckRightSection(props) {
    return (
        <div className="row p-3">
            <div className="col-3">
              <img src={props.pImage}  alt="productImage" className="pImage pt-1" />
            </div>

            <div className="col-9">
              <p className="selrText">Seller: {props.sellerText}</p>
              <p className="prodDescrpt2">
                Galaxy A50 6.4-Inch (4GB,128GB ROM) Android 9 Pie, (25MP+5MP+
                8MP)+ 25MP 4000mAh 4G Dual SIM Smartphone - White
              </p>
              </div>
        </div>
    )
}
