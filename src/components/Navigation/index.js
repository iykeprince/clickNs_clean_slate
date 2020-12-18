import React from "react";
// import { Container,InputGroup, Button, FormControl} from "react-bootstrap";
// import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="dnavbar">
            <div className="flexbox">
              <img
                className="nav-img"
                alt="Woozee"
                src="./asset/img/woozee.png"
              />

              <div>
                {/* <InputGroup className="navinput mb-3 ">
                      <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button className="inputbut" variant="outline-secondary">Button</Button>
                      </InputGroup.Append>
                   </InputGroup> */}

                <form action="/action_page.php">
                  <div class="input-group">
                    <input
                      style={{ background: "#fafafa" }}
                      type="text"
                      class="form-control"
                      placeholder="Search, products, brands and categories"
                      name="search"
                    />
                    <div className="input-group-btn">
                      <button className="s-but" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div></div>

              <div>
                <div class="dropdown">
                  <button className="dropbtn">
                    {/* <i style={{   color: "#043F7C", margin:"0.5rem", fontSize:"1.5rem"}}  class="fa fa-user"></i> */}
                    Hi bukky
                    <span>
                      {" "}
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                  </div>
                </div>
              </div>
              <div>
                <div class="dropdown">
                  <button className="dropbtn">
                    {" "}
                    <i
                      style={{ color: "rgb(35 36 37 / 79%)", fontSize: "" }}
                      class="fa fa-exclamation-circle"
                    ></i>{" "}
                    Help
                    <span>
                      {" "}
                      <i className="fa fa-caret-down"></i>
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <a href="/">Link 1</a>
                    <a href="/">Link 2</a>
                    <a href="/">Link 3</a>
                  </div>
                </div>
              </div>
              <div className="dropdown">
                <i
                  style={{
                    color: "rgb(35 36 37 / 79%)",
                    padding: "2px",
                    fontSize: "",
                  }}
                  class="fa fa-shopping-cart"
                ></i>
                Cart
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
