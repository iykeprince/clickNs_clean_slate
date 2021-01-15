import React from 'react'

function LeftCatSideNav() {
    return (
        <div className="sidenav">
            <p>
              <b>CATEGORY</b>
            </p>

            <br />

            <p>Phones & Tablets</p>
            <div>
              <ul className="cs_section">
                <li> Mobile Phone Accessories</li>
                <br />
                <li>Mobile Phones</li>
                <br />
                <li>Tablet Accessories</li>
                <br/>
                <li>Tablets</li>
                <br />
                <li>Telephones & Accessories</li>
              </ul>
              <hr className="s_hr" />
            </div>
            <br />
            <br />

            <div>
              <p>
                <b> PRODUCT RATING</b>
              </p>
              <br />
              <ul className="cs_section">
                <li>
                  <span>
                    <div className="round">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox"></label>
                    </div>
                    <div className="r_star">
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star"></span>

                      <p className="r_text"> & above </p>
                    </div>
                  </span>
                </li>

                <li>
                  <span>
                    <div className="round">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox"></label>
                    </div>
                    <div className="r_star">
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>

                      <p className="r_text"> & above </p>
                    </div>
                  </span>
                </li>

                <li>
                  <span>
                    <div className="round">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox"></label>
                    </div>
                    <div className="r_star">
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>

                      <p className="r_text"> & above </p>
                    </div>
                  </span>
                </li>

                <li>
                  <span>
                    <div className="round">
                      <input type="checkbox" id="checkbox" />
                      <label htmlFor="checkbox"></label>
                    </div>
                    <div className="r_star">
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star "></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>

                      <p className="r_text"> & above </p>
                    </div>
                  </span>
                </li>
              </ul>
            </div>

            <hr className="s_hr" />
            <br />
            <br />

            <div className="brend">
              <p>
                <b>BRAND</b>
              </p>
              <br />

              <input
                type="text"
                className="brand_input"
                placeholder=" Search"
                style={{ fontFamily: "Arial, FontAwesome" }}
              />

              <br />
              <br />
              <label className="container">
                A1
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                AEC
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Amazon
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                Anker
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>

              <label className="container">
                Apple
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <br />
            <hr className="s_hr" />
            <br />

            <div>
              <span>
                <b>Price ( ₦ )</b>
              </span>{" "}
              <span className="apply">
                <b>APPLY</b>
              </span>
              <br />
              <br />
              <input
                style={{ width: "100%" }}
                type="range"
                name="range"
                step="50000"
                min="100000"
                max="1000000"
                value=""
                onChange={(e) => console.log(e.target.value)}
              ></input>
              <div>
                <span>
                  <input style={{ width: "7rem" }} placeholder="Minimum" />{" "}
                </span>{" "}
                <span>
                  {" "}
                  <input style={{ width: "8rem" }} placeholder="Maximum" />{" "}
                </span>
              </div>
              <br />
              <hr className="s_hr" />
              <br />
              <div className="brend">
                <p>
                  <b>OPERATING SYSTEM</b>
                </p>
                <br />

                <input
                  type="text"
                  className="brand_input"
                  placeholder=" Search"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />

                <br />
                <br />
                <label className="container">
                  IOS
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  NOKIA OS
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  ANDRIOD OS
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Blackberry 10
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  Blackberry Years 10
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <br />
              <hr className="s_hr" />
              <br />
              <div className="brend">
                <p>
                  <b>COLOR</b>
                </p>
                <br />

                <input
                  type="text"
                  className="brand_input"
                  placeholder=" Search"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />

                <br />
                <br />
                <label className="container">
                  Black
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Blue
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Green
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Grey
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  Orange
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <br />
              <hr className="s_hr" />
              <br />
              <div className="brend">
                <p>
                  <b>HARD DISK (GB)</b>
                </p>
                <br />

                <input
                  type="text"
                  className="brand_input"
                  placeholder=" Search"
                  style={{ fontFamily: "Arial, FontAwesome" }}
                />

                <br />
                <br />
                <label className="container">
                  Black
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Blue
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Green
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="container">
                  Grey
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>

                <label className="container">
                  Orange
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <br />
              <hr className="s_hr" />
              <br />
            </div>
          </div>
    )
}

export default LeftCatSideNav
