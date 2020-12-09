import React from 'react';
import * as FaIcon from "react-icons/fa";



class CatSideNav extends React.Component{

    render(){

        return(

            <React.Fragment>

                <div style={{display:"flex"}}>
                    <div class="sidenav">


                        <p><b>CATEGORY</b></p>

                        <br/>
                        

                        <p>Phones & Tablets</p>
                        <div >
                      <ul className="cs_section">
                          <li > Mobile Phone Accessories</li>
                          <br/>
                          <li>Mobile Phones</li>
                          <br/>
                          <li>Tablet Accessories</li>
                          <br/>
                          <li>Tablets</li>
                          <br/>
                          <li>Telephones & Accessories</li>


                      </ul>
                    <hr  className="s_hr"/>
                      </div>
                      <br/>
                      <br/>

                      <div>

                          <p><b> PRODUCT RATING</b></p>
                          <br/>
                            <ul className="cs_section">
                                <li>
                                    <span>  
                                         <div class="round">
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox"></label>
                                        </div>
                                                <div className="r_star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>

                                          <p className="r_text">  & above </p>
                                    </div>
                                    </span>
                                  
                                </li>

                                <li>
                                    <span>  
                                         <div class="round">
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox"></label>
                                        </div>
                                                <div className="r_star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>

                                          <p className="r_text">  & above </p>
                                    </div>
                                    </span>
                                  
                                </li>

                                <li>
                                    <span>  
                                         <div class="round">
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox"></label>
                                        </div>
                                                <div className="r_star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>

                                          <p className="r_text">  & above </p>
                                    </div>
                                    </span>
                                  
                                </li>

                                <li>
                                    <span>  
                                         <div class="round">
                                            <input type="checkbox" id="checkbox" />
                                            <label for="checkbox"></label>
                                        </div>
                                                <div className="r_star">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star "></span>
                                            <span class="fa fa-star"></span>
                                            <span class="fa fa-star"></span>

                                          <p className="r_text">  & above </p>
                                    </div>
                                    </span>
                                  
                                </li>
                            </ul>

                   


                      </div>

                      <hr  className="s_hr"/>
                      <br/>
                      <br/>

                      <div className="brend">

                          

                          <p><b>BRAND</b></p>
                          <br/>


                          <input type="text" className="brand_input" placeholder=" Search" style={{fontFamily:"Arial, FontAwesome"}}/>


                            <br/>
                            <br/>
                            <label class="container">A1
                                <input type="checkbox" checked="checked"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">AEC
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Amazon
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Anker
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>

                                <label class="container">Apple
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>

                      </div>
                        <br/>
                      <hr  className="s_hr"/>
                      <br/>
                      


                      <div>
                        <span><b>Price (  ₦  )</b></span>      <span className="apply"><b>APPLY</b></span>
                         <br/>
                         <br/>

                      <input style={{width:"100%"}} type="range" name="range" step="50000" min="100000" max="1000000" value="" onchange="rangePrimary.value=value"></input>
                    <div>  <span>    <input  style={{width:"7rem"}} placeholder="Minimum"/> </span> <span>   <input style={{width:"8rem"}} placeholder="Maximum" /> </span></div>
                 
                     
                    <br/>
                      <hr  className="s_hr"/>
                      <br/>
                     
                      <div className="brend">

                          

                            <p><b>OPERATING SYSTEM</b></p>
                            <br/>


                            <input type="text" className="brand_input" placeholder=" Search" style={{fontFamily:"Arial, FontAwesome"}}/>


                            <br/>
                            <br/>
                            <label class="container">IOS
                                <input type="checkbox" checked="checked"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">NOKIA OS
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">ANDRIOD OS
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">Blackberry 10
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>

                                <label class="container">Blackberry Years 10
                                <input type="checkbox"/>
                                <span class="checkmark"></span>
                                </label>

                            </div>
                            <br/>
                            <hr  className="s_hr"/>
                            <br/>


                            <div className="brend">

                          

<p><b>COLOR</b></p>
<br/>


<input type="text" className="brand_input" placeholder=" Search" style={{fontFamily:"Arial, FontAwesome"}}/>


                <br/>
                <br/>
                <label class="container">Black
                    <input type="checkbox" checked="checked"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="container">Blue 
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="container">Green
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="container">Grey
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Orange
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                </div>
                <br/>
                <hr  className="s_hr"/>
                <br/>

                <div className="brend">

                          

<p><b>HARD DISK (GB)</b></p>
<br/>


<input type="text" className="brand_input" placeholder=" Search" style={{fontFamily:"Arial, FontAwesome"}}/>


                <br/>
                <br/>
                <label class="container">Black
                    <input type="checkbox" checked="checked"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="container">Blue 
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="container">Green
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>
                    <label class="container">Grey
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                    <label class="container">Orange
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                    </label>

                </div>
                <br/>
                <hr  className="s_hr"/>
                <br/>












                      </div>


                    
                    </div>
                    <div className="mainer">
                            <div style={{display:"flex"}}>
                                <span><h3>Phone & Tablets </h3></span>

                                <span className="lefter">

                                <div class="dropdown">
                                    <button class="dropbtn">Sort by: popularity    <FaIcon.FaAngleDown /></button>
                                    <div class="dropdown-content">
                                    <a href="#">popularity</a>
                                    <a href="#">Newest Arrivals</a>
                                    <a href="#">Price: Low to High</a>
                                    <a href="#">Price: High to Low </a>
                                    <a href="#">Product Rating </a>
                                    

                                    </div>
                                    </div>
                               

                                </span>
                            </div>
                            <br/>
                            <hr/>
                    </div>


                    </div>
            </React.Fragment>

        );
    }
}

export default  CatSideNav ;